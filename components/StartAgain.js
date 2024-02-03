import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, MARGIN, RADIUS} from '../constants/Constants';
import {RFValue} from 'react-native-responsive-fontsize';

const StartAgain = ({onPress}) => {
  return (
    <View style={styles.wrapperStyle}>
      <Pressable
      onPress={onPress}
        style={styles.btnStyle}
        android_ripple={{color: COLORS.Primary500, borderless: true}}>
        <Text style={styles.textStyle}>Start New Game</Text>
      </Pressable>
    </View>
  );
};

export default StartAgain;

const styles = StyleSheet.create({
  wrapperStyle: {
    width: RFValue(140),
    height: RFValue(45),
    borderRadius: RADIUS.lgRadius,
    backgroundColor: COLORS.Primary200,
    marginVertical: MARGIN.lgMargin,
  },
  btnStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: COLORS.White,
    fontSize: FONTS.h5,
  },
});
