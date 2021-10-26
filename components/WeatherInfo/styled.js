import styled from 'styled-components/native'
    
export const Wrapper = styled.View`
  align-items: center;
  position: relative;
  padding-top: 80px;
  padding-bottom: 50px;
`;

export const Date = styled.Text`
  font-size: 18px;
  margin-bottom: 16px;
  color: ${props => props.theme.altColor};
`;

export const Icon = styled.Image`
  width: 200px;
  height: 200px;
`;

export const TempMain = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 16px;
`;

export const TempValue = styled.Text`
  font-size: 96px;
  font-weight: 500;
  color: ${props => props.theme.mainColor};
`;

export const TempUnits = styled.Text`
  font-size: 36px;
  line-height: 80px;
  color: ${props => props.theme.mainColor};
`;

export const Description = styled.Text`
  text-transform: capitalize;
  font-size: 18px;
  color: ${props => props.theme.altColor};
`;

export const TempMinMax = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TempMin = styled.Text`
  font-size: 18px;
  color: ${props => props.theme.altColor};
  margin: 0 10px;
`;

export const TempMax = styled.Text`
  font-size: 20px;
  color: ${props => props.theme.altColor};
  margin: 0 10px;
`;