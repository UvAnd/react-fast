
import Header from '../header';
import RandomPlanet from '../random-planet';

import './app.css';
import { SwapiServiceProvider } from '../swapi-service-context';
import { swapiServiceHooks } from '../../hooks/swapi-service.hooks';
import PeoplePage from '../../pages/people-page';
import PlanetPage from '../../pages/planet-page';
import StarshipPage from '../../pages/starship-page';

const App = (): JSX.Element => {

  return (
    <SwapiServiceProvider value={swapiServiceHooks} >
      <div className='container'>
        <Header />
        <RandomPlanet updateInterval={10000} />
        <PeoplePage></PeoplePage>
        <PlanetPage></PlanetPage>
        <StarshipPage></StarshipPage>
      </div>
    </SwapiServiceProvider>
  );
};

export default App;