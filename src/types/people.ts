// ------------------------------- PEOPLE -------------------------------

export enum PeopleActionTypes {
  FETCH_PEOPLE = 'FETCH_PEOPLE',
  FETCH_PEOPLE_DONE = 'FETCH_PEOPLE_DONE',
  FETCH_PEOPLE_ERROR = 'FETCH_PEOPLE_ERROR',
}

export interface PeopleState {
  people: any[];
  loading: boolean;
  error: null | string;
}

interface PeopleActionFetch {
  type: PeopleActionTypes.FETCH_PEOPLE;
}

interface PeopleActionDone {
  type: PeopleActionTypes.FETCH_PEOPLE_DONE;
  payload: any[];
}

interface PeopleActionError {
  type: PeopleActionTypes.FETCH_PEOPLE_ERROR;
  payload: string;
}

export type PeopleAction =
  | PeopleActionFetch
  | PeopleActionDone
  | PeopleActionError;
