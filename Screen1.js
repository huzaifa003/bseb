import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function Home() {
  


  const navigation = useNavigation();

  const nextBtn = () => {
   
    navigation.navigate('LoginScreen');

  }

  return (
    <View style={styles.container}>
      <Text>This is Screen 1</Text>
      <Text>Hello I am Huzaifa Imran</Text>

      
      <TouchableOpacity style={styles.button} onPress={nextBtn}>
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
