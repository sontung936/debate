import React, { Component } from 'react';
import Nav from './components/nav'
import DiscussionList from './components/discussionList';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Discussion from './components/disscussion/discussion';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import store from "./store";
import login from './components/login';
import  Register  from './components/Register';
import Profile from './components/profile/profile';
import { PrivateRoute } from './components/PrivateRoute';
import  logout  from './components/logout';
import NewDiscussion from './components/disscussion/newDiscussion';
import history from './historyForRouter/history'
import editDiscussion from './components/disscussion/editDiscussion'
import Search from './components/search';

class App extends Component {


  render() {
    return (
        <Provider store={store}>
          <Router history={history}>
            <div>
              <div className="contents">
                <Nav />
              </div>
              <Switch>
                <Route exact path='/' component={DiscussionList} />
                <Route path='/discussion/:id' component={Discussion} />
                <Route path='/discussion' component={DiscussionList} />
                <Route path='/login' component={login} />
                <Route path='/logout' component={logout} />
                <Route path='/register' component={Register} />
                <Route path='/search' component={Search} />
                <PrivateRoute path='/edit-discussion/:id' component={editDiscussion} />
                <PrivateRoute path='/profile' component={Profile} />
                <PrivateRoute path='/add-discussion' component={NewDiscussion} />
              </Switch>
            </div>
          </Router>
        </Provider>
    );
  }
}

export default App;