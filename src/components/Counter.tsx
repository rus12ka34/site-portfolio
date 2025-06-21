import { useState } from 'react';

import classes from './Counter.modules.scss';

export const Counter = () => {
  const [value, setValue] = useState(0);
  const { btn } = classes;

  return (
    <div>
      <span>{value}</span><br />
      <button className={btn} onClick={() => setValue(value + 1)} >Добавить 1</button>
      <button className={btn} onClick={() => setValue(value - 1)} >Убавить 1</button>
    </div>
  );
};