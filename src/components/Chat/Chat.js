import React from 'react';
import { ScrollView, SafeAreaView, View, StyleSheet } from 'react-native';
import Message from './Message';
import WritingIndicator from './WritingIndicator';
import useChat from '../../hooks/useChat';

function Chat() {
  const [{ history, writing }] = useChat();
  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.safeAreaViewContent}>
          {history.map((message, index) => (
            <Message key={index} message={message} />
          ))}
          {writing && <WritingIndicator />}
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
