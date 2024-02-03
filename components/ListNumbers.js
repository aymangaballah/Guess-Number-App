import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS, FONTS, MARGIN, PADDINGS, RADIUS} from '../constants/Constants';

const ListNumbers = ({GuessRound}) => {
  let lenOfRound = GuessRound.length;
  return (
    <>
      <View style={{flex: 1}}>
        <FlatList
          contentContainerStyle={{paddingBottom: PADDINGS.xlPadding}}
          showsVerticalScrollIndicator={false}
          data={GuessRound}
          renderItem={item => {
            return (
              <>
                <View style={styles.itemStyle}>
                  <Text style={styles.textItem}>
                    #{lenOfRound - item.index}
                  </Text>
                  <Text style={styles.textItem}>
                    Opponent's Guess : {item.item}
                  </Text>
                </View>
              </>
            );
          }}
          keyExtractor={(item,index) => {
            return index
          }}
        />
      </View>
    </>
  );
};

export default ListNumbers;

const styles = StyleSheet.create({
  itemStyle: {
    width: '100%',
    height: RFValue(50),
    borderRadius: RADIUS.lgRadius,
    backgroundColor: COLORS.Secondry500,
    borderWidth: RFValue(1.5),
    borderColor: COLORS.Primary500,
    marginTop: MARGIN.mdMargin,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: PADDINGS.smPadding,
  },
  textItem: {
    fontSize: FONTS.h5,
    color: COLORS.Primary500,
  },
});
