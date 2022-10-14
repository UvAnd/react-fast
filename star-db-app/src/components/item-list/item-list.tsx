import { useEffect, useState } from 'react';
import { IPerson, TRenderChild } from '../../interfaces/interfaces';
import Spinner from '../spinner';
import './item-list.css';

interface IItemPerson {
  onItemSelected(id: number): void;
  getData(): Promise<IPerson[]>;
  renderItem(list: IPerson): TRenderChild;
}
interface IRenderItem {
  list: IPerson[];
  onItemSelected(id: number): void;
  renderItem(list: IPerson): TRenderChild;
}

const ItemList = ({onItemSelected, getData, renderItem}: IItemPerson): JSX.Element => {

  const [peopleList, setPeopleList] = useState<IPerson[]>([]);

  useEffect(() => {
    getData()
    .then((peopleItem) => {
      setPeopleList(peopleItem);
    })
  }, []);

  if (!peopleList.length) {
    return <Spinner></Spinner>
  }

  return (
    <ul className="item-list list-group">
      <RenderItem list={peopleList} renderItem={renderItem} onItemSelected={onItemSelected} />
    </ul>
  );
}


const RenderItem = ({ list, onItemSelected, renderItem }: IRenderItem): JSX.Element => {
  return (
    <>
      {
        list.map((item: any) => {
          const { id } = item;
          const label = renderItem(item);
          return (
            <li key={id} className="list-group-item" onClick={() => onItemSelected(id)}>
              {label}
            </li>
          );
        })
      }
    </>
  );
}

ItemList.defaulteProps = {
  onItemSelected: () => {}
}

export default ItemList;
