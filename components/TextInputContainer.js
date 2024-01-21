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
import {FONTS, MARGIN, PADDINGS, RADIUS} from '../constants/Constants';
import {Styles} from '../styles/Styles';
import {Button} from '.';

const TextInputContainer = () => {
  const [textInput, setTextInput] = useState('');
  const onChangeText = enteredText => {
    setTextInput(enteredText);
  };
  const onReset = () => {
    Alert.alert('reset');
  };
  const onConfirm = () => {
    Alert.alert('confrim');
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
    backgroundColor: '#3b021f',
  },
  textinputStyle: {
    width: RFValue(40),
    height: RFValue(50),
    borderBottomColor: '#ddb52f',
    borderBottomWidth: RFValue(2),
    marginBottom: MARGIN.mdMargin,
    fontSize: FONTS.h4,
    color: '#ddb52f',
    textAlign:"center"
  },
  BtnsWrapper: {
    width: '100%',
    height: RFValue(40),
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
});
