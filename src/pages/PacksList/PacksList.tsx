import s from './PacksList.module.scss'
import React, {ChangeEvent, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    SelectedValueOfTheButtonInPacksAC,
    SortPacksAC
} from "../../redux/reducers/packsListReduсer.ts/packsListReduсer";
import {RootStateType} from "../../redux/store";
import Table from "../../components/features/Table/Table";
import {PacksTC} from '../../redux/reducers/packsReducer';
import DoubleSlider from "../../components/features/doubleSlider/DoubleSlider";
import Preloader from '../../components/features/Preloader/Preloader';
import {getAuthMeTC} from "../../redux/reducers/loginReducer";
import {Navigate} from "react-router-dom";
import { packListApi } from '../../api/api';

export type cardsPacksType = {
    name: string
    path: string
    grade: number
    shots: number
    rating: number
    deckCover: string
    private: boolean
    type: string

}

const cardsPack: cardsPacksType = {
    name: "for Sergei",
    path: "/def",
    grade: 0,
    shots: 0,
    rating: 0,
    deckCover: "url or base64",
    private: false,
    type: "pack",
}


function PacksList () {
    let [inputValue, setInputValue] = useState('')
    const status = useSelector<RootStateType, string>(state => state.login.status)
    let IsLogin = useSelector<RootStateType, boolean>(state => state.login.isLogin)
    const sortPacks = useSelector<RootStateType, string>(state => state.packsList.sortPacks)
    const dispatch = useDispatch()
    const inputChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }
    const Search = () => {
        dispatch(PacksTC(sortPacks,inputValue))
    }
    const SelectedValueOfTheSelect = (e: string) => {
        dispatch(SelectedValueOfTheButtonInPacksAC(e))
    }

    useEffect(() => {
        dispatch(getAuthMeTC())
        dispatch(PacksTC(sortPacks,inputValue))

    }, [sortPacks])

    if (!IsLogin) {
        return <Navigate to={"/"}/>
    }


    const addPackHandler = () => {
        packListApi.addPacks(cardsPack)
                    .then(res => console.log(res))
    }

    return <>
        {status === "loading" ? <Preloader/>
            : <div className={s.wrapper}>
                <div className={s.container}>
                    <div className={s.sidebar}>
                        <div className={s.sidebarContainer}>
                            <div className={s.top}>
                                <h3>Show packs cards</h3>
                                <div className={s.bottonContainer}>
                                    <button>My</button>
                                    <button>All</button>
                                </div>
                            </div>
                            <div className={s.bottom}>
                                <h3>Number of cards</h3>
                                <DoubleSlider/>
                            </div>
                        </div>
                    </div>
                    <div className={s.mainField}>
                        <div className={s.mainFieldContainer}>
                            <h2>Packs list</h2>
                            <div className={s.searchBar}>
                                <div className={s.inButContainer}>
                                    <div className={s.inputFieldContainer}><input onChange={inputChangeValue}
                                                                                  placeholder="Search..."
                                                                                  className={s.inputField}
                                                                                  type="text"/></div>
                                    <button onClick={() => Search()}  className={s.searchButton}>Search</button>
                                </div>

                                <button className={s.addNewPack} onClick={addPackHandler}> Add new pack</button>
                            </div>
                            <Table/>
                            <div className={s.pagination}>
                                <svg aria-hidden="true" focusable="false" data-prefix="fas"
                                     data-icon="arrow-circle-right"
                                     role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                     className="svgInline">
                                    <path fill="currentColor"
                                          d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z"
                                          className=""></path>
                                </svg>
                                <button onClick={(e) => SelectedValueOfTheSelect(e.currentTarget.value)} value={'1'}>1
                                </button>
                                <button onClick={(e) => SelectedValueOfTheSelect(e.currentTarget.value)} value={'2'}>2
                                </button>
                                <button onClick={(e) => SelectedValueOfTheSelect(e.currentTarget.value)} value={'3'}>3
                                </button>
                                <button onClick={(e) => SelectedValueOfTheSelect(e.currentTarget.value)} value={'4'}>4
                                </button>
                                <button onClick={(e) => SelectedValueOfTheSelect(e.currentTarget.value)} value={'5'}>5
                                </button>
                                <span className={s.spanellipsis}>...</span>
                                <span className={s.spanNumber}>5</span>
                                <svg aria-hidden="true" focusable="false" data-prefix="fas"
                                     data-icon="arrow-circle-left"
                                     role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                     className="svg-inline--fa fa-arrow-circle-left fa-w-16 fa-2x">
                                    <path fill="currentColor"
                                          d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm28.9-143.6L209.4 288H392c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24H209.4l75.5-72.4c9.7-9.3 9.9-24.8.4-34.3l-11-10.9c-9.4-9.4-24.6-9.4-33.9 0L107.7 239c-9.4 9.4-9.4 24.6 0 33.9l132.7 132.7c9.4 9.4 24.6 9.4 33.9 0l11-10.9c9.5-9.5 9.3-25-.4-34.3z"
                                          className=""></path>
                                </svg>
                                <span className={s.ShowSpan}>Show</span>
                                <select className={s.select}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                                <span>Cards per Page</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
    </>


}

export default PacksList


