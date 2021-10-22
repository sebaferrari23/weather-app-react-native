import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function WeatherInfo({ currentWeather }) {

  const { 
    main: { temp },
    weather: [details],
    name
  } = currentWeather

  const { icon, main, description } = details
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`

  console.log(iconUrl);

  return (
    <View style={styles.weatherInfo}>
      <Image style={styles.weatherIcon} source={{ uri: iconUrl }} />
      <View style={styles.weatherDegrees}>
        <Text style={styles.textPrimary}>
          {temp.toFixed(0)}
        </Text>
        <Text style={styles.textSmall}>°</Text>
      </View>
      <Text style={styles.weatherDescription}>{description}</Text>
      <Text style={styles.textSecondary}>{main}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  weatherInfo: {
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,.04)',
    borderRadius: 20,
    margin: 16,
    position: 'relative',
    paddingTop: 80,
    paddingBottom: 50,
  },
  weatherDescription: {
    textTransform: 'capitalize',
    color: '#fff',
    opacity: 0.5,
    fontSize: 13,
    fontStyle: 'italic'
  },
  weatherIcon: {
    position: 'absolute',
    top: -80,
    width: 200,
    height: 200
  },
  weatherDegrees: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginRight: -20
  },
  textPrimary: {
    fontSize: 90,
    fontWeight: '700',
    color: '#fff',
  },
  textSmall: {
    fontSize: 50,
    lineHeight: 90,
    color: '#fff'
  },
  textSecondary: {
    fontSize: 20,
    color: '#fff',
    marginTop: 10
  },
})