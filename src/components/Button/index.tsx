import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

// import { Container } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  color: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { children } = props;

  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{children}</Text>
      <Ionicons name="md-checkmark-circle" size={32} color="green" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: '#FFF38B',
  },
  text: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 20,
  },
});

export default Button;
