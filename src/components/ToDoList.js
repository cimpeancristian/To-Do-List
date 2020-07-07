import React from 'react';
import {connect} from 'react-redux';
import {addItem} from '../redux/actions';

const ToDoList = ({toDoList, addItem}) => {
    let input;

    return (
        <>
            <h2>To do List</h2>
            <form>
                <input
                    type="text"
                    ref={node => {input = node;}}
                    placeholder="Add a to do item here " />
                <button className="btn" type="submit" onClick={(event) => {
                    addItem(input.value);
                    console.log('input.value', input.value);
                    input.value='';
                    event.preventDefault();
                }} >Add</button>
            </form>
            <div>{toDoList.map((toDo, index) => {
                return (
                    <div key={`toDo-${index}`}>{toDo}</div>
                    )
            })
            }
            </div>
        </>
    );
}

const mapStateToProps = state => {
    return {
        toDoList: state.toDoList
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        addItem: (input) => dispatch(addItem(input))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);