import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, View } from 'react-native';
import TopiqButton from '../../components/TopiqButton';
import JobIcon from '../../icons/JobIcon';
import StethoscopeIcon from '../../icons/StethoscopeIcon';
import UserCheckIcon from '../../icons/UserCheckIcon';
import { RootBottomTabParams } from '../../routes/app.routes';
import { MundoDoTrabalhoOne, MundoDoTrabalhoTwo, SaudeOne, SaudeTwo } from '../../topics';
import { Container, Content, Title } from './styles';

const topiqs = [
  { ...MundoDoTrabalhoOne, percent: 0.1 },
  { ...MundoDoTrabalhoTwo, icon: JobIcon, percent: 0.1 },
  { ...SaudeOne, icon: StethoscopeIcon, percent: 0.1 },
  { ...SaudeTwo, icon: UserCheckIcon, percent: 1 },
];

const Home: React.FC = () => {
  const navigation = useNavigation<BottomTabNavigationProp<RootBottomTabParams>>();

  return (
    <Container>
      <Title>Escolha um tópico para praticar</Title>
      <Content>
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
      </Content>
    </Container>
  );
};

export default Home;
