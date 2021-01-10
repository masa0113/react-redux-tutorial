import React from 'react';

const Person = (props) => {
  return <div>Hi, I'm {props.name}. I'm {props.age} years.</div>
}

export const User = () => {
  const profiles = [
    { name: "Taro", age: "10" },
    { name: "Mayumi", age: "15" },
    { name: "Hanako" }
  ];

  Person.defaultProps = {
    age: 1
  }

  return (
    <React.Fragment>
      {profiles.map((v,i) => {
        return <Person name={v.name} age={v.age} key={i}></Person>
      })}
    </React.Fragment>
  );
};