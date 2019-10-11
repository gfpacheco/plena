import { useState, useRef, useEffect } from 'react';
import messages from '../messages';

export default function useChat() {
  const [history, setHistory] = useState([messages.index]);
  const [writing, setWriting] = useState(false);
  const writeRef = useRef();

  useEffect(() => {
    writeRef.current = message => {
      setHistory([...history, message]);
      setWriting(false);
    };
  }, [history]);

  function answer(option) {
    setHistory([...history, { message: option.message, user: true }]);
    setWriting(true);
    setTimeout(() => writeRef.current(messages[option.goTo]), 1000);
  }

  return [{ history, writing }, { answer }];
}
