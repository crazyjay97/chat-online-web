import {createStore, combineReducers} from 'redux'


const initUser = {
    id: '',
    name: '',
}

const USER_ACTION = {
    CET_USER: 'CET_USER'
}


function User(state = initUser, action) {
    switch (action.type) {
        case USER_ACTION.CET_USER:
            return {...state,}
        default:
            return state;
    }

}


const reducers = combineReducers({User})
const store = createStore(reducers)

export default store
