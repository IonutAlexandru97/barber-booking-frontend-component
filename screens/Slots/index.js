import React, { useState, useEffect, version } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import axios from "axios";

import { GET_ALL_SLOTS_API } from "../../config/api";

export default function Slots({ route }) {
  const [status, setStatus] = useState({ data: []});
  const { bookingDate } = route.params;

  const slots = {
    "slots": {
      "slot1": "9:00am to 9:30am",
      "slot2": "9:30am to 10:00am",
      "slot3": "10:00am to 10:30am",
      "slot4": "10:30am to 11:00am",
      "slot5": "11:00am to 11:30am",
      "slot6": "11:30am to 12:00pm"
  }
}

const [buttonColor, setButtonColor] = useState({
    button1: { 
      color: 'green' },
    button2: 'default',
    button3: 'green'
})


let testSlot = {
  "data": {
    "slot": "9:30am to 10:00am",
    "color": "red"
  }
}


  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(GET_ALL_SLOTS_API);
      setSlots(result.data);
    };

    // updateColor();
    fetchData();
  }, []);


const updateColor = (value) => {
  Object.keys(testSlot).map((slotKey, index) => {
    Object.keys(slots).map((key, index) => {
      Object.keys(slots[key]).map((anKey, index) => {
        if(testSlot[slotKey].slot == slots[key][anKey]) {
          setButtonColor({
            ...buttonColor,
            
          })
        }
      })

    })
  })
}


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
      buttonStyle={{ backgroundColor: buttonColor.button1.color}}
      title={slots.slots.slot1}
      onPress={() => createAppointment(slots.slots.slot1)}
      />
      <Button
      buttonStyle={{ backgroundColor: buttonColor.button2}}
      title={slots.slots.slot2}
      />
        <Button
      buttonStyle={{ backgroundColor: buttonColor.button2}}
      title={slots.slots.slot2}
      />

  </View>;
}
