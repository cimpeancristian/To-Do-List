import React from 'react';
import {connect} from 'react-redux';
import {addItem} from '../redux/actions';
import {ToDoListStyled} from './ToDoList.styled';
import ToDoItem from './ToDoItem';

const ToDoList = ({toDoList, addItem}) => {
    let input;

    console.log(toDoList);

    return (
        <>
            <h2>To do List</h2>
            <form>
                <input
                    type="text"
                    ref={node => {input = node;}}
                    placeholder=" Add a to do item here " />
                <button className="btn" type="submit" onClick={event => {
                    addItem({text: input.value, key: Date.now(), edit: false});
                    input.value='';
                    event.preventDefault();
                }} >Add</button>
            </form>
            <ToDoListStyled>{toDoList.map((toDo, index) => {
                return (
                    <ToDoItem key={`toDo-${index}`} toDo={toDo} />
                    )
            })
            }
            </ToDoListStyled>
        </>
    );
}

const mapStateToProps = state => {
    return {
        toDoList: state.toDoList
    }
}

const mapDispatchToProps = dispatch => {

    return {
        addItem: input => dispatch(addItem(input))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);