import {Dispatch} from "redux";

export type initialStateType = typeof initialState

const initialState = {
    valueFromThePacksInput : '',
    valueFromThePacksButton:'',
    sortPacks: '',
}

export const packsListReducer = (state = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case "VALUE-FROM-THE-PACKS-INPUT":
            return {...state,valueFromThePacksInput : action.valueOfTheInput}
        case "VALUE-FROM-THE-PACKS-SELECT":
            return {...state,valueFromThePacksButton : action.valueOfTheButton}
        case "SORT-PACKS":
            return {...state, sortPacks: action.zeroOrOneAndcellName}
        default:
            return state
    }
}

export const ValueFromThePacksInputAC = (valueOfTheInput: string) => {
    return {
        type: 'VALUE-FROM-THE-PACKS-INPUT',
        valueOfTheInput
    }as const
}
export const SelectedValueOfTheButtonInPacksAC = (valueOfTheButton: string) => {
    return {
        type: 'VALUE-FROM-THE-PACKS-SELECT',
        valueOfTheButton
    }as const
}
export const SortPacksAC = (zeroOrOneAndcellName: string) => {
    return {
        type: 'SORT-PACKS',
        zeroOrOneAndcellName
    } as const
}
export const getStateTC = (valueFromInput:string,valueFromSelect:string) => (dispatch: Dispatch<any>)=> {
return
}
type ActionTypes =
    | ReturnType<typeof ValueFromThePacksInputAC>
    | ReturnType<typeof SelectedValueOfTheButtonInPacksAC>
    | ReturnType<typeof SortPacksAC>
