import React, {useState} from 'react';
import {ToDoItemStyled, ButtonStyled, InputStyled, TextStyled} from  './ToDoItem.styled';


const ToDoItem = ({toDo}) => {
    const [checked, setChecked] = useState(false);

    const onChangeFunction = event => {
        console.log(event.target.checked);
        setChecked(event.target.checked);
    }

    return (
        <ToDoItemStyled>
            <InputStyled type="checkbox" onChange={onChangeFunction} />
            <TextStyled data-checked={checked}>
                {toDo.text}
            </TextStyled>
            <ButtonStyled>Delete</ButtonStyled>
        </ToDoItemStyled>
    )
}

export default ToDoItem;

