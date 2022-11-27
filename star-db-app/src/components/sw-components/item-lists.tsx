import React from 'react';
import { useGetAllPeople, useGetAllStarships, useGetAllPlanets } from 'hooks/swapi-service.hooks';
import { IPerson, IPlanet } from 'interfaces/interfaces';
import ItemList from 'components/item-list';

interface IItemListProps {
  onItemSelected(id: number): void;
}

const PersonList = ({ onItemSelected }: IItemListProps): JSX.Element => {
  return (
    <ItemList
      onItemSelected={onItemSelected}
      getData={useGetAllPeople}
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
      getData={useGetAllPlanets}
      renderItem={({ id, name }: IPlanet) => `${name} (${id})`}
    />
  );
};

const StarshipList = ({ onItemSelected }: IItemListProps): JSX.Element => {
  return (
    <ItemList
      onItemSelected={onItemSelected}
      getData={useGetAllStarships}
      renderItem={({ name }: IPerson) => `${name}`}
    />
  );
};

export { PersonList, PlanetList, StarshipList };
