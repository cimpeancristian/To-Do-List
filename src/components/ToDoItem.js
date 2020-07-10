import React, {useState} from 'react';
import {ToDoItemStyled, ButtonStyled, InputStyled, TextStyled} from  './ToDoItem.styled';
import {connect} from 'react-redux';
import {removeItem} from '../redux/actions';


const ToDoItem = ({toDo, removeItem}) => {
    const [checked, setChecked] = useState(false);

    const onChangeFunction = event => {
        setChecked(event.target.checked);
    }

    return (
        <ToDoItemStyled>
            <InputStyled type="checkbox" onChange={onChangeFunction} />
            <TextStyled data-checked={checked}>
                {toDo.text}
            </TextStyled>
            <ButtonStyled onClick={()=> removeItem(toDo.key)}>Delete</ButtonStyled>
        </ToDoItemStyled>
    )
}

const mapStateToProps = state => {
    return {
        toDoList: state.toDoList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeItem: input => dispatch(removeItem(input))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoItem);

