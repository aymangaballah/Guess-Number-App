import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInputContainer, TitleText} from '../components';
import {MARGIN, PADDINGS} from '../constants/Constants';

const StartGameScreen = () => {
  return (
    <>
      <View style={styles.Container}>
        <TitleText title="Guess My Number" style={styles.wrapper} />
        <TextInputContainer />
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
    // backgroundColor: '#ccc',
  },
  wrapper: {
    marginVertical: MARGIN.xlMargin,
  },
});
