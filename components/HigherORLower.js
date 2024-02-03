import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, MARGIN, PADDINGS, RADIUS} from '../constants/Constants';
import {Styles} from '../styles/Styles';
import {Button} from '.';
import {RFValue} from 'react-native-responsive-fontsize';

const HigherORLower = ({onPress}) => {
  return (
    <View style={Styles.OperationStyle}>
      <Text style={Styles.OperationText}>Higher or Lower?</Text>
      <View style={styles.BtnsWrapper}>
        <Button
          nameIcons={'minus'}
          OnGameScreen={true}
          onPress={onPress.bind(this, 'lower')}
        />
        <Button
          nameIcons={'plus'}
          OnGameScreen={true}
          onPress={onPress.bind(this, 'greater')}
        />
      </View>
    </View>
  );
};

export default HigherORLower;

const styles = StyleSheet.create({
  OperationText: {
    fontSize: FONTS.h4,
    color: COLORS.Secondry500,
  },
  BtnsWrapper: {
    width: '100%',
    height: RFValue(40),
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: MARGIN.lgMargin,
  },
});
