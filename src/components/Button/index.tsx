import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, TextButton } from './styles';

// import { Container } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  color: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { children } = props;

  return (
    <Container>
      <TextButton>{children}</TextButton>
      <Ionicons name="md-checkmark-circle" size={32} color="green" />
    </Container>
  );
};

export default Button;
