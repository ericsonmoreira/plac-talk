import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from '../../../theme';
import TopiqButton from '../../components/TopiqButton';
import JobIcon from '../../icons/JobIcon';
import StethoscopeIcon from '../../icons/StethoscopeIcon';

interface Topiq {
  id: number;
  title: string;
  percent?: number;
  icon: React.ComponentType;
}

const Home: React.FC = () => {
  const topiqs = [
    { id: 1, title: 'Mundo do trabalho 1', icon: JobIcon, percent: 0.1 },
    { id: 2, title: 'Mundo do trabalho 2', icon: JobIcon, percent: 0.1 },
    { id: 3, title: 'Saúde 1', icon: StethoscopeIcon, percent: 0.1 },
    { id: 4, title: 'Saúde 2', icon: StethoscopeIcon, percent: 1 },
  ] as Topiq[];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Escolha um tópico para praticar</Text>
      <View style={styles.content}>
        <FlatList
          data={topiqs}
          numColumns={2}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{ padding: 10 }}
          renderItem={({ item }) => (
            <TopiqButton title={item.title} percent={item.percent} icon={item.icon} />
          )}
          keyExtractor={(item) => String(item.id)}
        />
      </View>
    </SafeAreaView>
  );
};

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
    fontWeight: '500',
    fontFamily: 'Roboto_400Regular',
    marginTop: 10,
    paddingHorizontal: 10,
  },
});

export default Home;
