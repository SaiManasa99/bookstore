import React from 'react';
import logo from './logo.svg';
import AddBook from './components/addBook';
import './App.css';
import {Route} from "react-router-dom";
import Admin from './components/admin';
import AddAuthor from './components/addAuthor';
import AddCategory from './components/addCategory';
//import RemoveBook from './components/removeBook';

function App() {
  return (
    <div className="App">
      <Route path='/admin' component={Admin}></Route>
      {/*<Route path="/" exact component={ListGroup} />
       <Route path="/updateBook" component={UpdateBook}/>*/}
      <Route path="/addBook" component={AddBook}/>
      <Route path="/addAuthor" component={AddAuthor}/>
      <Route path="/addCategory" component={AddCategory}/>
      {/*<Route path="/removeBook" children={RemoveBook}/>*/}

    </div>
  );
}

export default App;
