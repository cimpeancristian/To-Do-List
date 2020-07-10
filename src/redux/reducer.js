import {ADD_ITEM, REMOVE_ITEM} from './actions';

const initialState = {
    toDoList: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ITEM: return {
            ...state,
            toDoList: [...state.toDoList, action.listItem]
        }
        case REMOVE_ITEM: return {
            ...state,
            toDoList: [...state.toDoList.filter(item => {
                return item.key!==action.key
            })]
        }
        default: return state;
    }
}

export default reducer;