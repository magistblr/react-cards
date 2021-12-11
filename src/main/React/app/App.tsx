import React from 'react'
import {Route, Routes} from 'react-router-dom'
import s from './App.module.scss';
import RoutesList from '../RoutesList'
import Header from '../header/Header';

export const App = () => {
  return (
      <div className={s.wrapper}>
        <Header/>
        <RoutesList/>
      </div>
  );
}
