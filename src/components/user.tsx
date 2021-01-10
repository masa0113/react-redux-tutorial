import React from 'react';
import { Profiles } from '../model/profiles';

const Person = (props: Profiles) => {
  return <div>Hi, I'm {props.name}. I'm {props.age} years.</div>
}

export const User = () => {
  const profiles: Profiles[] = [
    { name: "Taro", age: 10 },
    { name: "Mayumi", age: 15 },
    { name: "Hanako" }
  ];

  return (
    <div>
      {profiles.map((v,i) => {
        return <Person name={v.name} age={v.age} key={i}></Person>
      })}
    </div>
  );
};