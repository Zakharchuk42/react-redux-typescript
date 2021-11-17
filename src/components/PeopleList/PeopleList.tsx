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
    const savedGenderFilter = JSON.parse(
      localStorage.getItem('genderFilter') || '{}',
    );
    const savedNatFilter = JSON.parse(
      localStorage.getItem('natFilter') || '{}',
    );
    dispatch(fetchPeople(savedGenderFilter, savedNatFilter));
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
          return <Person key={person.dob} person={person} />;
        })}
      </div>
    </div>
  );
};

export default PeopleList;
