import React, {Component} from 'react';
import logo from '../logo.svg';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : ""
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
      <div className="col-md-6">
        <form className="form-signin" style={{width: "80%"}}>
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <label for="inputEmail" className="sr-only">Email address</label>
          <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autofocus=""/>
          <label for="inputPassword" className="sr-only">Password</label>
          <input type="password" id="inputPassword" className="form-control" placeholder="Password" required=""/>
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me"/> Remember me
            </label>
          </div>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
          <p className="mt-5 mb-3 text-muted">© 2017-2020</p>
        </form>
      </div>
    );
  }
}

export default SignIn;
