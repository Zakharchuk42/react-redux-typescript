import React from 'react';

interface PersonProps {
  person: any;
}

const Person: React.FC<PersonProps> = ({ person }) => {
  return (
    <div className="PeopleList__card">
      <div className="PeopleList__image">
        <img src={person.picture} alt="" />
      </div>
      <div className="PeopleList__info">
        <div className="PeopleList__name">{person.namePerson}</div>
        <div className="PeopleList__gender">{person.gender}</div>
        <div className="PeopleList__email">{person.email}</div>
        <div className="PeopleList__dob">{person.dob}</div>
        <div className="PeopleList__nat">{person.nat}</div>
      </div>
    </div>
  );
};

export default Person;
