import React, { Component } from 'react'
import './App.css';
import Cards from './components/card/card';
import Chart from './components/chart/chart';
import Country from './components/country/country';
import styles from './App.module.css';
import {FetchData} from './axios';
import covid from './covid.png';
class App extends Component {
  state={
    data:{},
    country:'',

  }
 async componentDidMount(){
    const Fetchdata = await FetchData();
    this.setState({data:Fetchdata})
  }
  handlecountrychange= async (country)=>{
   //console.log(country);
    const fetchdata = await FetchData(country);
    //console.log(fetchdata);
    this.setState({data:fetchdata,country:country});
  }
  render(){
    const {data}=this.state;
  return (
    <div className={styles.container}>
      <img className={styles.image} src={covid} />
      <Cards data={data}/>
      <Country handlecountrychange={this.handlecountrychange}/>
      <Chart data={data} country={this.state.country}/>
    </div>
  );
}
}

export default App;
