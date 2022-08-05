import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TopiqButton from '../../components/TopiqButton';

const Home: React.FC = () => {
  const topiqs = [
    { id: 1, title: 'Mundo do trabalho 1' },
    { id: 2, title: 'Mundo do trabalho 2' },
    { id: 3, title: 'Saúde 1' },
    { id: 4, title: 'Saúde 2' },
    { id: 5, title: 'Saúde 3' },
    { id: 6, title: 'Saúde 3' },
    { id: 7, title: 'Saúde 3' },
    { id: 8, title: 'Saúde 3' },
    { id: 9, title: 'Saúde 3' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Escolha um tópico para praticar</Text>
      <View style={styles.content}>
        <FlatList
          data={topiqs}
          numColumns={2}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <TopiqButton title={item.title} />}
          keyExtractor={(item) => String(item.id)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    display: 'flex',
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: '500',
    fontFamily: 'Roboto_400Regular',
    marginTop: 10,
    paddingHorizontal: 10,
  },
});

export default Home;
