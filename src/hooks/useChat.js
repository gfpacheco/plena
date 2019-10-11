import { useState, useRef, useEffect } from 'react';
import messages from '../messages';

export default function useChat() {
  const [history, setHistory] = useState([]);
  const [writing, setWriting] = useState(true);
  const pushMessageRef = useRef();

  function write(message) {
    setTimeout(() => pushMessageRef.current(message), 1000);
  }

  function answer(option) {
    setHistory([...history, { message: option.message, user: true }]);
    setWriting(true);
    write(messages[option.goTo]);
  }

  useEffect(() => {
    write(messages.index);
  }, []);

  useEffect(() => {
    pushMessageRef.current = message => {
      setHistory([...history, message]);
      setWriting(false);
    };
  }, [history]);

  return [{ history, writing }, { answer }];
}
