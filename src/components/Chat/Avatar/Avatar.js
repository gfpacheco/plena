import React from 'react';
import { View, StyleSheet } from 'react-native';

function Avatar() {
  return <View style={styles.avatar} />;
}

const styles = StyleSheet.create({
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#ccc',
  },
});

export default React.memo(Avatar);
