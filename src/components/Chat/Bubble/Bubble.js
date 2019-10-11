import React from 'react';
import { View, StyleSheet } from 'react-native';

function Bubble({ user, ...rest }) {
  return <View style={[styles.bubble, user ? styles.bubbleUser : styles.bubbleBot]} {...rest} />;
}

const styles = StyleSheet.create({
  bubble: {
    marginHorizontal: 8,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#fff',
    minHeight: 32,
    maxWidth: 320,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bubbleBot: {
    borderBottomLeftRadius: 0,
    alignSelf: 'flex-start',
  },
  bubbleUser: {
    borderBottomRightRadius: 0,
    alignSelf: 'flex-end',
  },
});

export default React.memo(Bubble);
