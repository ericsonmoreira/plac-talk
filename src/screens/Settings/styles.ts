import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 25;
  font-family: ${(props) => props.theme.fonts.medium};
`;
