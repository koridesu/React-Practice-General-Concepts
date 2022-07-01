import React from 'react';
import classes from './Button.module.css';

type ReactHtmlButtonElement = 'button' | 'submit' | 'reset' | undefined;

interface Props {
  className?: string;
  children?: React.ReactNode;
  type?: ReactHtmlButtonElement;
  onClick?: () => void;
}
function Button(props: Props) {
  return (
    <button
      type={props.type}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
