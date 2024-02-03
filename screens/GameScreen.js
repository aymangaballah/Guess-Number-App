import {Alert, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {PADDINGS} from '../constants/Constants';
import {
  GuessNumber,
  HigherORLower,
  ListNumbers,
  TitleText,
} from '../components';

const generateNumber = (min, max, exclude) => {
  let RanomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (RanomNumber === exclude) {
    // to avoid guess pc right in the first one so if geuss right do recurisve again
    return generateNumber(min, max, exclude);
  } else {
    return RanomNumber; // print number
  }
};

const GameScreen = props => {
  const {Usernumber, onGameOver} = props;
  let min = 1;
  let max = 100;
  const initalGuess = generateNumber(1, 100, Usernumber);
  const [currentGuess, setCurrentGuess] = useState(initalGuess);
  const [GuessRound, setGuessRound] = useState([initalGuess]);
  useEffect(() => {
    if (currentGuess === Usernumber) {
      onGameOver(GuessRound.length);
    }
  }, [currentGuess, Usernumber, onGameOver]);

  const nextGuess = direction => {
    if (
      (direction == 'lower' && currentGuess < Usernumber) ||
      (direction == 'greater' && currentGuess > Usernumber)
    ) {
      Alert.alert(
        null,
        "Don't lie please you know that is wroung !!",
        [{text: 'Sorry!!'}],
        {cancelable: true},
      );
    }
    if (direction == 'lower') {
      max = currentGuess;
    } else {
      min = currentGuess + 1;
    }
    let number = generateNumber(min, max, currentGuess);
    setCurrentGuess(number);
    setGuessRound(prev => [number, ...prev]);
  };
  return (
    <>
      <View style={styles.Container}>
        <TitleText title="Opponent's Guess" />
        <View style={styles.contentWrapper}>
          <GuessNumber number={currentGuess} />
          <HigherORLower onPress={nextGuess} />
          <ListNumbers GuessRound={GuessRound} />
        </View>
      </View>
    </>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingHorizontal: PADDINGS.mdPadding,
  },
  contentWrapper: {
    flex: 1,
    paddingHorizontal: PADDINGS.xlPadding,
  },
});
