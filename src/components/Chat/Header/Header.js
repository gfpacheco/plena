import React from 'react';
import { View, SafeAreaView, Text, StyleSheet } from 'react-native';
import colors from '../../../colors';

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
    backgroundColor: colors.primary,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
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
