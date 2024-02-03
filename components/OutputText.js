import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, MARGIN, PADDINGS} from '../constants/Constants';

const OutputText = ({numberOfRound,numberPicked}) => {
  return (
    <>
      <View style={styles.wapper}>
        <Text style={styles.textStyle}>
          Your Phone needed <Text style={styles.numberStyle}>{numberOfRound}</Text> rounds to
          guess the number <Text style={styles.numberStyle}>{numberPicked}</Text>
        </Text>
      </View>
    </>
  );
};

export default OutputText;

const styles = StyleSheet.create({
  wapper: {
    width: '100%',
    padding: PADDINGS.mdPadding,
    // marginVertical:MARGIN.lgMargin
  },
  textStyle: {
    fontSize: FONTS.h4,
    textAlign: 'center',
  },
  numberStyle: {
    color: COLORS.Primary300,
    fontWeight: 'bold',
  },
});
