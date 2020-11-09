import { memo } from 'react';
import './header.css';

const Header = () => {
  return (
    <header>
      <h1>Should I eat at McDonalds?</h1>
    </header>
  );
}

export default memo(Header);
