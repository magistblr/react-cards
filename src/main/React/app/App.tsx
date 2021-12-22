import React, { useEffect } from 'react'
import s from './App.module.scss';
import RoutesList from '../RoutesList'
import Header from '../header/Header';
import './App.module.scss';
import { Api } from '../../../api/api';


export const App = () => {

  useEffect(() => {
    Api.me()
  }, [])

  return (
      <div className={s.wrapper}>
        <Header/>
        <RoutesList/>
      </div>
  );
}
