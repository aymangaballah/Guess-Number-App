import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, ICONS, RADIUS} from '../constants/Constants';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Button = props => {
  const {text, onPress, OnGameScreen, nameIcons} = props;
  return (
    <View style={styles.wrapper}>
      <Pressable
        onPress={onPress}
        android_ripple={{color: COLORS.Primary300, borderless: true}}
        style={({pressed}) =>
          pressed ? [styles.btnStyle, {opacity: 0.25}] : styles.btnStyle
        }>
        {OnGameScreen ? (
          <AntDesign name={nameIcons} size={ICONS.mdIcon} color={COLORS.White} />
        ) : (
          <Text style={styles.text}>{text}</Text>
        )}
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  wrapper: {
    width: '45%',
    backgroundColor: COLORS.Primary200,
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
