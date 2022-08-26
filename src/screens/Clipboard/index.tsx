import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { RootBottomTabParams } from '../../routes/app.routes';
import { Container, Title } from './styles';

type ClipboardScreenProps = BottomTabScreenProps<RootBottomTabParams, 'CLIPBOARD'>;

const Clipboard: React.FC = () => {
  const { params } = useRoute<RouteProp<ClipboardScreenProps>>();

  return (
    <Container>
      <Title>Clipboard</Title>
      <Title>{JSON.stringify(params, null, 2)}</Title>
    </Container>
  );
};

export default Clipboard;
