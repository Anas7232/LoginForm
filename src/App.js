import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { isUserLoggedIn } from './actions';
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import HomePage from './containers/HomePage';
import SigninPage from './containers/SigninPage';
import SignupPage from './containers/SignupPage';

function App() {

  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if(!auth.authenticated){
      dispatch(isUserLoggedIn())
    }
  }, [])

  return (
    <div className="App">
        <Switch>
          <PrivateRoute path="/" exact component={HomePage} />
          <Route path="/signin" component={SigninPage} />
          <Route path="/signup" component={SignupPage} />
        </Switch>
    </div>
  );
}

export default App;
