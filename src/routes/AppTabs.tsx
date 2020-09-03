import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeContext } from 'styled-components';

import Favorites from '../pages/Favorites';
import Teachers from '../pages/Teachers';

const { Navigator, Screen } = createBottomTabNavigator();

const AppTabs: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: themeContext.unit * 4,
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          width: themeContext.unit,
          height: themeContext.unit,
        },
        labelStyle: {
          fontFamily: 'Archivo_700Bold',
          fontSize: themeContext.fontSize.small,
          marginLeft: themeContext.unit,
        },
        inactiveBackgroundColor: themeContext.colors.surface.constrast,
        activeBackgroundColor: '#ebebf5',
        inactiveTintColor: '#c1cbcc',
        activeTintColor: themeContext.colors.title.main,
      }}
    >
      <Screen name="Favorites" component={Favorites} />
      <Screen name="Teachers" component={Teachers} />
    </Navigator>
  );
};

export default AppTabs;
