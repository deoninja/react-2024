import React from 'react';

export function UserUsername(props) {
  return (
    // <React.Fragment>
    //   <b>Username: </b>
    //   <span>{props.username}</span>
    // </React.Fragment>

    //shorthand syntax
    <>
      <b>Username: </b>
      <span>{props.username}</span>
    </>
  );
}
