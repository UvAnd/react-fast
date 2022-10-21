import {
  BrowserRouter as Router,
} from "react-router-dom";
import Header from '../header';
import RandomPlanet from '../random-planet';
import { SwapiServiceProvider } from '../swapi-service-context';
import { swapiServiceHooks } from '../../hooks/swapi-service.hooks';
import RoutesList from "../routes";
import './app.css';

const App = (): JSX.Element => {
  return (
    <SwapiServiceProvider value={swapiServiceHooks} >
      <Router>
        <div className='container'>
          <Header />
          <RandomPlanet updateInterval={10000} />
          <RoutesList></RoutesList>
        </div>
      </Router>
    </SwapiServiceProvider>
  );
};

export default App;