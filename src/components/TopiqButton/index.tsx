import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Button, Container, Percent, Title } from './styles';

interface TopiqButtonProps {
  title: string;
  percent?: number;
  icon: React.ComponentType;
}

const TopiqButton: React.FC<TouchableOpacityProps & TopiqButtonProps> = (props) => {
  const { title, percent, icon: Icon } = props;

  return (
    <Container>
      <Button {...props}>
        <Icon />
        {percent && <Percent>{`${percent * 100}%`}</Percent>}
      </Button>
      <Title numberOfLines={2} ellipsizeMode="tail">
        {title}
      </Title>
    </Container>
  );
};

export default TopiqButton;
