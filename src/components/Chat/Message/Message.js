import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Avatar from '../Avatar';
import Bubble from '../Bubble';
import colors from '../../../colors';

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
  },
  rootUser: {
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
  },
  textUser: {
    color: colors.white,
  },
  textBot: {
    color: colors.offBlack,
  },
});

export default React.memo(Message);
