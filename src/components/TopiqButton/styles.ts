import styled from 'styled-components/native';

export const Container = styled.View`
  width: 128px;
  height: 170px;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
  width: 110px;
  height: 110px;
  border-radius: 55px;
  border: 4px solid ${({ theme }) => theme.palette.common.white};
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: #fff38b;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.palette.common.black};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 18px;
  line-height: 24px;
`;

export const Percent = styled.Text`
  position: absolute;
  bottom: -14px;
  right: -4px;
  padding: 4px 6px;
  border-radius: 8px;
  color: #494141;
  background-color: #9edbdc;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 12px;
`;
