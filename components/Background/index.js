import React, { memo } from "react";
import {
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";

import styles from "./styles";

const Background = ({ children }) => (
  <ImageBackground
    source={require('../../assets/background_dot.png')}
    resizeMode="repeat"
    style={styles.background}
  >
    <KeyboardAvoidingView style={styles.container} behavior="height">
      {children}
    </KeyboardAvoidingView>
  </ImageBackground>
);

export default memo(Background);
