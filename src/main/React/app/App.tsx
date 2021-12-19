import React from 'react'
import s from './App.module.scss';
import RoutesList from '../RoutesList'
import Header from '../header/Header';
import './App.module.scss';


export const App = () => {
  return (
      <div className={s.wrapper}>
        <Header/>
        <RoutesList/>
      </div>
  );
}
