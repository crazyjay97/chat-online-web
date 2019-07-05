import {createStore, combineReducers} from 'redux'
import WebsocketClient from '@/websocket'

let websocketClient = new WebsocketClient();
websocketClient.connect();


export const USER_ACTION = {
    CREATE_USER: 'CREATE_USER',
    RES_MSG: 'RES_MSG',

}

const initState = {
    wsClient: websocketClient,
    msgHis: []
}

const User = (state = initState, action) => {
    switch (action.type) {
        case USER_ACTION.CREATE_USER:
            return {
                ...state,
                id: action.payload.id,
                name: action.payload.name
            }
        case  USER_ACTION.RES_MSG:
            return {
                ...state,
                msgHis: [...state.msgHis, action.msg]

            }
        default:
            return state;
    }

}


const store = createStore(User)

export default store
