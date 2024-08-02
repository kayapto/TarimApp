import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FirebaseAuthProvider } from '@react-firebase/auth';
import { FirebaseDatabaseProvider } from '@react-firebase/database';
import firebase from '@react-native-firebase/app';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import NewAdScreen from './screens/NewAdScreen';

const Stack = createStackNavigator();

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);

export default function App() {
  return (
    <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
      <FirebaseDatabaseProvider firebase={firebase}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="NewAd" component={NewAdScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </FirebaseDatabaseProvider>
    </FirebaseAuthProvider>
  );
}

