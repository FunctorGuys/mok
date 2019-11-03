import React, { Fragment, useEffect } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import '../node_modules/video-react/dist/video-react.css';
import Routes from './components/routing/Routes';
import Footer from './components/layout/Footer';

//redux
import { Provider } from 'react-redux';
import store from './store';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

window.onclick = function(e) {
  const element = document.getElementsByClassName('nav-list active-h')[0];

  if (element && window.document.body.clientWidth < 920) {
    element.style.display = 'none';
  } else {
    element.style.display = 'flex';
  }
};

window.onresize = function(e) {
  const element = document.getElementsByClassName('nav-list active-h')[0];
  if (window.document.body.clientWidth < 920) {
    element.style.display = 'none';
  } else {
    element.style.display = 'flex';
  }
};

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route component={Routes} />
          </Switch>
          <Footer />
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
