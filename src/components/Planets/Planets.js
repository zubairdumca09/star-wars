import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Input from '../Generic/Input';
import ListPlannet from './ListPlannet';
import { fetchData } from '../../api/api'
import { planetSuccess } from './actions'


class Planets extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        term: '',
        data: this.props.data,
      }
      this.data = [];
      this.getListPlanet = this.getListPlanet.bind(this);
      this.getAllData = this.getAllData.bind(this);
    }
    componentWillReceiveProps(nextProps){
      this.setState({
        data: nextProps.data,
      })
    }
    componentDidMount(){
      this.getAllData()
    }
    getAllData(){
      var self = this;
      for(let i = 0 ; i < 61 ; i++)
  			(function(i){
  				let url = `https://swapi.co/api/planets/${i+1}/`;
  				fetchData(url)
  					.then((response)=>{
  						let json = response.body;
  						self.data.push(json);
              if(self.data.length == 61){
                self.dispatch(planetSuccess(self.data))
              }
  					}).catch(()=>{
  	          console.error(`There is some Problem in fetching data`)
  	        });
  			})(i)
    }
    getListPlanet(e){
      let term = e.target.value;
      this.setState({term},()=>{
        let data = this.data.filter((obj)=>(obj.name.includes(term)))
        this.props.dispatch(planetSuccess(data))
      })
    }
    render(){
  		return(
          <section className="">
            <article style={{padding: '20px'}}>
              <Input
                value={this.state.term}
                placeholder="Search Planet"
                onChange={this.getListPlanet}
                name="search"
              />
              <ListPlannet
                data={this.props.data}
              />
            </article>
          </section>
  			);
	}
}
const mapStateToProps = (state)=>{
  return{
    data: state.planets
  }
}
export default connect(mapStateToProps)(Planets);
