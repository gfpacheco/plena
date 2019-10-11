import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Avatar from '../Avatar';
import Bubble from '../Bubble';

function Message({ message }) {
  return (
    <View style={[styles.root, message.user && styles.rootUser]}>
      <Avatar user={message.user} />
      <Bubble user={message.user}>
        <Text style={message.user ? styles.textUser : styles.textBot}>{message.message}</Text>
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
  textUser: {
    color: '#fff',
  },
  textBot: {
    color: '#222',
  },
});

export default React.memo(Message);
