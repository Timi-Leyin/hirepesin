import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';

import Register from './pages/Register/Register';

import Login from './pages/Login/Login';

import Jobs from './pages/Jobs/Jobs';

import Error from './pages/Error/Error';


import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
<Router>
<Switch>
        <Route path='/' exact component={Home} />
      
        <Route path='/home' component={Home} />
      
      <Route path='/register' component={Register} />
      
       <Route path='/login' component={Login} />
             <Route path='/jobs' component={Jobs} />
      <Route render={()=>{
      return (
      <Error />
      )
  } } />
      
       
      
      </Switch>
      
</Router>

  );
}

export default App;
