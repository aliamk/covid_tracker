import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'


// Remove MODIFIEDDATA because we are creating and returning it right away and so no need to store the result in another object
export const fetchData = async () => {
  try {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url)

    return { confirmed, recovered, deaths, lastUpdate }
  } catch (error) {

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