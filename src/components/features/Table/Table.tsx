import s from "./Table.module.scss";
import ButtonMinMax from "../Button-min-max/ButtonMinMax";
import React from "react";
import { useSelector } from "react-redux";
import { RootStateType } from "../../../redux/store";
import { PacksType } from "../../../redux/reducers/cardsReducer";
import { Pack } from "../Pack/Pack";

// type TableType = {
//     packs: 
// }

function Table() {

    const packs = useSelector<RootStateType, PacksType>(state => state.cards)
    console.log(packs);
    

    return <table className={s.tableStyle}>
        <thead className={s.header}>
            <tr>
                <th align="left"><ButtonMinMax name={'Name'}/></th>
                <th align="left"><ButtonMinMax name={'Cards'}/></th>
                <th align="left"><ButtonMinMax name={'Last Updated'}/></th>
                <th align="left"><ButtonMinMax name={'Created by'}/></th>
                <th align="left"><span>Actions</span></th>
            </tr>
        </thead>
        <tbody>
            {packs.map(elem =>
                                        <Pack
                                                key={elem._id}
                                                id={elem._id}
                                                pack={elem}
                                                >
                                        </Pack>
                                        )
            }
        </tbody>
    </table>
}

export default Table