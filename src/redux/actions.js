export const ADD_ITEM = 'ADD_ITEM';

export const addItem = (listItem) => {
    return {
        type: ADD_ITEM,
        listItem: listItem,
            }
};
