import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from '../../../theme';
import TopiqButton from '../../components/TopiqButton';
import JobIcon from '../../icons/JobIcon';
import StethoscopeIcon from '../../icons/StethoscopeIcon';
import UserCheckIcon from '../../icons/UserCheckIcon';
import { RootBottomTabParams } from '../../routes/app.routes';
import { MundoDoTrabalhoOne, MundoDoTrabalhoTwo, SaudeOne, SaudeTwo } from '../../topics';

const topiqs = [
  { ...MundoDoTrabalhoOne, percent: 0.1 },
  { ...MundoDoTrabalhoTwo, icon: JobIcon, percent: 0.1 },
  { ...SaudeOne, icon: StethoscopeIcon, percent: 0.1 },
  { ...SaudeTwo, icon: UserCheckIcon, percent: 1 },
];

const Home: React.FC = () => {
  const navigation = useNavigation<BottomTabNavigationProp<RootBottomTabParams>>();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Escolha um tópico para praticar</Text>
      <View style={styles.content}>
        <FlatList
          style={{ width: '100%' }}
          data={topiqs}
          numColumns={2}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{ padding: 10 }}
          renderItem={({ item }) => (
            <View style={{ width: '50%', alignItems: 'center' }}>
              <TopiqButton
                title={item.title}
                percent={item.percent}
                icon={item.icon}
                onPress={() => navigation.navigate('CLIPBOARD', { subTopics: item.subTopis })}
              />
            </View>
          )}
          keyExtractor={(item) => String(item.id)}
        />
      </View>
    </SafeAreaView>
  );
};

// TODO: usar styled components aqui
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.palette.background,
  },
  content: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    fontFamily: theme.fonts.medium,
    marginTop: 10,
    paddingHorizontal: 10,
  },
});

export default Home;
