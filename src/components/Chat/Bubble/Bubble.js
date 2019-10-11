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
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  bubbleBot: {
    borderTopLeftRadius: 0,
  },
  bubbleUser: {
    borderTopRightRadius: 0,
  },
});

export default React.memo(Bubble);
