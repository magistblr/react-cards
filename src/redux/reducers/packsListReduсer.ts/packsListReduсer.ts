export type initialStateType = typeof initialState

const initialState = {
    valueFromThePacksButton: '',
    sortPacks: '',
}

export const packsListReducer = (state = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case "VALUE-FROM-THE-PACKS-SELECT":
            return {...state, valueFromThePacksButton: action.valueOfTheButton}
        case "SORT-PACKS":
            return {...state, sortPacks: action.zeroOrOneAndcellName}
        default:
            return state
    }
}

export const SelectedValueOfTheButtonInPacksAC = (valueOfTheButton: string) => {
    return {
        type: 'VALUE-FROM-THE-PACKS-SELECT',
        valueOfTheButton
    } as const
}
export const SortPacksAC = (zeroOrOneAndcellName: string) => {
    return {
        type: 'SORT-PACKS',
        zeroOrOneAndcellName
    } as const
}
type ActionTypes =
    | ReturnType<typeof SelectedValueOfTheButtonInPacksAC>
    | ReturnType<typeof SortPacksAC>
