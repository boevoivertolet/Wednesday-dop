import React, {ChangeEvent, useState} from 'react';
import { SlowComponent } from './slowComponent/SlowComponent';


//find the problem and fix it as part of composition optimization, memo, children

type Task_3PropsType ={
    children?: React.ReactNode
}

export const Task_3:React.FC<Task_3PropsType> = ({children}) => {
    console.log('Task_3 render')




  return (
    <div>
      <div>Lags when change value</div>
      <Input/>
        {children}
    </div>
  );
};
const Input = () => {
    const [value, setValue] = useState('');
    const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value);

  return(
      <input type="text" value={value} onChange={onChange} />
  )
}
