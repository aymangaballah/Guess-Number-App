import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS, FONTS, MARGIN, RADIUS} from '../constants/Constants';

const GuessNumber = ({number}) => {
  return (
    <View style={styles.warpper}>
      <Text style={styles.numberStyle}>{number}</Text>
    </View>
  );
};

export default GuessNumber;

const styles = StyleSheet.create({
  warpper: {
    width: '100%',
    height: RFValue(100),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: RADIUS.smRadius,
    borderWidth: RFValue(3),
    borderColor: COLORS.Secondry500,
    marginBottom: 2 * MARGIN.xlMargin,
  },
  numberStyle: {
    fontSize: FONTS.h1,
    fontWeight: 'bold',
    color: COLORS.Secondry500,
  },
});
