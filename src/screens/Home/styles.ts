import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.background};
`;

export const Content = styled.View`
  flex: 1;
  margin-top: 10px;
  padding: 0 10px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 25px;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.medium};
  margin: 10px 10px 0;
`;
