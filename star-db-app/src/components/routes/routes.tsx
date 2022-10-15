import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../../pages/login-page";
import PeoplePage from "../../pages/people-page";
import PlanetPage from "../../pages/planet-page";
import SecretPage from "../../pages/secret-page";
import StarshipPage from "../../pages/starship-page";
import StarshipSingleDetails from "../starship-single-details";

function RoutesList(): JSX.Element {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onLogin = () => {
    setIsLoggedIn((prev) => !prev);
  }

  return (
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
  );
}

export default RoutesList;