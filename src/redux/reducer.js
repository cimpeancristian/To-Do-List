import {ADD_ITEM, REMOVE_ITEM, EDIT_ITEM, SUBMIT_ITEM} from './actions';

const initialState = {
    toDoList: []
}

const reducer = (state = initialState, action) => {
    console.log(action);

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
        case EDIT_ITEM: return {
            ...state,
            toDoList: [...state.toDoList.map(data => {
                if (data.key===action.key) {
                     data.edit = true;
                }
                return data;
            })]
        }

        case SUBMIT_ITEM: return {
            ...state,
            toDoList: [...state.toDoList.map(data => {
                if (data.edit) {
                    data.text = action.item;
                    data.edit = false;
                }
                return data;
            })]
        }

        default: return state;
    }
}

export default reducer;