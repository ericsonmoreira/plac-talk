/* eslint-disable @typescript-eslint/no-explicit-any */
import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import theme from '../../theme';
import Clipboard from '../screens/Clipboard';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import { Topic } from '../topics';

export type RootBottomTabParams = {
  HOME: undefined;
  SETTINGS: undefined;
  CLIPBOARD: {
    subTopics: Topic[];
  };
};

const { Navigator, Screen } = createBottomTabNavigator<RootBottomTabParams>();

interface TabBarIconProps {
  routeName: 'HOME' | 'SETTINGS' | 'CLIPBOARD';
  size: number;
  color: string;
}

const TabBarIcon = ({ routeName, color, size }: TabBarIconProps) => {
  const icons = {
    HOME: <Feather name="home" color={color} size={size} />,
    CLIPBOARD: <Feather name="clipboard" color={color} size={size} />,
    SETTINGS: <Feather name="menu" color={color} size={size} />,
  };

  return icons[routeName];
};

const Routes: React.FC = () => {
  return (
    <Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: theme.palette.primary.main,
        tabBarIcon: ({ color, size }) => (
          <TabBarIcon routeName={route.name as any} size={size} color={color} />
        ),
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#E9FFE1',
        },
      })}>
      <Screen name="HOME" component={Home} />
      <Screen name="CLIPBOARD" component={Clipboard} />
      <Screen name="SETTINGS" component={Settings} />
    </Navigator>
  );
};

export default Routes;
