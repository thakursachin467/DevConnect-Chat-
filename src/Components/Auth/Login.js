import React, { Component, Fragment } from 'react'
import Logo from '../../img/logo2.png';
import { Button, Icon } from 'semantic-ui-react'
class Login extends Component {
  state = {
    register: false
  }
  onClick() {
    this.setState({ register: true })
  }
  render() {
    let content;
    if (!this.state.register) {
      content = (
        <Fragment><label htmlFor="username">Email</label>
          <input className="form-styling" type="email" name="email" placeholder="" />
          <label htmlFor="password">Password</label>
          <input className="form-styling" type="text" name="password" placeholder="" />
          <button type='submit' className="btn-signin">Sign in</button></Fragment>
      )
    }

    return (
      <div className='auth'>
        <div className='form'>
          <div className='logo'>
            <img className='logo' src={Logo} />
          </div>
          <div className='forms'>
            <h1>Welcome Back</h1>
            <span>Please Login using your email and password</span>
            <form className="form-signin" action="" method="post" name="form">
              {content}
            </form>
            <span className='register-span'>Or</span>
            <button type='submit' className="btn-signin-github btn-signin">Sign in with github</button>
            <span className='register-span btn' onClick={this.onClick.bind(this)}>New to Us? Register here.</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
