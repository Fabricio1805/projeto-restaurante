import React from 'react';
import * as C from './style';
import { ReactNode, ButtonHTMLAttributes } from 'react';
import { FaSpinner } from 'react-icons/fa';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  children: ReactNode;
}

const Button = ({ loading, children, ...rest }: ButtonProps) => {
  return (
    <C.Button disabled={loading} {...rest}>
      {loading ? (
        <FaSpinner color="#FFF" size={16} />
      ) : (
        <a>{children}</a>
      )}
    </C.Button>
  );
};

export default Button;
