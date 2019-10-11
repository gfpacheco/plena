import React, { useRef, useEffect } from 'react';
import { ScrollView, SafeAreaView, View, StyleSheet } from 'react-native';
import Message from './Message';
import WritingIndicator from './WritingIndicator';
import Options from './Options';
import useChat from '../../hooks/useChat';

function Chat() {
  const [{ history, writing }, { answer }] = useChat();
  const scrollViewRef = useRef();

  return (
    <ScrollView
      ref={scrollViewRef}
      style={styles.scrollView}
      contentContainerStyle={styles.scrollViewContent}
      onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
    >
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.safeAreaViewContent}>
          {history.map((message, index) => (
            <Message key={index} message={message} />
          ))}
          {writing ? (
            <WritingIndicator />
          ) : (
            <Options options={history[history.length - 1].options} onPress={answer} />
          )}
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
