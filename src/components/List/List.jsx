import React, { useCallback, useState } from 'react';
import './list.css';
import ListItem from './ListItem';

const List = ({ title }) => {
  const [data, setData] = useState(['']);
  
  const handleChange = useCallback((index, value) => {
    data[index] = value;
    if(!value) {
      data.splice(index, 1);
    }
    if (data[data.length] !== '' && data[data.length - 1]) {
      data.push('');
    }

    setData([...data])
  }, [data]);

  return (
    <div className="list">
      <div className="list-header">
        <h4>{title}</h4>
      </div>
      <div className="list-content">
        <ul>
          {data.map((item, index) => (
            <ListItem
              key={index}
              index={index}
              value={item}
              onChange={handleChange}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default List;