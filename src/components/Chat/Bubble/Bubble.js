import React from 'react';
import { View, StyleSheet } from 'react-native';

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
    shadowColor: '#000',
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
    backgroundColor: '#ce1139',
  },
  bubbleBot: {
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 0,
    backgroundColor: '#fff',
  },
});

export default React.memo(Bubble);
