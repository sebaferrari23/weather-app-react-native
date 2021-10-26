import styled from 'styled-components/native'
    
export const Wrapper = styled.View`
  position: absolute;
  top: 50px;
  padding: 12px 24px 0 32px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
`;
    
export const CityWrapper = styled.View`
  display: flex;
`;
    
export const CityName = styled.Text`
  font-weight: 700;
  font-size: 20px;
  color: ${props => props.theme.mainColor};
`;
    
export const CityLabel = styled.Text`
  font-size: 12px;
  color: ${props => props.theme.mainColor};
`;

export const Options = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto;
`;