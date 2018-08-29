import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Input from '../Generic/Input';
import { getUserDetails } from './actions'


class Login extends React.Component{

    constructor(props){
      super(props)
      this.onChange = this.onChange.bind(this);
      this.login = this.login.bind(this);
      this.state = {
        username: '',
        password: ''
      }
    }
    onChange(e){
      let name = e.target.name;
      let value = e.target.value;
      this.setState({[name]:value});
    }
    login(){
      this.props.dispatch(getUserDetails(this.state));
    }
    render(){
  		return(
          <section className="login-box">
            <article>
                <Input
                  label="Username"
                  type='text'
                  name='username'
                  value={this.state.username}
                  onChange={this.onChange}
                />
                <Input
                  label="Password"
                  type='password'
                  name='password'
                  value={this.state.password}
                  onChange={this.onChange}
                />
                <button className="btn btn-primary" style={{width:'100%'}} onClick={this.login}>Login</button>

            </article>
          </section>
  			);
	}
}
export default connect(null)(Login);
