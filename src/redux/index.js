import {createStore, combineReducers} from 'redux'
import WebsocketClient from '@/websocket'

let websocketClient = new WebsocketClient();
websocketClient.connect();


export const USER_ACTION = {
    CREATE_USER: 'CREATE_USER',
    RES_MSG: 'RES_MSG',
    UPDATE_NICKNAME: 'UPDATE_NICKNAME'

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
            }
        case  USER_ACTION.RES_MSG:
            return {
                ...state,
                msgHis: [...state.msgHis, action.msg]

            }
        case USER_ACTION.UPDATE_NICKNAME:
            return {
                ...state,
                name: action.NICKNAME
            }
        default:
            return state;
    }

}


const store = createStore(User)

export default store
