import React from 'react';
import styles from '../index.module.css';
import { ReactComponent as LoaderIcon } from '../images/icon-watches.svg';

export function Loader() {
  return <div className={styles.Loader_icon}>{<LoaderIcon />}</div>;
}
