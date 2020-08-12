import React, { memo } from "react";
import { Image } from "react-native";

import styles from './styles';

const Logo = () => (
  <Image source={require("../../assets/logo.jpg")} style={styles.image} />
);

export default memo(Logo);
