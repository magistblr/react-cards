import s from './Pack.module.scss';
import React, { useEffect, useState } from 'react';
import { deletePackAC, PackType } from '../../../redux/reducers/cardsReducer';
import { useDispatch } from 'react-redux';
import { packListApi } from '../../../api/api';

type PropsPackType = {
    id: number
    pack: PackType
}

export const Pack: React.FC<PropsPackType> = ({ ...props }) => {
  const [change, setChange] = useState()
  const {id, pack } = props;

  const dispatch = useDispatch()

  const name = pack.pack.name;
  const cards = pack.pack.cards;
  const lastUpdate = pack.pack.lastUpdate;
  const createdBy = pack.pack.createdBy;
  const deleteButton = pack.pack.actions.delete;
  const editButton = pack.pack.actions.edit;
  const learnButton = pack.pack.actions.learn;

  useEffect(() => {
    packListApi.getPacks().then(res => console.log(res))
    // console.log();
  }, [])


  return (
    <tr>
      <td>{name}</td>
      <td>{cards}</td>
      <td>{lastUpdate}</td>
      <td>{createdBy}</td>
      <td className={s.buttonsCell}>
        {deleteButton && <button className={s.cellDel} onClick={()=> dispatch(deletePackAC(id))}>Delete</button>}
        {change}
        {/* {/* {editButton && <button className={s.cellCommon} onClick={()=> dispatch(editPackAC(id))}>Edit</button>} */}
        {/* {learnButton && <button className={s.cellCommon} onClick={()=> dispatch(learnPackAC(id))}>Learn</button>} */}
      </td>
    </tr>
  );
};



function getPacks(): any {
  throw new Error('Function not implemented.');
}

