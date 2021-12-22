import { Dispatch } from 'redux';



export type PackType =
    {
        id: number,
        pack: {
          name: string,
          cards: number,
          lastUpdate: string,
          createdBy: string,
          actions: {
            delete: boolean,
            edit: boolean,
            learn: boolean,
          },
        },
    }


export type PacksType = Array<PackType>


const initialState: PacksType = [
  {
    id: 1,
    pack: {
      name: 'Pack Name',
      cards: 4,
      lastUpdate: '18.03.2021',
      createdBy: 'Ivan',
      actions: {
        delete: false,
        edit: true,
        learn: true,
      },
    },
  },
  {
    id: 2,
    pack: {
      name: 'Name PAck',
      cards: 4,
      lastUpdate: '18.07.2021',
      createdBy: 'Ivan',
      actions: {
        delete: true,
        edit: true,
        learn: true,
      },
    },
  },
  {
    id: 3,
    pack: {
      name: 'Pack Name',
      cards: 4,
      lastUpdate: '18.01.2021',
      createdBy: 'Ivan',
      actions: {
        delete: true,
        edit: true,
        learn: true,
      },
    },
  },
];

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

export const cardsReducer = (state: PacksType = initialState, action: ActionTypes,): PacksType => {
  switch (action.type) {
    case "packsReducer/SET-PACKS":
        return [...state, ...action.packs]
    case "packsReducer/ADD-PACK":
        return [{...action.pack}, ...state]
    case "packsReducer/DELETE-PACK":
        return state.filter(pack => pack.id !== action.id)
    default:
      return state;
  }
};


type ActionTypes =    ReturnType<typeof setPacksAC>
                    | ReturnType<typeof addPackAC>
                    | ReturnType<typeof deletePackAC>


export const setPacksAC = (packs: PacksType) => {return {type: "packsReducer/SET-PACKS", packs} as const};
export const addPackAC = (pack: PackType) => {return {type: "packsReducer/ADD-PACK", pack} as const};
export const deletePackAC = (id: number) => {return {type: "packsReducer/DELETE-PACK", id} as const};

export const PacksTC =
  (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => {
    // return Api.login(email, password, rememberMe)
    //     .then((res) => {
    //         dispatch(ProfileAC(res.data))
    //         dispatch(IsLoginAC(true))
    //     })
    //     .catch((err) => {
    //         dispatch(ErrorLogin(true))
    //         const error = err.response ? err.response.data.error : (err.message + ', more details in the console');
    //         dispatch(ErrorTextFromResponse(error))
    //     })
    //     .finally(() => {
    //         dispatch(PreloaderStatus('succeeded'))
    //     })
  };
