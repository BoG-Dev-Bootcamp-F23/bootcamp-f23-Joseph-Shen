// get static data
import stationData from '../server/stationData';
import trainData from '../server/trainData';

export default function LinesPage() {
  // initialize some currColor state

  return (
    <div>
        <div></div> // header
        <div>
            <div className="buttons">
                <MartaButton name="Arriving"/>
                <MartaButton name="Scheduled"/>
                <MartaButton name="Northbound"/>
                <MartaButton name="Southbound"/>
            </div>
        </div>
      // YOUR JSX CODE
      <NavBar color={currColor} data={stationData} />
      <TrainList color={currColor} data={trainData} />
      // YOUR JSX CODE
    </div>
  );
}