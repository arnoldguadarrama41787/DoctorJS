import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Loginscreen from './components/login/LoginScreen.js';
import UploadScreen from './components/login/PrimaryScreen';
import Logout from '../src/components/login/Logout.js';
import axios from 'axios';

injectTapEventPlugin();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      isLogin: false,
    };
    this.logout = this.logout.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
  }

  componentDidMount() {
    console.log(this.state);
  }

  handleLogIn(user, pw) {
    var apiBaseUrl = 'http://localhost:3000/api/';
    var payload = {
      email: `${user}`,
      password: `${pw}`,
    };
    axios
      .post(apiBaseUrl + 'login', payload)
      .then(response => {
        if (response.data.code == 200) {
          console.log('Login Succesful');
          this.setState({
            username: `${user}`,
            isLogin: true,
          });
        } else if (response.data.code == 204) {
          console.log('Username password do not match');
          alert('username password do not match');
        } else {
          console.log('Username does not exists');
          alert('Username does not exist');
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  logout() {
    console.log('LogOut func');
    this.setState({
      username: '',
      isLogin: false,
    });
    console.log(this.state);
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar title="Welcome to DoctorJS" />
          <Logout logout={this.logout} />
          <div className="App">
            {this.state.isLogin ? (
              <UploadScreen />
            ) : (
              <Loginscreen handleLogIn={this.handleLogIn} />
            )}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
