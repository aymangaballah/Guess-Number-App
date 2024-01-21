import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, RADIUS} from '../constants/Constants';

const Button = props => {
  const {text, onPress} = props;
  return (
    <View style={styles.wrapper}>
      <Pressable
        onPress={onPress}
        android_ripple={{color: '#640233', borderless: true}}
        style={({pressed}) =>
          pressed ? [styles.btnStyle, {opacity: 0.25}] : styles.btnStyle
        }>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  wrapper: {
    width: '45%',
    backgroundColor: '#72063c',
    borderRadius: RADIUS.mdRadius,
  },
  btnStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: COLORS.White,
    fontWeight: 'bold',
  },
});
