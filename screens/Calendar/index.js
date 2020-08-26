import React, { useState } from 'react';
import { Calendar } from 'react-native-calendars';
import { View, StatusBar } from 'react-native';

import styles from './styles';

export default function Cal({ navigation }) {

    const [selected, setSelected] = useState();

    function onDayPress(day) {
        setSelected(day.dateString);
        navigation.navigate('Slots', { bookingDate: day})
    }

    return(
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Calendar
                onDayPress={onDayPress}
                style={styles.calendar}
                hideArrows={false}
                theme={{
                    selectedDayBackgroundColor: 'green',
                    todayTextColor: 'red',
                    arrowColor: 'green'
                }}
            />
        </View>
    )
}