import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import firestore from '@react-native-firebase/firestore';

export default function AddProductScreen({ navigation }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    firestore()
      .collection('products')
      .add({
        name,
        price,
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
      <Text>Product Name:</Text>
      <TextInput value={name} onChangeText={setName} />
      <Text>Price:</Text>
      <TextInput value={price} onChangeText={setPrice} />
      <Text>Description:</Text>
      <TextInput value={description} onChangeText={setDescription} />
      <Button title="Add Product" onPress={handleSubmit} />
    </View>
  );
}
