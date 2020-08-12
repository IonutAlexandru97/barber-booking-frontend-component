import React, { memo } from 'react';
import { Text } from 'react-native';

import styles from './styles';

const Header = ({ children }) => <Text style={styles.header}>{children}</Text>;

export default memo(Header);
