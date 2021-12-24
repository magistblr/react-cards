import s from './Pack.module.scss';
import React, {ChangeEvent, useState} from 'react';
import {useDispatch} from 'react-redux';
import {ResponsTypePack} from '../../../api/api';
import {EditPackTC, RemovePackTC} from '../../../redux/reducers/packsReducer';

type PropsPackType = {
    id: string
    pack: ResponsTypePack
}

export const Pack: React.FC<PropsPackType> = ({ ...props }) => {
  const {id, pack } = props;

  const name = pack.name;
  const cards = pack.cardsCount;
  const lastUpdate = pack.updated;
  const createdBy = pack.user_name;

  const [change, setChange] = useState(false)
  const [valueInput, setValueInput] = useState(name)

  const dispatch = useDispatch()

  const inputChange = () => {
    setChange(true)
  }

  const activateViewMode = () => {
    setChange(false);
    dispatch(EditPackTC(id, valueInput))
  }

  const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.currentTarget.value)
  }

  const editPackHandler = () => {
    dispatch(EditPackTC(id, valueInput))
  }

  return (
    <tr>
      {!change
              ? <td>{name}</td>
              : <div>
                  <input type="text" value={valueInput} onChange={onChangeInputHandler} onBlur={activateViewMode} autoFocus/>
                  <button className={s.cellCommon} onClick={editPackHandler}>OK</button>
                </div>
      }
      <td>{cards}</td>
      <td>{lastUpdate}</td>
      <td>{createdBy}</td>
      <td className={s.buttonsCell}>
        {<button className={s.cellDel} onClick={()=> dispatch(RemovePackTC(id))}>Delete</button>}
        <button className={s.cellCommon} onClick={inputChange}>Edit</button>
        <button className={s.cellCommon}>Learn</button>
      </td>
    </tr>
  );
};



