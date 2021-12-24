import s from './Pack.module.scss';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {packListApi, ResponsTypePack} from '../../../api/api';
import {deletePackAC} from '../../../redux/reducers/packsReducer';

type PropsPackType = {
    id: string
    pack: ResponsTypePack
}

export const Pack: React.FC<PropsPackType> = ({ ...props }) => {
  const [change, setChange] = useState()
  const {id, pack } = props;
  const dispatch = useDispatch()

  const name = pack.name;
  const cards = pack.cardsCount;
  const lastUpdate = pack.updated;
  const createdBy = pack.user_name;
  
  

  return (
    <tr>
      <td>{name}</td>
      <td>{cards}</td>
      <td>{lastUpdate}</td>
      <td>{createdBy}</td>
      <td className={s.buttonsCell}>
        <button className={s.cellDel} onClick={()=> packListApi.deletePacks(id)}>Delete</button>
        {/* <button className={s.cellCommon} onClick={()=> dispatch(editPackAC(id))}>Edit</button>
        <button className={s.cellCommon} onClick={()=> dispatch(learnPackAC(id))}>Learn</button> */}
      </td>
    </tr>
  );
};



