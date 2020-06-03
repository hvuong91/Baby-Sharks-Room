import React, {Component} from 'react';

import './App.css';
import Header from './components/Header';
import AppIntro from './components/AppIntro';
import SignIn from './components/SignIn';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          data: ""
      };
  }

  render() {

    const customStyle = {
      width: "70%",
      margin: "auto",
      marginTop: "5%",
    };

    return (
        <div className="App">
          <Header />
          <div className="row" style={customStyle}>
            <SignIn />
            <AppIntro />
          </div>
        </div>
    );
  }
}

export default App;
