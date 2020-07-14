import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import {connect} from 'react-redux';

import {ToDoListStyled} from './ToDoList.styled';

const Search = ({toDoList}) => {
    const stateList = toDoList.map(data => data.text);
    const [search, setSearch] = useState('');
    const [searchList, setSearchList]= useState(stateList);
    const [list, setList] = useState(false);

    const handleOnChange = event => {
        setSearch(event.target.value.split(' '));
    };

    const submitButton = () => {
        if(search!==''){
            const searchPattern = new RegExp(search.map(term => `(?=.*${term})`).join(''), 'i');
            const filteredList = stateList.filter(option =>
                option.match(searchPattern)
            );
            setSearchList(filteredList.length===0? ['No results to show']: filteredList);
        }
        else {
            setSearchList(['Please enter something in search dialog']);
        }

        setList(true);
        setSearch('');
    };

    return (
        <>
            <h2>Search</h2>
            <input type="text" placeholder=" Search in list" value={search} onChange={handleOnChange}/>
            <Button onClick={submitButton}>Search</Button>
            {list && (searchList.map((item, index) =>
                <ToDoListStyled key={index}>{item}</ToDoListStyled>
                )
            )}
        </>
    )
}

const mapStateToProps = state => {
    return {
        toDoList: state.toDoList
    }
}

export default connect(mapStateToProps)(Search);