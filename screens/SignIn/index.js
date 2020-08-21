import React, { useState } from "react";
import { View } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import axios from 'axios';

import styles from "./styles";
import Background from "../../components/Background";
import Header from "../../components/Header";
import Logo from "../../components/Logo";
import { LOGIN_API } from '../../config/api';
import { PASSPORT_INVALID_CREDENTIALS, INVALID_CREDENTIALS } from '../../config/error_message';

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleLogin = () => {
    axios({
      method: 'post',
      url: LOGIN_API,
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        email: email,
        password: password
      }
    }).then(() => {
        props.navigation.navigate("Acasa");
    }).catch(error => {
      if(error.message == PASSPORT_INVALID_CREDENTIALS) {
        setErrorMessage(INVALID_CREDENTIALS)
      }
      setErrorMessage(error.message)
    })
  } 
  return (
    <Background>
      <Logo />

      <Header>Bine ai venit la Johnny's Barber Shop!</Header>
      <Text>Autentificare</Text>

      {errorMessage &&
        <Text style={{ color: 'red'}}>
          {errorMessage}
        </Text>
      }

      <Input
        value={email}
        onChangeText={(email) => setEmail(email)}
        placeholderTextColor="#c4c3cb"
        label="E-mail"
        placeholder="E-mail"
        rightIcon={{ type: "material-icons", name: "mail" }}
        style={styles.loginFormTextInput}
      />

      <Input
        value={password}
        onChangeText={(password) => setPassword(password)}
        placeholderTextColor="#c4c3cb"
        label="Parola"
        placeholder="Parola"
        rightIcon={{ type: "material-icons", name: "enhanced-encryption" }}
        style={styles.loginFormTextInput}
        secureTextEntry={true}
      />

      <View style={styles.buttonContainer}>
        <Button 
          title="Autentificare" 
          buttonStyle={styles.button}
          onPress={handleLogin} />
        <Button
          title="Nu ai un cont? Inregistreaza-te aici!"
          onPress={() => navigation.navigate('Register')}
          buttonStyle={styles.button}
        />
      </View>
    </Background>
  );
}
