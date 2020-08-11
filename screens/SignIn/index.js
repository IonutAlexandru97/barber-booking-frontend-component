import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import axios from 'axios';

import styles from "./styles";
import Background from "../../components/Background";
import Header from "../../components/Header";
import Logo from "../../components/Logo";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [user, setUser] = useState();


  const handleLogin = event => {
    axios({
      method: 'post',
      url: 'http://localhost:5000/api/login',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        email: email,
        password: password
      }
    }).then(response => {
      console.log(response.data.first_name);
    }).catch(error => {
      console.log(error);
    })
  } 
  return (
    <Background>
      <Logo />

      <Header>Bine ai venit la Johnny's Barber Shop!</Header>
      <Text>Autentificare</Text>

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
          buttonStyle={styles.button}
        />
      </View>
    </Background>
  );
}
