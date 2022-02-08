import React from 'react';

export default function Properties(props) {
  return (
  <div>
    <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
  </div>
  );
}
