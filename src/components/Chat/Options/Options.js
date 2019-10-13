import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import Option from './Option';
import colors from '../../../colors';

function Options({ options, onPress }) {
  return (
    <View style={styles.root}>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.options}>
          {options &&
            options.map((option, index) => (
              <Option key={index} option={option} onPress={() => onPress(option)} />
            ))}
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    height: 240,
    backgroundColor: colors.primary,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  safeAreaView: {
    flex: 1,
  },
  options: {
    flex: 1,
    padding: 8,
  },
});

export default React.memo(Options);
