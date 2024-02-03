import {StyleSheet} from 'react-native';
import {COLORS, FONTS, PADDINGS, RADIUS} from '../constants/Constants';

export const Styles = StyleSheet.create({
  OperationStyle: {
    width: '100%',
    borderRadius: RADIUS.mdRadius,
    alignItems: 'center',
    padding: PADDINGS.lgPadding,
    backgroundColor: COLORS.Primary500,
  },
  OperationText: {
    fontSize: FONTS.h4,
    color: COLORS.Secondry500,
  },
});
