import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

interface TopiqButtonProps {
  title: string;
  percent?: number;
  icon: React.ComponentType;
}

const TopiqButton: React.FC<TouchableOpacityProps & TopiqButtonProps> = (props) => {
  const { title, percent, icon: Icon } = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} {...props}>
        <Icon />
        {percent && <Text style={styles.percent}>{`${percent * 100}%`}</Text>}
      </TouchableOpacity>
      <Text numberOfLines={2} ellipsizeMode="tail" style={styles.title}>
        {title}
      </Text>
    </View>
  );
};

// TODO: passar isso para styled components
const styles = StyleSheet.create({
  container: {
    width: 128,
    height: 170,
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
    position: 'relative',
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
  percent: {
    color: '#494141',
    backgroundColor: '#9EDBDC',
    borderRadius: 8,
    position: 'absolute',
    bottom: -14,
    right: -4,
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
});

export default TopiqButton;
