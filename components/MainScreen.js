import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {backgroundImage} from '../constants/Images';
import {COLORS} from '../constants/Constants';

const MainScreen = ({children}) => {
  return (
    <LinearGradient
      style={styles.Container}
      colors={[COLORS.Primary500, COLORS.Secondry500]}>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.Container}
        imageStyle={{opacity: 0.15}}>
        {children}
      </ImageBackground>
    </LinearGradient>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
});
