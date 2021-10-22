import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';

export default function App() {

  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    load()
  }, [])

  const load = async () => {
    try {
      let { status } = await Location.requestBackgroundPermissionsAsync();
      if(status !== 'granted') {
        setErrorMessage('Access to location is needed to run the app')
        return
      }
      const location = await Location.getCurrentPositionAsync()
      const { latitude, longitude } = location.coords
      alert(`Latitude: ${latitude}, Longitude: ${longitude}`);

    } catch (e) { console.log(e) }
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
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
});
