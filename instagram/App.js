import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from "./componments/auth/Landing"
import RegisterScreen from "./componments/auth/Register"

import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4xfKVhLEfOsQtYm6nKF09SOal1TbrpUQ",
  authDomain: "instagram-dev-854ba.firebaseapp.com",
  projectId: "instagram-dev-854ba",
  storageBucket: "instagram-dev-854ba.appspot.com",
  messagingSenderId: "109164874261",
  appId: "1:109164874261:web:3d746f415667b9c5515c1c",
  measurementId: "G-WTCRYKWDP2"
};

// Initialize Firebase
if(firebase.apps.length === 0){
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen name="Landing" component={LandingScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown:false}}/>
     </Stack.Navigator>
    </NavigationContainer>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
