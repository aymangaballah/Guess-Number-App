import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS, FONTS, MARGIN, PADDINGS, RADIUS} from '../constants/Constants';
import {Styles} from '../styles/Styles';
import {Button} from '.';

const TextInputContainer = ({pickedNumberHandler}) => {
  const [textInput, setTextInput] = useState('');
  const onChangeText = enteredText => {
    setTextInput(enteredText);
  };
  const onReset = () => {
    setTextInput(currentVal => {
      currentVal = '';
    });
  };
  const onConfirm = () => {
    const textInputNumber = parseInt(textInput);

    if (textInputNumber > 0 && textInputNumber < 99) {
      pickedNumberHandler(textInputNumber); // for just change screen
    } else {
      Alert.alert(
        null,
        'Please Enter a valid Number',
        [
          {text: 'Ok', onPress: onReset},
          {text: 'Cancel', onPress: onReset},
        ],
        {
          cancelable: true,
        },
      );
    }
  };
  return (
    <View style={styles.Container}>
      <Text style={Styles.OperationText}>Enter a Number</Text>
      <TextInput
        style={styles.textinputStyle}
        value={textInput}
        onChangeText={onChangeText}
        maxLength={2}
        keyboardType="number-pad"
      />
      <View style={styles.BtnsWrapper}>
        <Button text="Reset" onPress={onReset} />
        <Button text="Confirm" onPress={onConfirm} />
      </View>
    </View>
  );
};

export default TextInputContainer;

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    borderRadius: RADIUS.mdRadius,
    alignItems: 'center',
    padding: PADDINGS.mdPadding,
    backgroundColor: COLORS.Primary500,
  },
  textinputStyle: {
    width: RFValue(40),
    height: RFValue(50),
    borderBottomColor: COLORS.Secondry500,
    borderBottomWidth: RFValue(2),
    marginBottom: MARGIN.mdMargin,
    fontSize: FONTS.h4,
    color: COLORS.Secondry500,
    textAlign: 'center',
  },
  BtnsWrapper: {
    width: '100%',
    height: RFValue(40),
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
});
