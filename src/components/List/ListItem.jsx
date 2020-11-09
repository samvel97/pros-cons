import React, { memo, useCallback } from 'react'
import './list.css';

const ListItem = ({ index, value, onChange }) => {
  const handleChange = useCallback((event) => {
    onChange(index, event.target.value);
  }, [index, onChange]);

  return (
    <li className="list-item">
      <span>{index + 1}.</span>
      <input value={value} onChange={handleChange} />
    </li>
  )
}

export default memo(ListItem);
