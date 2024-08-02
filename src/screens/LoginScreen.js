import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import auth from '@react-native-firebase/auth';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('Home');
      })
      .catch(error => console.error(error));
  };

  return (
    <View>
      <Text>Email:</Text>
      <TextInput value={email} onChangeText={setEmail} />
      <Text>Password:</Text>
      <TextInput value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Sign Up" onPress={() => navigation.navigate('Signup')} />
    </View>
  );
}

