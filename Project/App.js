import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import { css } from './assets/css/css';

export default function App() {
  return (
    <View style={css.container}>
      <view style={css.map}>

      </view>
      <view style={css.search}>

      </view>
    </View>
  );
}