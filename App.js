import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import {StartGameScreen} from './screens';
import LinearGradient from 'react-native-linear-gradient';
import {backgroundImage} from './constants/Images';

const App = () => {
  return (
    <>
      <LinearGradient style={styles.Container} colors={['#4e0329', '#ddb52f']}>
        <ImageBackground
          source={backgroundImage}
          resizeMode="cover"
          style={styles.Container}
          imageStyle={{opacity: 0.15}}>
          <StartGameScreen />
        </ImageBackground>
      </LinearGradient>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
});
