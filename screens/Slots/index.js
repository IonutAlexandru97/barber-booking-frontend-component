import React, { useState, useEffect, version } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import axios from "axios";

import { GET_ALL_SLOTS_API } from "../../config/api";

export default function Slots({ route }) {
  const [slots, setSlots] = useState({ data: [] });
  const [status, setStatus] = useState({ data: []});
  const { bookingDate } = route.params;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(GET_ALL_SLOTS_API);
      const status = await axios('http://localhost:5000/api/status/all');
      setSlots(result.data);
      setStatus(status.data);
    };
    fetchData();
  }, []);


const createAppointment = (value) => {
  axios({
    method: 'post',
    url: 'http://localhost:5000/api/status/create',
    data: {
      status: 'ocuppied',
      slot: value
    }
  })
}

let array = []
for(const [key, value] of Object.entries(status)) {
        for(const[key2, value2] of Object.entries(value)){
          array.push({
            'slot': value2.slot,
            'status': value2.status
          })
        }
      }



  const slotsArr = slots.data.map((slots) =>
    Object.keys(slots).map((key, index) => {
      delete slots["id"];
      delete slots["createdAt"];
      delete slots["updatedAt"];
      return (
        <View key={index} style={{ margin: 5 }}>
          {slots[key] !== undefined &&
          <Button
          buttonStyle={{ backgroundColor: 'green'}}
          title={slots[key]}
          // onPress={() => createAppointment(slots[key])}
          />
        } 
        </View>
      );
    })
  );
  return <View>{slotsArr}</View>;
}
