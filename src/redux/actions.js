export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

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
