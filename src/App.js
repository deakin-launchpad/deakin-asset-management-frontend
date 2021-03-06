import React, { Component } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'material-icons/iconfont/material-icons.css';
import Home from './views/home'
import Header from '../src/views/header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Programs from './views/Program/programs';
import Programdetails from './views/Program/programdetails';
import Modules from './views/Modules/modules'
import Createprogram from './views/Program/createprogram'
import Moduledetails from './views/Modules/moduledetails'
import CreateModule from './views/Modules/createmodule'
import Activities from './views/Activities/activities'
import Activitydetails from './views/Activities/activitydetails'
import Createactivity from './views/Activities/createactivity'
import Tasks from './views/Tasks/tasks'
import Taskdeatils from './views/Tasks/taskdetails'
import CreateTasks from './views/Tasks/createtasks'
import Login from './views/login'
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginStatus: true,
    }
  }

  loginStatus = (status) => {
    return status ? this.setState({
      loginStatus: status
    }) : false
  }

  render() {
    return (
      <div className="App">
        {console.log('[PATH]', window.location.pathname)}
        {this.state.loginStatus ? <Header></Header> : null}
        <main>
          <Router>
            <Switch>
              {/* <Route path="/" component={() => <Login loginStatus={this.loginStatus} ></Login>} /> */}
              <Route path="/home" component={Home} />
              <Route path="/programs" component={Programs} />
              <Route path="/programdetails" component={Programdetails} />
              <Route path="/createprogram" component={Createprogram} />
              <Route path="/modules" component={Modules} />
              <Route path="/moduledetails" component={Moduledetails} />
              <Route path="/createmodule" component={CreateModule} />
              <Route path="/activity" component={Activities} />
              <Route path="/activitydetails" component={Activitydetails} />
              <Route path="/createactivity" component={Createactivity} />
              <Route path="/tasks" component={Tasks} />
              <Route path="/taskdetails" component={Taskdeatils} />
              <Route path="/createtasks" component={CreateTasks} />
            </Switch>
          </Router>
        </main>
        <footer className="App-footer">Footer Component</footer>
      </div>
    );
  }
}

export default App;
