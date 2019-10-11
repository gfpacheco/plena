import { useState, useEffect } from 'react';
import messages from '../messages';

export default function useChat() {
  const [history, setHistory] = useState([]);
  const [writing, setWriting] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setHistory([...history, messages.index]);
      setWriting(false);
    }, 1000);
  }, []);

  return [{ history, writing }];
}
