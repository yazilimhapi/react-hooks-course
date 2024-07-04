import React, { useState } from 'react';
import SubComponent from './SubComponent';

const UseStateLesson = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [list, setList] = useState([]);
  const [data, setData] = useState({
    name: '',
    surname: 'Doe',
  });

  return (
    <div style={{ display: 'flex', gap: '50px' }}>
      <div>
        <h1>Number</h1>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>

      <div>
        <h1>String</h1>
        <p>{text}</p>
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div>

      <div>
        <h1>Array</h1>
        {list.map((item, index) => {
          return <p key={index}>{item} {index}</p>;
        })}
        <button onClick={() => setList([...list, 'Item'])}>Add</button>
      </div>

      <div>
        <h1>Object</h1>

        <div>
          <p>{data.name}</p>
          <p>{data.surname}</p>
        </div>

        <button onClick={() => setData({ ...data, name: 'Changed' })}>
          Change
        </button>
      </div>

      <SubComponent list={list} setList={setList} />
    </div>
  );
};

export default UseStateLesson;
