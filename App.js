import React from 'react';
import { View } from 'react-native';
import FloatingButton from './components/FloatingButton';

const App = () => {
  const handleScan = () => {
    Alert.alert('Button Pressed', 'Scanning for products...');
  };

  return (
    <View style={Style.container}>
      <FloatingButton onPress={handleButtonPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default App;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FloatingButton from './src/components/FloatingButton';
import ProductResultsScreen from './src/screens/ProductResultsScreen';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={FloatingButton} />
      <Stack.Screen name="Results" component={ProductResultsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;

const handleButtonPress = async () => {
  const response = await fetch('http://localhost:5000/detect-product', {
    method: 'POST',
    body: formData,
  });
  const data = await response.json();
  Alert.alert('Product Detected', data.product);
};