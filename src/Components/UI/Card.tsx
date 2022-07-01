import React from 'react';

import classes from './Card.module.css';

interface Props {
  children?: React.ReactNode;
  className?: string;
}

function Card(props: Props) {
  return (
    // `${classes.card} ${props.className}`
    <div className={[props.className, classes.card].join(' ')}>
      {props.children}
    </div>
  );
}

export default Card;
