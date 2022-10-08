import React, { useEffect, useState } from 'react';
import { useGetAllPeople } from '../../hooks/swapi-service.hooks';
import { IPerson } from '../../interfaces/interfaces';
import Spinner from '../spinner';
import './item-list.css';

interface IItemPerson {
  onOpenPerson(id: number): void;
}
interface IRenderItem {
  list: IPerson[];
  onOpenPerson(id: number): void;
}

const ItemList = ({onOpenPerson}: IItemPerson): JSX.Element => {

  const [peopleList, setPeopleList] = useState<IPerson[]>([]);
  const getAllPeople = useGetAllPeople;

  useEffect(() => {
    getAllPeople()
    .then((peopleItem) => {
      setPeopleList(peopleItem);
    })
  }, []);

  if (!peopleList.length) {
    return <Spinner></Spinner>
  }

  return (
    <ul className="item-list list-group">
      <RenderItem list={peopleList} onOpenPerson={onOpenPerson} />
    </ul>
  );
}

const RenderItem = ({ list, onOpenPerson }: IRenderItem): JSX.Element => {
  return (
    <>
      {
        list.map(({id, name}: IPerson) => {
          return (
            <li key={id} className="list-group-item" onClick={() => onOpenPerson(id)}>
              {name}
            </li>
          );
        })
      }
    </>
  );
}

export default ItemList;
