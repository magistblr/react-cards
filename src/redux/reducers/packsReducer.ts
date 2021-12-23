import { ResponsTypePack } from '../../api/api';
import { Dispatch } from 'redux';
import { packListApi } from '../../api/api';



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


// export type PacksType = Array<PackType>

export type PacksType = Array<ResponsTypePack>


// const initialState: PacksType = [
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

const initialState: PacksType = []



export const packsReducer = (state: PacksType = initialState, action: ActionTypes,): PacksType => {
  switch (action.type) {
    case "packsReducer/SET-PACKS":
        return [...action.packs]
    case "packsReducer/ADD-PACK":
        return [{...action.pack}, ...state]
    case "packsReducer/DELETE-PACK":
        return state.filter(pack => pack._id !== action.id)
    default:
      return state;
  }
};


type ActionTypes =    ReturnType<typeof setPacksAC>
                    | ReturnType<typeof addPackAC>
                    | ReturnType<typeof deletePackAC>


export const setPacksAC = (packs: PacksType) => {return {type: "packsReducer/SET-PACKS", packs} as const};
export const addPackAC = (pack: any) => {return {type: "packsReducer/ADD-PACK", pack} as const};
export const deletePackAC = (id: string) => {return {type: "packsReducer/DELETE-PACK", id} as const};

export const PacksTC = () => (dispatch: Dispatch) => {
    return packListApi.getPacks()
        .then((res) => {
            dispatch(setPacksAC(res.data.cardPacks))
        })
        .catch((rej) => {
            console.warn(rej)
        })
};

// export const RemoveTC = () => (dispatch: Dispatch) => {
//     return packListApi.getPacks()
//         .then((res) => {
//             dispatch(setPacksAC(res.data.cardPacks))
//         })
//         .catch((rej) => {
//             console.warn(rej)
//         })
//   };
