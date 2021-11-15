import React from 'react';

import './Person.scss';

interface PersonState {
  gender: string;
  email: string;
  dob: string;
  namePerson: string;
  picture: string;
  nat: string;
}

interface PersonProps {
  person: PersonState;
}

const Person: React.FC<PersonProps> = ({ person }) => {
  return (
    <div className="Person__card">
      <div className="Person__image">
        <img src={person.picture} alt="" />
      </div>
      <div className="Person__info">
        <div className="Person__name">{person.namePerson}</div>
        <div className="Person__gender">{person.gender}</div>
        <div className="Person__email">{person.email}</div>
        <div className="Person__dob">{person.dob}</div>
        <div className="Person__nat">{person.nat}</div>
      </div>
    </div>
  );
};

export default Person;
