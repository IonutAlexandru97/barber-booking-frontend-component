import React, { useState, useEffect, version } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import axios from "axios";

import { GET_ALL_SLOTS_API } from "../../config/api";

export default function Slots({ route }) {
  const { bookingDate } = route.params;
  const [appointment, setAppointment] = useState({ data: [] });
  const slots = {
    slot1: {
      slot: "9:00 - 10:00",
      color: "green",
    },
    slot2: {
      slot: "10:00 - 11:00",
      color: "green",
    },
    slot3: {
      slot: "11:00 - 12:00",
      color: "green",
    },
    slot4: {
      slot: "12:00 - 13:00",
      color: "green",
    },
    slot5: {
      slot: "13:00 - 14:00",
      color: "green",
    },
    slot6: {
      slot: "14:00 - 15:00",
      color: "green",
    },
    slot7: {
      slot: "15:00 - 16:00",
      color: "green",
    },
    slot8: {
      slot: "17:00 - 18:00",
      color: "green",
    },
    slot9: {
      slot: "18:00 - 19:00",
      color: "green",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:5000/api/appointments/all");
      setAppointment(result.data);
    };
    fetchData();
  }, []);

  const updateStatus = () => {
    Object.keys(appointment).map((appointmentKey) => {
      Object.keys(appointment[appointmentKey]).map((secAppkey) => {
        Object.keys(slots).map((slotsKey) => {
          Object.keys(slots[slotsKey]).forEach((key) => {
            if (
              slots[slotsKey][key] ==
                appointment[appointmentKey][secAppkey].slot &&
              bookingDate.day == appointment[appointmentKey][secAppkey].day
            ) {
              slots[slotsKey].color = "red";
            }
          });
        });
      });
    });
  };

  updateStatus();

  const createAppointment = (value) => {
    axios({
      method: "post",
      url: "http://localhost:5000/api/appointments/create",
      data: {
        status: "ocuppied",
        month: bookingDate.month,
        day: bookingDate.day,
        slot: value,
      },
    }).then((res) => {
      if (res.status === 200) {
        window.location.reload();
      }
    });
  };

  const slotsArray = Object.keys(slots).map((slotsKey, index) => {
      return(
        <View key={index} style={{ margin: 5}}>
            <Button
            title={slots[slotsKey].slot}
            buttonStyle={{ backgroundColor: slots[slotsKey].color}}
            onPress={() => createAppointment(slots[slotsKey].slot)}
            />
        </View>
      )
  })
  
  return (
    <View style={{ margin: 5 }}>
      {slotsArray}
    </View>
  );
}
