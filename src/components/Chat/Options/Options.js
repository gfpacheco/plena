import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Avatar from '../Avatar';
import Bubble from '../Bubble';

function Options({ options, onPress }) {
  return (
    <View style={styles.root}>
      <View>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={index > 0 ? styles.optionWithMargin : undefined}
            onPress={() => onPress(option)}
          >
            <Bubble user>
              <Text>{option.message}</Text>
            </Bubble>
          </TouchableOpacity>
        ))}
      </View>
      <Avatar />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 8,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  optionWithMargin: {
    marginTop: 8,
  },
});

export default React.memo(Options);
