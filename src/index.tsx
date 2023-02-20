import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import { Home, Cars, Profile, SignIn } from './components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import { firebaseConfig } from './firebaseConfig';
import 'firebase/auth';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const props = "Car Inventory"

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={ firebaseConfig } suspense={ true }>
    <Provider store={ store }>
        <Router>
          <Switch>

            <Route exact path='/'>
              <Home title={ props } />
            </Route>
            <Route path='/cars'>
              <Cars />
            </Route>
            <Route path='/profile'>
              <Profile></Profile>
            </Route>
            <Route path='/signin'>
              <SignIn></SignIn>
            </Route>

          </Switch>
        </Router>
      </Provider>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);