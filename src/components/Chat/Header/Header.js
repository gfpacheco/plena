import React from 'react';
import { View, SafeAreaView, Text, StyleSheet } from 'react-native';

function Header() {
  return (
    <View style={styles.root}>
      <SafeAreaView>
        <View style={styles.content}>
          <Text style={styles.title}>Plena</Text>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#ffefd6',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    zIndex: 1,
  },
  content: {
    height: 48,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default React.memo(Header);
