import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ""
        };
    }

// Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
    callBackendAPI() {
        fetch('/react_client').then(res => res.text())
            .then(res => this.setState({data: res}))
            .catch(err => console.log(err));
    }

    componentDidMount() {
        // Call our fetch function below once the component mounts
        this.callBackendAPI();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <h3 className="App-intro">{this.state.data}</h3>
            </div>
        );
    }
}

export default App;
