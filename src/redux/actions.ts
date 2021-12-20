

export const action1 = (value: any) => ({ type: 'cardsReducer/NEW_ARRAY_CARDS'} as const);

export type ActionTypes =
        | ReturnType<typeof action1>
