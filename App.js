import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Details from './Components/Details';
import Regions from './Components/Regions';
import GenI from './Components/GenI';
import GenII from './Components/GenII';
import GenIII from './Components/GenIII';
import GenIV from './Components/GenIV';
import GenV from './Components/GenV';
import GenVI from './Components/GenVI';

const stackNavigator = createStackNavigator(
  {
    Home: {
      screen: Regions,
    },
    Kanto: {
      screen: GenI
    },
    Johto: {
      screen: GenII
    },
    Hoenn: {
      screen: GenIII
    },
    Sinnoh: {
      screen: GenIV
    },
    Unova: {
      screen: GenV
    },
    Kalos: {
      screen: GenVI
    },
    Details: {
      screen: Details,
    },
  },
  {
    initialRouteName: 'Home',
  },
);

const AppContainer = createAppContainer(stackNavigator);

class App extends Component {
  render() {
    return <AppContainer />;
  }
}

export default App;
