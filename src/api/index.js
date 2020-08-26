import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'


export const fetchData = async ( country ) => {
  let changeableUrl = url

  if(country) {
    changeableUrl = `${url}/countries/${country}`
  }

  try {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl)
    return { confirmed, recovered, deaths, lastUpdate }
  } catch (error) {
    console.log(error)
  }
 }

 export const fetchDailyData = async () => {
   try {
    const { data } = await axios.get(`${url}/daily`)

    const modifiedData = data.map(( dailyData ) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }))
    return modifiedData
   } catch (error) {
    console.log(error)
   }
 }

 export const fetchCountries = async () => {
   try {
    const { data: { countries }} = await axios.get(`${url}/countries`)
    return countries.map((country) => country.name)
    // console.log(response)
   } catch (error) {
     console.log(error)
   }
 }

// 3: ANOTHER REWRITE TO DESTRUCTURE THE DATA PARAMETER'S ITEMS
// export const fetchData = async () => {
//   try {
//     const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url)

//     const modifiedData = {
//       confirmed,
//       recovered,
//       deaths,
//       lastUpdate,
//     }
//     return modifiedData
//   } catch (error) {

//   }
//  }

// 2: REWRITE API FETCH THAT ONLY GETS THE DATA PARAMETER OF THE API RESPONSE AND DESTRUCTURES THE ITEMS WE NEED FROM DATA
// export const fetchData = async () => {
//   try {
//     const { data } = await axios.get(url)

//     const modifiedData = {
//       confirmed: data.confirmed,
//       recovered: data.recovered,
//       deaths: data.deaths,
//       lastUpdate: data.lastUpdate,
//     }
//     return response
//   } catch (error) {

//   }
//  }

// 1: FIRST API FETCH THAT GETS ALL OF THE API'S RESPONSE PARAMETERS
// export const fetchData = async () => {
//   try {
//     const response = await axios.get(url)
//     return response
//     // console.log(response) replace with RETURN bc using export
//   } catch (error) {

//   }
// }