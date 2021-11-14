import React from 'react';
import { useTypedSelector } from '../hooks/typeSelector';

const PeopleList: React.FC = () => {
  const { error, loading, people } = useTypedSelector(state => state.people);

  console.log(people);

  return <div>PeopleList</div>;
};

export default PeopleList;
