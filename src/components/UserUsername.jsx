import React from 'react';
import styles from './styles.module.css';
export function UserUsername(props) {
  return (
    // <React.Fragment>
    //   <b>Username: </b>
    //   <span>{props.username}</span>
    // </React.Fragment>
    // <span className='username'>{props.username}</span>
    //shorthand syntax
    <>
      <b
        style={{
          fontSize: '32px',
          color: 'red',
        }}
      >
        Username:{' '}
      </b>
      <span className={styles.username}>{props.username}</span>
    </>
  );
}
