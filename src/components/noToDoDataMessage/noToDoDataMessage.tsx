import React from 'react';

interface INoToDoMessageProps {
  message: string;
}

function NoToDoDataMessage({ message }: INoToDoMessageProps) {
  return (
    <div>
      <h4>{message}</h4>
    </div>
  );
}

export default NoToDoDataMessage;
