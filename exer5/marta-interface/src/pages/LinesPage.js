// get static data
import stationData from '../server/stationData';
import trainData from '../server/trainData';

export default function LinesPage() {
  // initialize some currColor state

  return (
    <div>
        <div></div> // header
        <div> //body
            <NavBar color={currColor} data={stationData} />
            <div>
                <div className="buttons">do
                    <MartaButton name="Arriving"/>
                    <MartaButton name="Scheduled"/>
                    <MartaButton name="Northbound"/>
                    <MartaButton name="Southbound"/>
                </div>

                <TrainList color={currColor} data={trainData} />
            </div>
        </div>
    </div>
  );
}