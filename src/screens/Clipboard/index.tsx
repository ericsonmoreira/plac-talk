import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootBottomTabParams } from '../../routes/app.routes';

type ClipboardScreenProps = BottomTabScreenProps<RootBottomTabParams, 'CLIPBOARD'>;

const Clipboard: React.FC = () => {
  const { params } = useRoute<RouteProp<ClipboardScreenProps>>();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Clipboard</Text>
      <Text>{JSON.stringify(params, null, 2)}</Text>
    </SafeAreaView>
  );
};

// TODO: usar o styled components aqui
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
});

export default Clipboard;
