import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const FirstScreen = ({ navigation, props }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hello First Screen</Text>
      <Button
        title='Press Me!'
        onPress={() => navigation.navigate('Second Screen', {name: 'Luke'})}
      />
    </View>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },

  header: {
    fontSize: 30,
  },
});
