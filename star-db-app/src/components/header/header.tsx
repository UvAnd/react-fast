import { EMainRouterLink } from 'models/router/main-router-link';
import { Link } from 'react-router-dom';

import './header.css';

type TMenuLinks = { title: string; path: string };

const menuLinks: TMenuLinks[] = [
  { title: 'People', path: EMainRouterLink.People },
  {
    title: 'Planets',
    path: EMainRouterLink.Planets,
  },
  {
    title: 'Starships',
    path: EMainRouterLink.Starships,
  },
  {
    title: 'Login',
    path: EMainRouterLink.Login,
  },
  {
    title: 'Secret',
    path: EMainRouterLink.Secret,
  },
];

const Header = (): JSX.Element => {
  return (
    <div className="header d-flex">
      <h3>
        <Link to={EMainRouterLink.Root}>Star DB</Link>
      </h3>
      <ul className="d-flex">
        {menuLinks.map(({ title, path }) => {
          return (
            <li key={title}>
              <Link to={path}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Header;
