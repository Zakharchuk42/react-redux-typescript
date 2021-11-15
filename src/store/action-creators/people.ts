import { PeopleAction, PeopleActionTypes } from '../../types/people';
import { Dispatch } from 'react';

import axios from 'axios';

export const fetchPeople = (gender: string = 'all', nat: string = 'all') => {
  return async (dispatch: Dispatch<PeopleAction>) => {
    const API_URL = 'https://randomuser.me/api/1.3/';

    try {
      dispatch({ type: PeopleActionTypes.FETCH_PEOPLE });
      const response = await axios.get(
        `${API_URL}?results=15&gender=${gender}&inc=gender,email,dob,name,picture,nat&nat=${nat}`,
      );

      const people: any[] = response.data.results;

      const newArrPeople = people.map((person: any) => {
        var dob = new Date(person.dob.date).toISOString().slice(0, 10);

        const personInfo = {
          gender: person.gender,
          email: person.email,
          dob,
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
