import React, { Component, Fragment } from 'react'
import Logo from '../../img/logo2.png';
import jwt_decode from "jwt-decode";
import { Icon } from 'semantic-ui-react'
import axios from 'axios';
class Login extends Component {
  state = {
    register: false,
    email: '',
    password: '',
    rePassword: '',
    name: '',
    username: '',
    errors: {}
  }
  onClick() {
    this.setState({ register: !this.state.register, email: '', password: '' });
  }

  componentDidMount = () => {
    console.log('component did mount[Auth]')
    if (localStorage.authtoken) {
      const userData = jwt_decode(localStorage.authtoken);

      /**
       * ? check for expired user
       */
      const currentTime = Date.now();
      if (userData.exp < currentTime) {
        window.location.href = '/team';
      }
    }
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.state.register) {
      console.log('register');
      const data = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        rePassword: this.state.rePassword
      }
      axios.post('https://ancient-temple-53657.herokuapp.com/api/auth/register', data)
        .then((res) => {
          console.log(res.data);
          this.setState({ name: '', email: '', password: '', rePassword: '', errors: {}, register: false });

        })
        .catch((err) => {
          console.log(err.response.data);
          this.setState({ errors: err.response.data });
          console.log(this.state);
        });


    } else {
      const data = {
        email: this.state.email,
        password: this.state.password
      }
      axios.post('https://ancient-temple-53657.herokuapp.com/api/auth/login', data)
        .then((res) => {
          this.setState({ email: '', password: '', errors: {} });
          //save token to local storage
          const { token } = res.data;
          //set token local storage
          localStorage.setItem("authtoken", token);
          window.location.href = '/team';
        })
        .catch((err) => {
          console.log(err)
          this.setState({ errors: err.response.data });
          console.log(this.state);
        })

    }


  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    let content;
    if (!this.state.register) {
      content = (
        <Fragment>
          <label htmlFor="username">Email</label>
          <input className="form-styling" type="email" onChange={this.onChange.bind(this)} name="email" placeholder="" value={this.state.email} required />
          <label htmlFor="password">Password</label>
          <input className="form-styling" type="password" onChange={this.onChange.bind(this)} name="password" placeholder="" value={this.state.password} required />
          <button type='submit' className="btn-signin">Sign in</button>
        </Fragment>
      )
    } else {
      content = (
        <Fragment>
          <label htmlFor="name">Name</label>
          <input className="form-styling" type="name" onChange={this.onChange.bind(this)} name="name" placeholder="" value={this.state.name} required />
          <label htmlFor="email">Username</label>
          <input className="form-styling" type="username" onChange={this.onChange.bind(this)} name="username" placeholder="" value={this.state.username} required />
          <label htmlFor="email">Email</label>
          <input className="form-styling" type="email" onChange={this.onChange.bind(this)} name="email" placeholder="" value={this.state.email} required />
          <label htmlFor="password">Password</label>
          <input className="form-styling" type="password" onChange={this.onChange.bind(this)} name="password" placeholder="" value={this.state.password} required />
          <label htmlFor="password">Re-enter password</label>
          <input className="form-styling" type="password" onChange={this.onChange.bind(this)} name="rePassword" placeholder="" value={this.state.rePassword} required />
          <button type='submit' className="btn-signin">Signup</button>
        </Fragment>
      )
    }

    return (
      <div className='auth'>
        <div className='form'>
          <div className='logo'>
            <img className='logo' src={Logo} alt='logo' />
          </div>
          <div className='forms'>
            <h1>{this.state.register ? 'Welcome' : 'Welcome Back'}</h1>
            <span>{this.state.register ? 'Please Signup for using our service' : 'Please Login using your email and password'}</span>
            <form className="form-signin" onSubmit={this.onSubmit.bind(this)} method="post" name="form">
              {content}
            </form>
            <span className='register-span-text'>Or</span>
            <a href='https://github.com/login/oauth/authorize?client_id=3641e84228dcf2c013f7'
              className="btn-signin-github ">
              <Icon name='github' />
              {this.state.register ? 'Sign up with github' : 'Sign in with github'}</a>
            <span className='register-span btn' onClick={this.onClick.bind(this)}> {this.state.register ? 'Already have an account? Signin here' : 'New to Us? Register here.'}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
