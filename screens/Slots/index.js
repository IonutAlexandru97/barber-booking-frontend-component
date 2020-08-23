import React, { useState, useEffect, version } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import axios from "axios";

import { GET_ALL_SLOTS_API } from "../../config/api";

export default function Slots({ route }) {
  const { bookingDate } = route.params;
  const [appointment, setAppointment] = useState({ data: [] })
  const slots = {
    "slots": {
      "slot1": "9:00 - 10:00",
      "slot2": "10:00 - 11:00",
      "slot3": "11:00 - 12:00",
      "slot4": "12:00 - 13:00",
      "slot5": "13:00 - 14:00",
      "slot6": "14:00 - 15:00"
  }
}



  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://localhost:5000/api/appointments/all');
      setAppointment(result.data);
    };
    fetchData();
  }, []);


const updateStatus = () => {
  Object.keys(appointment).map((appointmentKey, appointmentIndex) => {
    Object.keys(appointment[appointmentKey]).map((secAppkey, index) => {
      Object.keys(slots).map((slotsKey, slotsIndex) => {
        Object.keys(slots[slotsKey]).forEach((key, index) => {
          if(slots[slotsKey][key] == appointment[appointmentKey][secAppkey].slot) {
            
          }
        })
      })
    })
  })
}

updateStatus();


const createAppointment = (value) => {
  axios({
    method: 'post',
    url: 'http://localhost:5000/api/appointments/create',
    data: {
      status: 'ocuppied',
      month: bookingDate.month,
      day: bookingDate.day,
      slot: value
    }
  })
}



  // const slotsArr = slots.data.map((slots) =>
  //   Object.keys(slots).map((key, index) => {
  //     delete slots["id"];
  //     delete slots["createdAt"];
  //     delete slots["updatedAt"];
  //     return (
  //       <View key={index} style={{ margin: 5 }}>
  //         {slots[key] !== undefined &&
  //         <Button
  //         buttonStyle={{ backgroundColor: 'green'}}
  //         title={slots[key]}
  //         // onPress={() => createAppointment(slots[key])}
  //         />
  //       } 
  //       </View>
  //     );
  //   })
  // );
  return <View>

      <Button
      // buttonStyle={{ backgroundColor: buttonColor.button1.color}}
      title={slots.slots.slot1}
      onPress={() => createAppointment(slots.slots.slot1)}
      />
      <Button
      // buttonStyle={{ backgroundColor: buttonColor.button2}}
      onPress={() => createAppointment(slots.slots.slot2)}
      title={slots.slots.slot2}
      />
      <Button
      // buttonStyle={{ backgroundColor: buttonColor.button2}}
      onPress={() => createAppointment(slots.slots.slot3)}
      title={slots.slots.slot3}
      />

  </View>;
}
