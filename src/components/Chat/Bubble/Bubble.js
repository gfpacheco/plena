import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../../../colors';

function Bubble({ user, ...rest }) {
  return <View style={[styles.bubble, user ? styles.bubbleUser : styles.bubbleBot]} {...rest} />;
}

const styles = StyleSheet.create({
  bubble: {
    marginHorizontal: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16,
    minHeight: 32,
    maxWidth: 256,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  bubbleUser: {
    alignSelf: 'flex-end',
    borderBottomRightRadius: 0,
    backgroundColor: colors.accent,
  },
  bubbleBot: {
    borderTopLeftRadius: 0,
    backgroundColor: colors.white,
  },
});

export default React.memo(Bubble);
