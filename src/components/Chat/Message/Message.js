import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Avatar from '../Avatar';
import Bubble from '../Bubble';

function Message({ message }) {
  return (
    <View style={[styles.root, message.user && styles.rootUser]}>
      <Avatar />
      <Bubble user={message.user}>
        <Text>{message.message}</Text>
      </Bubble>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 8,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'flex-end',
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
});

export default React.memo(Message);
