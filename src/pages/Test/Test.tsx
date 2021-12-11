import React, { useState } from 'react';
import SuperButton from '../../components/SuperButton/SuperButton';
import SuperCheckbox from '../../components/SuperCheckbox/SuperCheckbox';
import SuperEditableSpan from '../../components/SuperEditableSpan/SuperEditableSpan';
import SuperInputText from '../../components/SuperInputText/SuperInputText';
import SuperRadio from '../../components/SuperRadio/SuperRadio';
import SuperSelect from '../../components/SuperSelect/SuperSelect';
import s from './Test.module.scss';

export const Test = () => {
  const arr = ['x', 'y', 'z']
  const [value, onChangeOption] = useState(arr[1])

  const [valueEditableSpan, setValueEditableSpan] = useState<string>('dwd')

  return (
      <div className={s.wrapper}>
        <SuperButton>Enter</SuperButton>
        <SuperCheckbox></SuperCheckbox>
        <SuperInputText></SuperInputText>
        <SuperRadio options={arr} value={value} name={'radio'} onChangeOption={onChangeOption}></SuperRadio>
        <SuperSelect options={arr} value={value} onChangeOption={onChangeOption}></SuperSelect>
        <SuperEditableSpan
              value={valueEditableSpan}
              onChangeText={setValueEditableSpan}
              spanProps={{children: value ? undefined : 'enter text...'}}
        />
      </div>
  );
}