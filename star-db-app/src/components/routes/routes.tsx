import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from 'pages/login-page';
import PeoplePage from 'pages/people-page';
import PlanetPage from 'pages/planet-page';
import SecretPage from 'pages/secret-page';
import StarshipPage from 'pages/starship-page';
import StarshipSingleDetails from 'components/starship-single-details';
import { EMainRouterLink } from 'models/router/main-router-link';

function RoutesList(): JSX.Element {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onLogin = (): void => {
    setIsLoggedIn((prev) => !prev);
  };

  return (
    <Routes>
      <Route path={EMainRouterLink.Root} element={<h2>Welcome</h2>} />
      <Route path={EMainRouterLink.People} element={<PeoplePage />}>
        <Route path={EMainRouterLink.PageID} element={<PeoplePage />} />
      </Route>
      <Route path="planets" element={<PlanetPage />} />
      <Route path="starships" element={<StarshipPage />} />
      <Route path="starships/:id" element={<StarshipSingleDetails />} />
      <Route path="login" element={<LoginPage isLoggedIn={isLoggedIn} onLogin={onLogin} />} />
      <Route path="secret" element={<SecretPage isLoggedIn={isLoggedIn} />} />
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  );
}

export default RoutesList;
