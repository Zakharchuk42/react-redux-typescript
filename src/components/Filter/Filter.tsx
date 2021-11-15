import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPeople } from '../../store/action-creators/people';
import { nationality, gender } from '../../array/nationality';

import Button from '../Button/Button';

import './Filter.scss';

const Filter: React.FC = () => {
  const dispatch = useDispatch();

  const savedGenderFiltr = JSON.parse(
    localStorage.getItem('genderFilter') || '{}',
  );
  const savedNatFiltr = JSON.parse(localStorage.getItem('natFilter') || '{}');

  const [chooseGender, setChooseGender] = useState<string>(savedGenderFiltr);
  const [chooseNat, setChooseNat] = useState<string>(savedNatFiltr);

  const getFiltredForGender = (gender: string, nat: string) => {
    dispatch(fetchPeople(gender, nat));
  };

  useEffect(() => {
    localStorage.setItem('genderFilter', JSON.stringify(chooseGender));
  }, [chooseGender]);

  useEffect(() => {
    localStorage.setItem('natFilter', JSON.stringify(chooseNat));
  }, [chooseNat]);

  return (
    <div className="Filter">
      <div className="Filter__list">
        <select
          value={chooseGender}
          onChange={e => {
            setChooseGender(e.target.value);
          }}
        >
          {gender.map(item => {
            return (
              <option value={item} key={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
      <div className="Filter__list">
        <select
          value={chooseNat}
          onChange={e => {
            setChooseNat(e.target.value);
          }}
        >
          {nationality.map(item => {
            return (
              <option value={item} key={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
      <div className="Filter__button">
        <Button
          text="Apply filters"
          action={getFiltredForGender}
          genderFilter={chooseGender}
          natFilter={chooseNat}
        />
      </div>
    </div>
  );
};

export default Filter;
