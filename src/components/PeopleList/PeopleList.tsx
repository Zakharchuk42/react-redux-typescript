import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/typeSelector';
import { fetchPeople } from '../../store/action-creators/people';
import Person from '../Person/Person';

import './PeopleList.scss';

const PeopleList: React.FC = () => {
  const { people, loading, error } = useTypedSelector(state => state.people);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedGenderFiltr = JSON.parse(
      localStorage.getItem('genderFilter') || '{}',
    );

    const savedNatFiltr = JSON.parse(localStorage.getItem('natFilter') || '{}');

    dispatch(fetchPeople(savedGenderFiltr, savedNatFiltr));
  }, [dispatch]);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <div className="PeopleList">
        {people.map(person => {
          return <Person key={person.namePerson} person={person} />;
        })}
      </div>
    </div>
  );
};

export default PeopleList;
