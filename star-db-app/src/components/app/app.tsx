import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Header from '../header';
import RandomPlanet from '../random-planet';

import './app.css';
import { SwapiServiceProvider } from '../swapi-service-context';
import { swapiServiceHooks } from '../../hooks/swapi-service.hooks';
import PeoplePage from '../../pages/people-page';
import PlanetPage from '../../pages/planet-page';
import StarshipPage from '../../pages/starship-page';
import StarshipSingleDetails from "../starship-single-details";
import LoginPage from "../../pages/login-page";
import SecretPage from "../../pages/secret-page";
import { useState } from "react";


const App = (): JSX.Element => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onLogin = () => {
    setIsLoggedIn((prev) => !prev);
  }

  return (
    <SwapiServiceProvider value={swapiServiceHooks} >
      <Router>
        <div className='container'>
          <Header />
          <RandomPlanet updateInterval={10000} />

          <Routes>
            <Route path="/" element={<h2>Welcome</h2>}></Route>
            <Route path="people/" element={<PeoplePage></PeoplePage>}>
              <Route path=":id" element={<PeoplePage></PeoplePage>}></Route>
            </Route>
            <Route path="planets" element={<PlanetPage></PlanetPage>}></Route>
            <Route path="starships" element={<StarshipPage></StarshipPage>}></Route>
            <Route path="starships/:id" element={<StarshipSingleDetails></StarshipSingleDetails>}></Route>

            <Route path="login" element={<LoginPage isLoggedIn={isLoggedIn} onLogin={onLogin}></LoginPage>}></Route>
            <Route path="secret" element={<SecretPage isLoggedIn={isLoggedIn}></SecretPage>}></Route>
            <Route path="*" element={<h1>Page not found</h1>}></Route>
          </Routes>
        </div>



      </Router>
    </SwapiServiceProvider>
  );
};

export default App;