import React, { useRef, useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Header from './Header';
import Message from './Message';
import WritingIndicator from './WritingIndicator';
import Options from './Options';
import useChat from '../../hooks/useChat';

function Chat() {
  const [{ history, writing }, { answer }] = useChat();
  const scrollViewRef = useRef();
  const lastMessage = history[history.length - 1];

  return (
    <>
      <Header />
      <ScrollView
        ref={scrollViewRef}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
      >
        {history.map((message, index) => (
          <Message key={index} message={message} />
        ))}
        {writing && <WritingIndicator />}
      </ScrollView>
      <Options options={lastMessage && lastMessage.options} onPress={answer} />
    </>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    backgroundColor: '#fffff8',
  },
  scrollViewContent: {
    flexGrow: 1,
    padding: 8,
    justifyContent: 'flex-end',
  },
});

export default React.memo(Chat);
