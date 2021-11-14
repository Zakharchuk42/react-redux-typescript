import { PeopleAction, PeopleActionTypes } from '../../types/people';
import { Dispatch } from 'react';

import axios from 'axios';

export const fetchPeople = () => {
  return async (dispatch: Dispatch<PeopleAction>) => {
    try {
      dispatch({ type: PeopleActionTypes.FETCH_PEOPLE });
      const response = await axios.get('https://randomuser.me/api/?results=15');
      const people: any[] = response.data.results;

      const newArrPeople = people.map((person: any) => {
        const personInfo = {
          gender: person.gender,
          email: person.email,
          dob: new Date(person.dob.date).toLocaleDateString(),
          namePerson: `${person.name.first} ${person.name.last}`,
          picture: person.picture.large,
          nat: person.nat,
        };

        return personInfo;
      });

      dispatch({
        type: PeopleActionTypes.FETCH_PEOPLE_DONE,
        payload: newArrPeople,
      });
    } catch (e) {
      dispatch({
        type: PeopleActionTypes.FETCH_PEOPLE_ERROR,
        payload: 'Error!',
      });
    }
  };
};
