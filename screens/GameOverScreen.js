import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {OutputText, StartAgain, TitleText} from '../components';
import {COLORS, MARGIN, PADDINGS} from '../constants/Constants';
import {RFValue} from 'react-native-responsive-fontsize';
import {GameOverImage} from '../constants/Images';

const GameOverScreen = ({numberOfRound, numberPicked, onPress}) => {
  return (
    <View style={styles.Container}>
      <TitleText title="Game Over!" />
      <Image source={GameOverImage} style={styles.imageStyle} />
      <OutputText numberOfRound={numberOfRound} numberPicked={numberPicked} />
      <StartAgain onPress={onPress} />
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: PADDINGS.mdPadding,
    paddingTop: RFValue(30),
  },

  imageStyle: {
    width: RFValue(300),
    height: RFValue(300),
    borderRadius: RFValue(150),
    borderWidth: RFValue(2),
    borderColor: COLORS.black,
    marginBottom: MARGIN.lgMargin,
    marginTop: MARGIN.mdMargin,
  },
});
