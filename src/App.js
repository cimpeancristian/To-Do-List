import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './redux/store';
import ToDoList from './components/ToDoList';

function App() {
  return (
      <Provider store={store}>
          <div className="App">
              <ToDoList />
          </div>
      </Provider>

  );
}

export default App;
