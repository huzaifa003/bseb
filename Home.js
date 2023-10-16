import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function Home() {
  
  const [username, onChangeUsername] = useState('');
  const [passsword, onChangePassword] = useState('');

  const navigation = useNavigation();

  const loginBtnPressed = () => {
   
    navigation.navigate('DDD')

  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text> This is Home Screen</Text>

      
      <TouchableOpacity style={styles.button} onPress={loginBtnPressed}>
        <Text style={{color:'white'}}>Sign In</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 10,
  },
});
