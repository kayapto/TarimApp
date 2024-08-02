import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import firestore from '@react-native-firebase/firestore';

export default function HomeScreen({ navigation }) {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('ads')
      .orderBy('createdAt', 'desc')
      .onSnapshot(snapshot => {
        const adsList = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAds(adsList);
      });

    return () => unsubscribe();
  }, []);

  return (
    <View>
      <FlatList
        data={ads}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
      />
      <Button title="New Ad" onPress={() => navigation.navigate('NewAd')} />
    </View>
  );
}

