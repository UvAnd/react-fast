import React from 'react';
import { getAllPeople, getAllStarships, getAllPlanets } from 'utils/swapi-service.utils';
import { IPerson, IPlanet } from 'interfaces/interfaces';
import ItemList from 'components/item-list';

interface IItemListProps {
  onItemSelected(id: number): void;
}

const PersonList = ({ onItemSelected }: IItemListProps): JSX.Element => {
  return (
    <ItemList
      onItemSelected={onItemSelected}
      getData={getAllPeople}
      // How we can use
      // <>{(data: any) => (`${data.name} (${data.gender}, ${data.birthYear})`)}</> like child
      // Function as Child Component
      renderItem={({ name, gender, id }: IPerson) => `${name} (${gender}, ${id})`}
    />
  );
};

const PlanetList = ({ onItemSelected }: IItemListProps): JSX.Element => {
  return (
    <ItemList
      onItemSelected={onItemSelected}
      getData={getAllPlanets}
      renderItem={({ id, name }: IPlanet) => `${name} (${id})`}
    />
  );
};

const StarshipList = ({ onItemSelected }: IItemListProps): JSX.Element => {
  return (
    <ItemList
      onItemSelected={onItemSelected}
      getData={getAllStarships}
      renderItem={({ name }: IPerson) => `${name}`}
    />
  );
};

export { PersonList, PlanetList, StarshipList };
