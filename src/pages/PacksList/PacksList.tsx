import React from 'react';
import { useSelector } from 'react-redux';
import { InitialStatePacksType } from '../../redux/reducers/packsReducer';
import { StateType } from '../../redux/store';
import Table from './Packs/Packs';
import s from './PacksList.module.scss';

export const PacksList = () => {

  const table = useSelector<StateType, InitialStatePacksType>(state => state.packsList)

  return (
      <div className={s.wrapper}>
        {/* <Table model={table}/> */}
      </div>
  );
}
