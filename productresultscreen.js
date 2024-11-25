import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProductResultsScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Product Results</Text>
    <Text style={styles.text}>Here are the detected products...</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
  },
});

export default ProductResultsScreen;