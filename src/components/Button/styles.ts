import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  padding: 8px 16px;
  background-color: #fff38b;
  border: 2px solid ${({ theme }) => theme.palette.common.black};
`;

export const TextButton = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
