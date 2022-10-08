
import Header from '../header';
import RandomPlanet from '../random-planet';

import './app.css';
import PeoplePage from '../../pages/people-page';

const App = (): JSX.Element => {


  return (
    <div className='container'>
      <Header />
      <RandomPlanet />

      <PeoplePage></PeoplePage>
      <PeoplePage></PeoplePage>
      <PeoplePage></PeoplePage>

    </div>
  );
};

export default App;