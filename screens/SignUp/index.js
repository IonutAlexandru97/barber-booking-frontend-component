import React, { useState } from "react";
import { View } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import axios from "axios";

import styles from "./styles";
import Background from "../../components/Background";
import Header from "../../components/Header";
import Logo from "../../components/Logo";
import { REGISTER_API } from "../../config/api";
import {
  UNIQUE_EMAIL_CONSTRAINT,
  INVALID_CREDENTIALS,
  UNIQUE_EMAIL_MESSAGE,
} from "../../config/error_message";

export default function SignUp(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handelRegister = (props) => {
    axios({
      method: "post",
      url: REGISTER_API,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
      },
    })
      .then((response) => {
        console.log(response.status);
      })
      .catch((error) => {
        setErrorMessage(UNIQUE_EMAIL_MESSAGE)
      });
  };
  return (
    <Background>
      <Logo />

      <Header>Bine ai venit la Johnny's Barber Shop!</Header>
      <Text>Inregistrare</Text>

      {errorMessage && <Text style={{ color: "red" }}>{errorMessage}</Text>}

      <Input
        value={lastName}
        onChangeText={(lastName) => setLastName(lastName)}
        placeholderTextColor="#c4c3cb"
        label="Nume"
        placeholder="Nume"
        rightIcon={{ type: "material-icons", name: "account-circle" }}
        style={styles.loginFormTextInput}
      />

      <Input
        value={firstName}
        onChangeText={(firstName) => setFirstName(firstName)}
        placeholderTextColor="#c4c3cb"
        label="Prenume"
        placeholder="Prenume"
        rightIcon={{ type: "material-icons", name: "account-circle" }}
        style={styles.loginFormTextInput}
      />

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
          title="Inregistrare"
          buttonStyle={styles.button}
          onPress={handelRegister}
        />
        <Button
          title="Ai deja un cont? Autentifica-te aici!"
          buttonStyle={styles.button}
          onPress={() => props.navigation.navigate("Login")}
        />
      </View>
    </Background>
  );
}
