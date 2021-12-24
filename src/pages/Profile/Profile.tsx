import React from 'react';
import s from './Profile.module.scss';
import {NavLink} from "react-router-dom";
import styles from "../../main/React/header/Header.module.scss";

export const Profile = () => {
  
  return (
      <div className={s.wrapper}>
        Hello world!
        <span className={s.span}> Go to </span>
          <NavLink className={s.button} to="/packsList">Packs</NavLink>
      </div>
  );
}
