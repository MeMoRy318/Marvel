import {FC,PropsWithChildren} from 'react';

import './appHeader.scss';


type IProps = PropsWithChildren


const AppHeader:FC<IProps> = () => {
  return (
    <header className="app__header" style={{}}>
      <h1 className="app__title">
        <a href="#">
          <span>Marvel</span> information portal
        </a>
      </h1>
      <nav className="app__menu">
        <ul>
          <li><a href="#">Characters</a></li>
                    /
          <li><a href="#">Comics</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;