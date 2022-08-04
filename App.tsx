import {
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
  useFonts,
} from '@expo-google-fonts/roboto';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import Button from './src/components/Button';
import theme from './theme';
import Ionicons from '@expo/vector-icons/Ionicons';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <Text>Olá Mundo</Text>
        <Ionicons name="md-checkmark-circle" size={32} color="green" />
        <Button color="asd">Teoria e exemplos</Button>
        <StatusBar style="dark" />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.palette.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
