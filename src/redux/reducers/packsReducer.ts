import { ResponsTypePack } from '../../api/api';
import { Dispatch } from 'redux';
import { packListApi } from '../../api/api';
import {IsLoginAC, PreloaderStatus} from "./loginReducer";



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


export type cardsPackAddType = {
    name: string
    path: string
    grade: number
    shots: number
    rating: number
    deckCover: string
    private: boolean
    type: string
}


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
    case "packsReducer/EDIT-PACK":
        return state.filter(pack => pack._id === action.id ? pack.name = action.name : pack)
    default:
      return state;
  }
};


type ActionTypes =    ReturnType<typeof setPacksAC>
                    | ReturnType<typeof addPackAC>
                    | ReturnType<typeof deletePackAC>
                    | ReturnType<typeof editPackAC>


export const setPacksAC = (packs: PacksType) => {return {type: "packsReducer/SET-PACKS", packs} as const};
export const addPackAC = (pack: ResponsTypePack) => {return {type: "packsReducer/ADD-PACK", pack} as const};
export const deletePackAC = (id: string) => {return {type: "packsReducer/DELETE-PACK", id} as const};
export const editPackAC = (id:string, name: string) => {return {type: "packsReducer/EDIT-PACK", id, name} as const};

export const PacksTC =(sortPacks: string,name:string) => (dispatch: Dispatch) => {
    dispatch(PreloaderStatus('loading'))
    return packListApi.getPacks(sortPacks,name)
        .then((res) => {
            dispatch(IsLoginAC(true))
            dispatch(setPacksAC(res.data.cardPacks))
        })
        .catch((rej) => {
            dispatch(IsLoginAC(false))
        })
        .finally(() => {
            dispatch(PreloaderStatus('succeeded'))
        })
};

export const addPackTC = (pack: cardsPackAddType) => (dispatch: Dispatch) => {
    dispatch(PreloaderStatus('loading'))
    return packListApi.addPacks(pack)
        .then((res) => {
            console.log(res);
            if(res){
                dispatch(addPackAC(res.data.newCardsPack))
            }
        })
        .catch((rej) => {
            console.warn(rej)
        })
        .finally(() => {
            dispatch(PreloaderStatus('succeeded'))
        })
};

export const RemovePackTC = (id: string) => (dispatch: Dispatch) => {
    dispatch(PreloaderStatus('loading'))
    return packListApi.deletePacks(id)
        .then((res) => {
            if(res){
                dispatch(deletePackAC(id))
            }
        })
        .catch((rej) => {
            console.warn(rej)
        })
        .finally(() => {
            dispatch(PreloaderStatus('succeeded'))
        })
};

export const EditPackTC = (id: string, name: string) => (dispatch: Dispatch) => {
    dispatch(PreloaderStatus('loading'))
    return packListApi.editPacks(id, name)
        .then((res) => {
            if(res){
                dispatch(editPackAC(id, name))
            }
        })
        .catch((rej) => {
            console.warn(rej)
        })
        .finally(() => {
            dispatch(PreloaderStatus('succeeded'))
        })
};
