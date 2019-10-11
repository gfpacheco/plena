import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Message({ message, bot }) {
  return (
    <View style={[styles.root, !bot && styles.rootUser]}>
      <View style={styles.avatar} />
      <View style={[styles.bubble, bot ? styles.bubbleBot : styles.bubbleUser]}>
        <Text>{message}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  rootUser: {
    flexDirection: 'row-reverse',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#ccc',
  },
  bubble: {
    marginHorizontal: 8,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#fff',
    width: '70%',
  },
  bubbleBot: {
    borderTopLeftRadius: 0,
  },
  bubbleUser: {
    borderTopRightRadius: 0,
  },
});

export default React.memo(Message);
