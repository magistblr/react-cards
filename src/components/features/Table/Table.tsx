import s from "./Table.module.scss";
import ButtonMinMax from "../Button-min-max/ButtonMinMax";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootStateType } from "../../../redux/store";
import { Pack } from "../Pack/Pack";
import { PacksType } from "../../../redux/reducers/packsReducer";
import Preloader from "../Preloader/Preloader";
import { packListApi } from "../../../api/api";

type TableType = {
}

function Table(props: TableType) {
    const packs = useSelector<RootStateType, PacksType>(state => state.packs)

    if(!packs.length){
        return <Preloader/>
    }

    return <table className={s.tableStyle}>
        <thead className={s.header}>
            <tr>
                <th align="left"><ButtonMinMax name={'Name'}/></th>
                <th align="left"><ButtonMinMax name={'cardsCount'}/></th>
                <th align="left"><ButtonMinMax name={'updated'}/></th>
                <th align="left"><ButtonMinMax name={'created'}/></th>
                <th align="left"><span>Actions</span></th>
            </tr>
        </thead>
        <tbody>
            {packs.map(elem =>
                                        <Pack
                                                key={elem._id}
                                                id={elem._id}
                                                pack={elem}
                                                />

                                        )
            }
        </tbody>
    </table>
}

export default Table