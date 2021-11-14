import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { PeopleState } from '../store/reducers';

export const useTypedSelector: TypedUseSelectorHook<PeopleState> = useSelector;
