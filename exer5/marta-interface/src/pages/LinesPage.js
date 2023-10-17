// get static data
import stationData from '../server/stationData';
import trainData from '../server/trainData';
import TrainList from './TrainList.js'
import MartaButton from '../components/MartaButton.js'
import NavBar from '../components/NavBar.js'

export default function LinesPage(props) {
  // initialize some currColor state

  return (
    <div>
        <div></div> // header
        <div> //body
            <NavBar color={props.color} data={stationData} />
            <div>
                <div className="buttons">do
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