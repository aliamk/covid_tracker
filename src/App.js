import React from 'react';

// import Cards from './components/Cards/Cards'
// import Chart from './components/Chart/Chart'
// import CountryPicker from './components/CountryPicker/CountryPicker'

import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchData } from './api' // to call the component

import coronaImage from './images/image.png'

class App extends React.Component {
  // Get the api data into <Cards />
  state = {
    data: {},
    country: '',
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country)
    // console.log(fetchedData)
    this.setState({ data : fetchedData, country: country }) 
  }

  async componentDidMount() {
    const fetchedData = await fetchData()
    this.setState({ data : fetchedData }) 

    // console.log(fetchedData)
  }

  render () {

    const { data, country } = this.state

    return (
      <div className={ styles.container } >
      <img className={ styles.image } src={ coronaImage } alt="COVID-19" />
        <Cards data={ data } />  {/*  {this.state.data }  */}
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={ data } country={ country }/>
      </div>
    )}
}

export default App;
