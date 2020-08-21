import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import axios from "axios";

import { GET_ALL_SLOTS_API } from "../../config/api";

export default function Slots({ route }) {
  const [slots, setSlots] = useState({ data: [] });
  const [color, setColor] = useState('green')

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(GET_ALL_SLOTS_API);
      setSlots(result.data);
    };
    fetchData();
  }, []);



  const { bookingDate } = route.params;

  const slotsArr = slots.data.map((slots) =>
    Object.keys(slots).map((key, index) => {
      delete slots["id"];
      delete slots["createdAt"];
      delete slots["updatedAt"];
      return (
        <View key={index} style={{ margin: 5 }}>
          {slots[key] !== undefined && <Button
          buttonStyle={{ backgroundColor: color}}
          title={slots[key]}
          />}
        </View>
      );
    })
  );
  return <View>{slotsArr}</View>;
}
