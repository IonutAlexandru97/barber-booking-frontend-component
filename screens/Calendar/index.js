import React from 'react';
import { Calendar } from 'react-native-calendars';
import { View, StatusBar } from 'react-native';

import styles from './styles';

export default function Cal() {

    return(
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />

            <Calendar
                style={styles.calendar}
                theme={{
                    selectedDayBackgroundColor: 'green',
                    todayTextColor: 'red',
                    arrowColor: 'green'
                }}
            />
        </View>
    )
}