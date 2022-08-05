import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

interface TopiqButtonProps {
  title: string;
}

const TopiqButton: React.FC<TouchableOpacityProps & TopiqButtonProps> = (props) => {
  const { title } = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} {...props}>
        <Text>TopiqButton</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 128,
    height: 172,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
    borderWidth: 4,
    borderColor: '#FFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF38B',
  },
  title: {
    color: '#000',
    fontFamily: 'Roboto_400Regular',
    fontSize: 18,
    lineHeight: 24,
  },
});

export default TopiqButton;
