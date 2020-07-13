export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const SUBMIT_ITEM = 'SUBMIT_ITEM';

export const addItem = (listItem) => {
    return {
        type: ADD_ITEM,
        listItem: listItem,
            }
};

export const removeItem = (key) => {
    return {
        type: REMOVE_ITEM,
        key: key,
    }
};

export const editItem = (key) => {
    return {
        type: EDIT_ITEM,
        key: key,
    }
};

export const submitItem = (item) => {
    return {
        type: SUBMIT_ITEM,
        item: item,
    }
};
