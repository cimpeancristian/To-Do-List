import {ADD_ITEM} from './actions';

const initialState = {
    toDoList: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {

        case ADD_ITEM: return {
            ...state,
            toDoList: [...state.toDoList, action.listItem]
        }
        default: return state;
    }
}

export default reducer;