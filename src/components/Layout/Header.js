import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom';
import { logout } from '../Login/actions';


class Header extends React.Component{
	constructor(props){
		super(props)
		this.logoutUser = this.logoutUser.bind(this);
	}
	logoutUser(){
		this.props.dispatch(logout());
		this.props.history.replace({
			pathname: '/'
		});
	}
	render(){
		return(
			<header>
				<nav className="navbar navbar-default">
				  	<div className="container-fluid">
				    <div className="navbar-header">

				    </div>
				    <ul className="nav navbar-nav">
				      <li><a href="javascript:void(0)" onClick={this.logoutUser}>Logout</a></li>
				    </ul>
				  </div>
				</nav>
			</header>
			);
	}
}
export default withRouter(connect(null)(Header));
