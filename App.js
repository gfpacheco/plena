import React from 'react';
import { Platform } from 'react-native';
import Chat from './src/components/Chat';

if (Platform.OS === 'web') {
  document.body.style.height = '100%';
}

export default function App() {
  return <Chat />;
}
