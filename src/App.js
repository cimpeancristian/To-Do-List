import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {DivStyled, LiStyled, UlStyled} from './App.styled';
import ToDoList from './components/ToDoList';
import Search from './components/Search';

function App() {
  return (
      <Provider store={store}>
          <DivStyled>
              <Router>
                  <div>
                      <nav>
                          <UlStyled>
                              <LiStyled>
                                  <Link to="/">Home</Link>
                              </LiStyled>
                              <LiStyled>
                                  <Link to="/search">Search</Link>
                              </LiStyled>
                          </UlStyled>
                      </nav>
                      <Switch>
                          <Route exact path="/">
                              <ToDoList />
                          </Route>
                          <Route path="/search">
                              <Search />
                          </Route>
                      </Switch>
                  </div>
              </Router>
          </DivStyled>
      </Provider>

  );
}

export default App;
