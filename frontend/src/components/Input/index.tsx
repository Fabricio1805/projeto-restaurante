import { InputHTMLAttributes } from 'react';
import * as C from './style';
import React from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ ...rest }: InputProps) => {
  return <C.Input {...rest} />;
};
