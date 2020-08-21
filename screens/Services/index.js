import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Text, PricingCard } from 'react-native-elements';
import { ScrollView } from 'react-native';

import { GET_ALL_SERVICES_API } from '../../config/api';
import styles from './styles';

export default function Services({ navigation }) {

    const [services, setServices] = useState({ data: []});

    useEffect(() => {
        const fetchData = async() => {
            const result = await axios(GET_ALL_SERVICES_API);
            setServices(result.data);
        };
        fetchData();
    }, [GET_ALL_SERVICES_API]);

    return (
      <ScrollView style={styles.container}>
        {services.data.map((item, i) => (
          <PricingCard
            key={i}
            color="#4f9deb"
            title={item.service_name}
            price={item.service_value + " " + "RON"}
            info={[item.service_description]}
            button={{ title: 'Fa o programare', icon: 'alarm-add' }}
            onButtonPress={() => navigation.navigate('Calendar')}
          />
        ))}
      </ScrollView>
    );

}