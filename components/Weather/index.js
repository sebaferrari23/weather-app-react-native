import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native'
import WeatherInfo from '../WeatherInfo'

export default function Weather({ currentWeather, darkMode }) {
  return (
    <View style={styles.main}>
      <StatusBar style={darkMode ? 'inverted' : 'auto'} />
      <WeatherInfo currentWeather={currentWeather} />
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    flex: 1,
  }
});