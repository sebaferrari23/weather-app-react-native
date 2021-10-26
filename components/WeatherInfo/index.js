import React from 'react'
import {
  Wrapper,
  Icon,
  Date,
  TempMain,
  TempValue, 
  TempUnits,
  TempMinMax,
  TempMin,
  TempMax,
  Description,
} from './styled'

export default function WeatherInfo({ currentWeather }) {
  const { 
    main: { temp, temp_max, temp_min },
    weather: [details],
  } = currentWeather

  const { icon, description } = details
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`

  return (
    <Wrapper>
      <Date>Friday, 25 December 2020</Date>
      <TempMain>
        <TempValue>{temp.toFixed(0)}</TempValue>
        <TempUnits>°C</TempUnits>
      </TempMain>
      <TempMinMax>
        <TempMin>{temp_min.toFixed(0)}°C</TempMin>
        <TempMax>{temp_max.toFixed(0)}°C</TempMax>
      </TempMinMax>
      <Icon source={{ uri: iconUrl }} />
      <Description>{description}</Description>
    </Wrapper>
  )
}