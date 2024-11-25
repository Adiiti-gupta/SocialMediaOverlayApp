import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const FloatingButton = ({ onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Icon name="search" size={30} color="#fff" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    backgroundColor: '#6200ee',
    borderRadius: 50,
    padding: 15,
    elevation: 5,
  },
});

export default FloatingButton;