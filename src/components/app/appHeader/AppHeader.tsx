import {FC,PropsWithChildren} from 'react';
import { Link, NavLink } from 'react-router-dom';

import './appHeader.scss';


type IProps = PropsWithChildren


const AppHeader:FC<IProps> = () => {
  return (
    <header className="app__header" style={{}}>
      <h1 className="app__title">
        <Link to={'/'}>
          <span>Marvel</span> information portal
        </Link>
      </h1>
      <nav className="app__menu">
        <ul>
          <li><NavLink 
            to={'/'}
            style={({ isActive }) => ({ color: isActive ? 'red' : 'black', })}
          >Characters</NavLink></li>
                    /
          <li><NavLink 
            to={'/comics'}
            style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}
          >Comics</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export {AppHeader};