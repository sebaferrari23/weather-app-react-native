import React from 'react'
import { Switch, Image, TouchableHighlight } from 'react-native'
import { 
  Wrapper, 
  CityWrapper,
  CityName,
  CityLabel,
  Options
} from './styled'

export default function Header({ city, onSwitchChange, darkMode }) {

  const onPress = () => console.log('clicked!');

  return (
    <Wrapper>
      <CityWrapper>
        <CityName>{city}</CityName>
        <CityLabel>Current Location</CityLabel>
      </CityWrapper>
      <Options>
        <Switch 
          onValueChange={onSwitchChange}
          value={darkMode}
        />
        <TouchableHighlight
          style={{ padding: 10, borderRadius: 50 }}
          underlayColor="#DDD"
          onPress={onPress}
        >
          <Image 
            source={require('../../assets/icons/locations.png')} 
            style={{ width: 21, height: 21 }}
          />
        </TouchableHighlight>
        <TouchableHighlight
          style={{ padding: 10, borderRadius: 50 }}
          underlayColor="#DDD"
          onPress={onPress}
        >
          <Image 
            source={require('../../assets/icons/settings.png')} 
            style={{ width: 21, height: 21 }}
          />
        </TouchableHighlight>
      </Options>
    </Wrapper>
  )
}
