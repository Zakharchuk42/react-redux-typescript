import {
  PeopleActionTypes,
  PeopleState,
  PeopleAction,
} from '../../types/people';

const peopleState: PeopleState = {
  people: [],
  loading: false,
  error: null,
};

export const peopleReducer = (
  state = peopleState,
  action: PeopleAction,
): PeopleState => {
  switch (action.type) {
    case PeopleActionTypes.FETCH_PEOPLE:
      return { loading: true, people: [], error: null };
    case PeopleActionTypes.FETCH_PEOPLE_DONE:
      return { loading: false, people: action.payload, error: null };
    case PeopleActionTypes.FETCH_PEOPLE_ERROR:
      return { loading: false, people: [], error: action.payload };
    default:
      return state;
  }
};
