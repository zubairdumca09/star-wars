import React, {Fragment} from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import Header from './Layout/Header';
import Planets from './Planets/Planets'
import PlanetDetail from './Planets/PlanetDetail'
class Main extends React.Component{
	render(){
		return(
			<Switch>
				<Route exact path="/" render={()=><Redirect to={'/planets'}/>}/>
				<Route exact path="/planets" component={Planets}/>
				<Route path="/planets/:name" component={PlanetDetail}/>
			</Switch>
			);
	}
}
export default Main;
