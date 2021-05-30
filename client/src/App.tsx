import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.module.scss';
import { Home } from './pages';

interface Props {}
interface States {}

class App extends Component<Props, States> {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' exact component={Home} />
                </Switch>
            </Router>
        );
    }
}

export default App;
