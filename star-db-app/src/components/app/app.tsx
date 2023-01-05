import { BrowserRouter as Router } from 'react-router-dom';
import Header from 'components/header';
import RandomPlanet from 'components/random-planet';
import { SwapiServiceProvider } from 'components/swapi-service-context';
import { swapiServiceUtils } from 'utils/swapi-service.utils';
import RoutesList from 'components/routes';
import './app.css';

const App = (): JSX.Element => {
  return (
    <SwapiServiceProvider value={swapiServiceUtils}>
      <Router>
        <div className="container">
          <Header />
          <RandomPlanet updateInterval={10000} />
          <RoutesList />
        </div>
      </Router>
    </SwapiServiceProvider>
  );
};

export default App;
