import React from 'react';
import Button from '@mui/material/Button';

export function Login({ text, onClick,  color = 'primary' }) {
  return (
    <Button  color={color} onClick={onClick}>
      {text}
      
    </Button>
  );
}

