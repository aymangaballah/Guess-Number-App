import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInputContainer, TitleText} from '../components';
import {MARGIN, PADDINGS} from '../constants/Constants';

const StartGameScreen = ({pickedNumberHandler}) => {
  return (
    <>
      <View style={styles.Container}>
        <TitleText title="Guess My Number"  />
        <TextInputContainer pickedNumberHandler={pickedNumberHandler} />
      </View>
    </>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingHorizontal: PADDINGS.mdPadding,
    paddingTop: PADDINGS.xlPadding,
    alignItems: 'center',
  }
});
