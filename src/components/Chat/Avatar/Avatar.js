import React from 'react';
import User from './User';
import Bot from './Bot';

function Avatar({ user }) {
  return user ? <User /> : <Bot />;
}

export default React.memo(Avatar);
