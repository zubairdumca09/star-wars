import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


class ListPlannet extends React.Component{
	render(){
    console.log(this.props)
		return(
        <ul>
          {this.props.data &&
            this.props.data.map((obj,index)=>{
              return <li key={index}><Link to={`planets/${obj.name}`}>{obj.name}</Link></li>
            })
          }
        </ul>
			);
	}
}
export default ListPlannet;
