import { ResponsTypePack } from './../../api/api';
import { Dispatch } from 'redux';



// export type PackType =
//     {
//         id: number,
//         pack: {
//           name: string,
//           cards: number,
//           lastUpdate: string,
//           createdBy: string,
//           actions: {
//             delete: boolean,
//             edit: boolean,
//             learn: boolean,
//           },
//         },
//     }


// export type CardsType = Array<PackType>

export type CardsType = Array<ResponsTypePack>


// const initialState: CardsType = [
//   {
//     id: 1,
//     pack: {
//       name: 'Pack Name',
//       cards: 4,
//       lastUpdate: '18.03.2021',
//       createdBy: 'Ivan',
//       actions: {
//         delete: false,
//         edit: true,
//         learn: true,
//       },
//     },
//   },
//   {
//     id: 2,
//     pack: {
//       name: 'Name PAck',
//       cards: 4,
//       lastUpdate: '18.07.2021',
//       createdBy: 'Ivan',
//       actions: {
//         delete: true,
//         edit: true,
//         learn: true,
//       },
//     },
//   },
//   {
//     id: 3,
//     pack: {
//       name: 'Pack Name',
//       cards: 4,
//       lastUpdate: '18.01.2021',
//       createdBy: 'Ivan',
//       actions: {
//         delete: true,
//         edit: true,
//         learn: true,
//       },
//     },
//   },
// ];

// type packType = {
//   name: 'Pack Name';
//   cards: 4;
//   lastUpdate: '18.03.2021';
//   createdBy: 'Ivan';
//   actions: {
//     delete: true;
//     edit: true;
//     learn: true;
//   };
// };

const initialState: CardsType = []



export const cardsReducer = (state: CardsType = initialState, action: any,): CardsType => {
  switch (action.type) {
    // case "CardsReducer/SET-Cards":
    //     return [...action.Cards]
    // case "CardsReducer/ADD-PACK":
    //     return [{...action.pack}, ...state]
    // case "CardsReducer/DELETE-PACK":
    //     return state.filter(pack => pack._id !== action.id)
    default:
      return state;
  }
};


// type ActionTypes =    ReturnType<typeof setCardsAC>
//                     | ReturnType<typeof addCardAC>
//                     | ReturnType<typeof deleteCardAC>


// export const setCardsAC = (Cards: CardsType) => {return {type: "CardsReducer/SET-Cards", Cards} as const};
// export const addCardAC = (pack: any) => {return {type: "CardsReducer/ADD-PACK", pack} as const};
// export const deleteCardAC = (id: string) => {return {type: "CardsReducer/DELETE-PACK", id} as const};

// export const CardsTC = () => (dispatch: Dispatch) => {
//     return packListApi.getCards()
//         .then((res) => {
//             dispatch(setCardsAC(res.data.cardCards))
//         })
//         .catch((rej) => {
//             console.warn(rej)
//         })
//   };

// export const RemoveTC = () => (dispatch: Dispatch) => {
//     return packListApi.getCards()
//         .then((res) => {
//             dispatch(setCardsAC(res.data.cardCards))
//         })
//         .catch((rej) => {
//             console.warn(rej)
//         })
//   };
