import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import s from './SuperSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }


    const mappedOptions: any[] = options ? options.map((o, i) => (
                    <option
                        key={`${o}-${i}`}
                        value={o}
                        selected={o === value}
                    >
                    {o}
                    </option>
    )) : [];


    return (
        <div className={s.box}>
            <select  onChange={onChangeCallback} {...restProps}>
                {mappedOptions}
            </select>
        </div>
    )
}

export default SuperSelect
