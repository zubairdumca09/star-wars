import React, { Fragment } from 'react';
import { fetchData } from '../../api/api'
import { connect } from 'react-redux';


class PlanetDetail extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        term: '',
        data: {}
      }

    }

    render(){
      console.log('planet',this.props)
  		return(
          <section className="">
            <article style={{padding: '20px'}}>
              I will get data using planet Id and will show the planet detail here. This is a separate component
            </article>
          </section>
  			);
	}
}

export default PlanetDetail;
