import {IState} from "../interfaces/redux.interfaces";

const initialState: IState = {
    url: null,
    loading:false
}

export enum AT {
    FETCH_DOG = "FETCH_DOG",
    REQUEST_DOG = 'REQUEST_DOG'
}

export const reducer = (state: IState = initialState, action: unionT) => {
    switch(action.type) {
        case AT.REQUEST_DOG: return {
            ...state, loading:true
        }
        case AT.FETCH_DOG: return {
            ...state, url: action.payload
        }
        default: return state
    }
}

export const fetchDogAC = (url: string) => {
    return { 
        type: AT.FETCH_DOG,
        payload: url
    }
}
export const requestDogAC = () => {
    return { 
        type: AT.REQUEST_DOG,
        payload: ''
    } as const
}

type unionT = ReturnType<typeof fetchDogAC> | ReturnType<typeof requestDogAC>
