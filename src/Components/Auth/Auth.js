import React, { Component, Fragment } from 'react'
import Logo from '../../img/logo2.png';
class Login extends Component {
  state = {
    register: false,
    email: '',
    password: '',
    rePassword: '',
    name: '',
  }
  onClick() {
    this.setState({ register: !this.state.register, email: '', password: '' });
  }
  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
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
          <input className="form-styling" type="email" onChange={this.onChange.bind(this)} name="email" placeholder="" value={this.state.email} />
          <label htmlFor="password">Password</label>
          <input className="form-styling" type="password" onChange={this.onChange.bind(this)} name="password" placeholder="" value={this.state.password} />
          <button type='submit' className="btn-signin">Sign in</button>
        </Fragment>
      )
    } else {
      content = (
        <Fragment>
          <label htmlFor="name">Name</label>
          <input className="form-styling" type="name" onChange={this.onChange.bind(this)} name="name" placeholder="" value={this.state.name} />
          <label htmlFor="email">Email</label>
          <input className="form-styling" type="email" onChange={this.onChange.bind(this)} name="email" placeholder="" value={this.state.email} />
          <label htmlFor="password">Password</label>
          <input className="form-styling" type="password" onChange={this.onChange.bind(this)} name="password" placeholder="" value={this.state.password} />
          <label htmlFor="password">Re-enter password</label>
          <input className="form-styling" type="password" onChange={this.onChange.bind(this)} name="rePassword" placeholder="" value={this.state.rePassword} />
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
            <button type='submit' className="btn-signin-github btn-signin">{this.state.register ? 'Sign up with github' : 'Sign in with github'}</button>
            <span className='register-span btn' onClick={this.onClick.bind(this)}> {this.state.register ? 'Already have an account? Signin here' : 'New to Us? Register here.'}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
