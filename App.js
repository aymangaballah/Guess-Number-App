import React, {useState} from 'react';
import {GameOverScreen, GameScreen, StartGameScreen} from './screens';
import {MainScreen} from './components';
const App = () => {
  const [numberPicked, setNumberPicked] = useState();

  const [GameIsOver, setGameIsOver] = useState(true);
  const [numberOfRound, setNumberOfRound] = useState(0);
  const pickedNumberHandler = number => {
    setNumberPicked(current => (current = number));
    setGameIsOver(false);
  };

  const GameOverHandler = (numberOfRound) => {
    setGameIsOver(true);
    setNumberOfRound(numberOfRound)
  };

  const StartAgainHandler = () => {
    setNumberPicked(false);
  };

  let screen = <StartGameScreen pickedNumberHandler={pickedNumberHandler} />;

  if (numberPicked) {
    screen = (
      <GameScreen
        Usernumber={numberPicked}
        onGameOver={GameOverHandler}
      />
    );
  }

  if (GameIsOver && numberPicked) {
    screen = (
      <GameOverScreen
        numberOfRound={numberOfRound}
        numberPicked={numberPicked}
        onPress={StartAgainHandler}
      />
    );
  }
  return (
    <>
      <MainScreen>{screen}</MainScreen>
    </>
  );
};

export default App;
