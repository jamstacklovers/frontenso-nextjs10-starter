import React from 'react';
import cn from 'classnames';

import styles from './container.module.css';

function Container({ className = '', ...rest }) {
  return (
    <div
      className={cn(
        styles.container,
        className,
        'border-20 xs:border-30 sm:border-60 max-w-[1180px]'
      )}
      {...rest}
    />
  );
}

export default Container;
