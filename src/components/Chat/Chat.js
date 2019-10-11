import React from 'react';
import { ScrollView, SafeAreaView, View, StyleSheet } from 'react-native';
import Message from './Message';

function Chat() {
  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.safeAreaViewContent}>
          <Message message="Sup?" bot />
          <Message message="Sup?" />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    backgroundColor: '#f0f0f0',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  safeAreaView: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  safeAreaViewContent: {
    padding: 8,
  },
});

export default React.memo(Chat);
