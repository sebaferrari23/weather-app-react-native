import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { Platform, Text } from 'react-native'
import { ThemeProvider } from 'styled-components'
import * as Location from 'expo-location'
import Weather from './components/Weather'
import Header from './components/Header'
import Constants from 'expo-constants'
import { WEATHER_API_KEY } from '@env'
import { darkTheme, lightTheme } from './constants/themes'
import { Layout } from './styled'

const BASE_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?'

export default function App() {

  const [errorMessage, setErrorMessage] = useState(null)
  const [currentWeather, setCurrentWeather] = useState(null)
  const [unitStystem, setUnitStystem] = useState('metric')
  const [darkMode, setDarkMode] = useState(false);  

  const toggleDarkMode = () => {
    setDarkMode(previousState => !previousState);
  }

  useEffect(() => {
    fetchWeather()
  }, [])

  const fetchWeather = async () => {
    try {
      if (Platform.OS === 'android' && !Constants.isDevice) {
        setErrorMessage(
          'This will not work on Snack in an Android emulator. Try it on your device!'
        );
        return;
      }
      let { status } = await Location.requestForegroundPermissionsAsync();
      if(status !== 'granted') {
        setErrorMessage('Access to location is needed to run the app')
        return
      }
      const location = await Location.getCurrentPositionAsync()
      const { latitude, longitude } = location.coords
      const weatherUrl = `${BASE_WEATHER_URL}lat=${latitude}&lon=${longitude}&units=${unitStystem}&appid=${WEATHER_API_KEY}`

      const response = await fetch(weatherUrl)
      const result = await response.json()

      if(response.ok) {
        setCurrentWeather(result)
      } else {
        setErrorMessage(result.message)
      }

    } catch (error) { 
      setErrorMessage(error.message)
    }
  }

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      { currentWeather ? (
          <Layout>
            <Header darkMode={darkMode} onSwitchChange={toggleDarkMode} city={currentWeather.name} />
            <Weather darkMode={darkMode} currentWeather={currentWeather} />
          </Layout>
        ) : (
          <Layout>
            <Text>{errorMessage}</Text>
            <StatusBar style={darkMode ? 'inverted' : 'auto'} />
          </Layout>
        )
      }
    </ThemeProvider>
  );
}