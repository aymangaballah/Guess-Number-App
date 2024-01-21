import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS, FONTS, PADDINGS} from '../constants/Constants';

const TitleText = props => {
  const {title, style} = props;
  return (
    <View style={[styles.wrapper, style]}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default TitleText;

const styles = StyleSheet.create({
  wrapper: {
    height: RFValue(70),
    borderColor: COLORS.White,
    borderWidth: RFValue(2),
    alignItems: 'center',
    justifyContent: 'center',
    padding: PADDINGS.mdPadding,
  },
  text: {
    fontSize: FONTS.h3,
    fontWeight: 'bold',
    color: COLORS.White,
  },
});
