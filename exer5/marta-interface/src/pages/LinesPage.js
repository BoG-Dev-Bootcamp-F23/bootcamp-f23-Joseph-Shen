// get static data
import stationData from '../server/stationData';
import trainData from '../server/trainData';
import TrainList from './TrainList.js'
import MartaButton from '../components/MartaButton.js'
import NavBar from '../components/NavBar.js'
import "./LinesPage.css"

export default function LinesPage(props) {
  // initialize some currColor state

  return (
    <div>
        <div className = "head">{props.color}</div> 
        <div className = "body">
            <NavBar color={props.color} data={stationData} />
            <div className = "trains">
                <div className="buttons">
                    <MartaButton name="Arriving"/>
                    <MartaButton name="Scheduled"/>
                    <MartaButton name="Northbound"/>
                    <MartaButton name="Southbound"/>
                </div>

                <TrainList color={props.color} data={trainData} />
            </div>
        </div>
    </div>
  );
}