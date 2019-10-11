import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

function Option({ option, onPress }) {
  return (
    <TouchableOpacity style={styles.root} onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.text}>{option.message}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = {
  root: {
    flex: 1,
  },
  button: {
    flex: 1,
    margin: 8,
    borderRadius: 8,
    backgroundColor: '#ce1139',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
};

export default React.memo(Option);
