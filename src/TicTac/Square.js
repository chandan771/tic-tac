import React from 'react'
import styles from '../TicTac/tic.module.scss';

const Square = (props) => {
  return (
    <div 
    className={styles.square}
    onClick={props.onClick}
    >
      <div 
      className={styles.h_5}>
        {props.value}
        </div>
    </div>
  )
}

export default Square
