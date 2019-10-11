import React from 'react';
import { View, StyleSheet } from 'react-native';
import Avatar from '../Avatar';
import Bubble from '../Bubble';

export default function WritingIndicator() {
  return (
    <View style={styles.root}>
      <Avatar />
      <Bubble>
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </Bubble>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 8,
    paddingVertical: 16,
    flexDirection: 'row',
  },
  dot: {
    marginHorizontal: 2,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#999',
  },
});
