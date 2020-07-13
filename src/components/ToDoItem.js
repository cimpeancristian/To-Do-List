import React, {useState} from 'react';
import {ToDoItemStyled, EditButtonStyled, ButtonStyled, InputStyled, TextStyled} from  './ToDoItem.styled';
import {connect} from 'react-redux';
import {editItem, removeItem, submitItem} from '../redux/actions';


const ToDoItem = ({toDo, removeItem, editItem, submitItem}) => {
    const [checked, setChecked] = useState(false);
    const [value, setValue] = useState(toDo.text);

    const onChangeFunction = event => {
        setChecked(event.target.checked);
    }

    const handleChangeFunction = event => {
        setValue(event.target.value);
    }

    return (
        <ToDoItemStyled>
            {!toDo.edit?
                <>
                    <InputStyled type="checkbox" onChange={onChangeFunction} />
                    <TextStyled data-checked={checked}>
                        {toDo.text}
                    </TextStyled>
                    <EditButtonStyled onClick={()=> editItem(toDo.key)}>Edit</EditButtonStyled>
                </>:
                <>
                    <input type="text" value={value} onChange={handleChangeFunction}/>
                    <EditButtonStyled onClick={()=> submitItem(value)}>Save</EditButtonStyled>
                </>}

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
        removeItem: input => dispatch(removeItem(input)),
        editItem: input => dispatch(editItem(input)),
        submitItem: input => dispatch(submitItem(input)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoItem);

