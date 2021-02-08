import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './containers/Home/Home';
import Post from './containers/Post/Post';
import Secrets from './containers/Secrets/Secrets';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path='/read' component={Secrets} />
          <Route path='/post' component={Post} />
          <Route path='/' component={Home} exact />
          <Redirect from='/' to='/' />
        </Switch>
      </Layout>
    );
  }
}

export default App;
