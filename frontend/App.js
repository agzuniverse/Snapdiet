import * as Expo from 'expo';
import React from 'react';
import {StatusBar, Platform} from 'react-native';
import {Provider} from 'react-redux';
import {TabNavigator} from 'react-navigation';
import Main from './components/Main';
import CameraTest from './components/CameraTest';
import Calorie from './components/Calorie';
import Store from './components/Store';

const Tabnavigation=TabNavigator(
  {
    Home:{screen:Main},
    Camera:{screen:CameraTest},
    Calorie:{screen:Calorie},
  },
  {
    tabBarOptions:{
      style:{
        backgroundColor:'rgb(50,50,50)',
        paddingTop:Platform.OS=='ios'?0:StatusBar.currentHeight
      },
      labelStyle:{
        color:'rgba(255,255,255,0.7)'
      },
      indicatorStyle:{
        backgroundColor:'rgb(10,220,220)'
      },
      activeTintColor:'rgb(10,220,220)',
      inactiveTintColor:'rgba(255,255,255,0.7)'
    }
  }
);

export default class App extends React.Component {
  state = { fontsAreLoaded: false };

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({fontsAreLoaded: true});
  }

  render() {
    if (this.state.fontsAreLoaded)
      return <Provider store={Store}><Tabnavigation/></Provider>;
    else
      return <Expo.AppLoading/>;
  }
}