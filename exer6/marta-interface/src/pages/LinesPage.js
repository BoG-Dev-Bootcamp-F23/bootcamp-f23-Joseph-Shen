// get static data
// import stationData from '../server/stationData';
// import trainData from '../server/trainData';
import TrainList from './TrainList.js'
import MartaButton from '../components/MartaButton.js'
import NavBar from '../components/NavBar.js'
import "./LinesPage.css"
import { useState, useEffect } from 'react';


const arrivalAPI = 'http://13.59.196.129:3001/arrivals/';
const stationAPI = 'http://13.59.196.129:3001/stations/';

export default function LinesPage() {

  const [currColor, setCurrColor] = useState("GOLD");
  const [trainData, setTrainData] = useState(null);
  const [stationData, setStationData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeStation, setActiveStation] = useState("All Stations");
  const [activeTrain, setActiveTrain] = useState("All Trains");

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      const trainResponse = await fetch(arrivalAPI + currColor)
      const trainData = await trainResponse.json()
      const stationResponse = await fetch(stationAPI + currColor)
      const stationData = await stationResponse.json()
      setTrainData(trainData)
      setStationData(stationData)
      console.log(trainData)
      console.log(stationData)
      setLoading(false)
    }
    fetchData()
  }, [currColor])

  return (
    <div>
        <div className = "lines">
          <button className = "gold" onClick = {() => {
            setCurrColor("GOLD")
          }}> </button>
          <button className = "red" onClick = {() => {
            setCurrColor("RED")
          }}> </button>
          <button className = "blue" onClick = {() => {
            setCurrColor("BLUE")
          }}> </button>
          <button className = "green" onClick = {() => {
            setCurrColor("GREEN")
          }}> </button>
        </div>
        <div className = "head">{currColor}</div> 

        {loading ?
          <div className = "loading">
            <h1> Loading ... </h1>
          </div>
          :
          <div className = "body">
              <NavBar color={currColor} data={stationData} />
              <div className = "trains">
                  <div className="buttons">
                      <MartaButton name="Arriving"/>
                      <MartaButton name="Scheduled"/>
                      <MartaButton name="Northbound"/>
                      <MartaButton name="Southbound"/>
                  </div>

                  {console.log(activeStation)}
                  <TrainList color={currColor} data={trainData} stations = {activeStation}/>
              </div>
          </div>
        } 
    </div>
  );
}



