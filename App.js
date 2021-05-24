import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';

const Stack = createStackNavigator();
const App = (props) => {
  const name = 'Home';
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={name}
          component={FirstScreen}
          options={() => ({
            headerStyle: {
              backgroundColor: '#892b2f',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 30,
            },
            headerRight: () => (
              <View>
                <Text>Some Text</Text>
              </View>
            ),
          })}
        />
        <Stack.Screen
          name='Second Screen'
          component={SecondScreen}
          options={() => ({
            headerBackTitle: 'Take me back',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    fontSize: 30,
  },
});
