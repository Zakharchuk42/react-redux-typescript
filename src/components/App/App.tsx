import React from 'react';
import PeopleList from '../PeopleList/PeopleList';
import Filter from '../Filter/Filter';

import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <Filter />
      <PeopleList />
    </div>
  );
};

export default App;
