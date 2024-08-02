import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import firestore from '@react-native-firebase/firestore';

export default function NewAdScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    firestore()
      .collection('ads')
      .add({
        title,
        description,
        createdAt: firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        navigation.navigate('Home');
      })
      .catch(error => console.error(error));
  };

  return (
    <View>
      <Text>Ad Title:</Text>
      <TextInput value={title} onChangeText={setTitle} />
      <Text>Description:</Text>
      <TextInput value={description} onChangeText={setDescription} />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

