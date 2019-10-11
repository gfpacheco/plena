import React from 'react';
import { View, StyleSheet } from 'react-native';

function Avatar({ user }) {
  return <View style={[styles.avatar, user ? styles.avatarUser : styles.avatarBot]} />;
}

const styles = StyleSheet.create({
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  avatarUser: {
    backgroundColor: '#ff5563',
  },
  avatarBot: {
    backgroundColor: '#f4b382',
  },
});

export default React.memo(Avatar);
