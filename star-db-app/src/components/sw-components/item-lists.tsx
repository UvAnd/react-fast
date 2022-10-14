import React from 'react';
import { useGetAllPeople, useGetAllStarships, useGetAllPlanets } from '../../hooks/swapi-service.hooks';
import { IPerson } from '../../interfaces/interfaces';
import ItemList from '../item-list';

// TODO: check for what
// const withChildFunction = (Wrapped, fn) => {
//   return (props) => {
//     return (
//       <Wrapped {...props}>
//         {fn}
//       </Wrapped>
//     )
//   };
// };

// const renderName = ({ name }) => <span>{name}</span>;
// const renderModelAndName = ({ model, name}) => <span>{name} ({model})</span>;

interface IItemListProps {
  onItemSelected(id: number): void;
}

const PersonList = ({ onItemSelected }: IItemListProps) => {

  return (
    <ItemList
      onItemSelected={onItemSelected}
      getData={useGetAllPeople}
      // How we can use <>{(data: any) => (`${data.name} (${data.gender}, ${data.birthYear})`)}</> like child
      // Function as Child Component
      renderItem={({name, gender, birthYear}: IPerson) => `${name} (${gender}, ${birthYear})`}
    />
  );
};

const PlanetList = ({ onItemSelected }: IItemListProps) => {

  return (
    <ItemList
      onItemSelected={onItemSelected}
      getData={useGetAllPlanets}
      renderItem={({name, gender, birthYear}: IPerson) => `${name} (${gender}, ${birthYear})`}
    />
  );
};

const StarshipList = ({ onItemSelected }: IItemListProps) => {

  return (
    <ItemList
      onItemSelected={onItemSelected}
      getData={useGetAllStarships}
      renderItem={({name}: IPerson) => `${name}`}
    />
  );
};

export {
  PersonList,
  PlanetList,
  StarshipList
};
