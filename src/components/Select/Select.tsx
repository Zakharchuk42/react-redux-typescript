import React from 'react';

import './Select.scss';

interface SelectProps {
  selectedArray?: string[];
  chooseFilter?: string;
  action: (onChangeValue: string) => void;
}

const Select: React.FC<SelectProps> = ({
  selectedArray,
  action,
  chooseFilter,
}) => {
  return (
    <select
      value={chooseFilter}
      onChange={e => {
        action(e.target.value);
      }}
    >
      {selectedArray?.map(item => {
        return (
          <option value={item} key={item}>
            {item}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
