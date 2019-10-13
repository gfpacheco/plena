import { useState, useRef, useEffect } from 'react';
import messages from '../messages';

export default function useChat() {
  const [state, setState] = useState({
    history: [messages.index],
    writing: false,
  });
  const writeRef = useRef();

  useEffect(() => {
    writeRef.current = message => {
      setState({ history: [...state.history, message], writing: false });
    };
  }, [state]);

  function answer(option) {
    setState({
      history: [...state.history, { message: option.message, user: true }],
      writing: true,
    });
    setTimeout(() => writeRef.current(messages[option.goTo]), 1000);
  }

  return [state, { answer }];
}
