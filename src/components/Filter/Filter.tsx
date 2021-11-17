import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPeople } from '../../store/action-creators/people';
import { nationality, gender } from '../../array/nationality';

import Button from '../Button/Button';

import './Filter.scss';
import Select from '../Select/Select';

const Filter: React.FC = () => {
  const savedGenderFilter = JSON.parse(
    localStorage.getItem('genderFilter') || '{}',
  );

  const savedNatFilter = JSON.parse(localStorage.getItem('natFilter') || '{}');

  const [genderFilter, setGenderFilter] = useState(savedGenderFilter);
  const [natFilter, setNatFilter] = useState(savedNatFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    setGenderFilter(savedGenderFilter);
  }, [savedGenderFilter]);

  useEffect(() => {
    setNatFilter(savedNatFilter);
  }, [savedNatFilter]);

  useEffect(() => {
    localStorage.setItem('genderFilter', JSON.stringify(genderFilter));
  }, [genderFilter]);

  useEffect(() => {
    localStorage.setItem('natFilter', JSON.stringify(natFilter));
  }, [natFilter]);

  const getGenderValue = (value: string) => {
    setGenderFilter(value);
  };

  const getNatValue = (value: string) => {
    setNatFilter(value);
  };

  const getFiltred = (gender: string, nat: string) => {
    dispatch(fetchPeople(gender, nat));
  };

  return (
    <div className="Filter">
      <div className="Filter__list">
        <Select
          selectedArray={gender}
          action={getGenderValue}
          chooseFilter={genderFilter}
        />
      </div>
      <div className="Filter__list">
        <Select
          selectedArray={nationality}
          action={getNatValue}
          chooseFilter={natFilter}
        />
      </div>
      <div className="Filter__button">
        <Button
          text="Apply filters"
          action={getFiltred}
          genderFilter={genderFilter}
          natFilter={natFilter}
        />
      </div>
    </div>
  );
};

export default Filter;
