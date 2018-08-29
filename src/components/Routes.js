import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import Header from './Layout/Header';
import Main from './Main';
import { Row, Col } from 'reactstrap'
import Footer from './Layout/Footer';
import Login from './Login/Login'
import Planets from './Planets/Planets'
import PlanetDetail from './Planets/PlanetDetail'

class Routes extends React.Component{

	render(){
		return(
      <Switch>
        {!this.props.isLoggedIn && <Route path="/" component={Login}/>}
        {this.props.isLoggedIn && <Route path="/" component={Planets}/>}
        {this.props.isLoggedIn && <Route exact path="/planets" component={Planets}/>}
        {this.props.isLoggedIn && <Route exact path="/planets/:name" component={PlanetDetail}/>}
      </Switch>
			);
	}
}
export default Routes;
