import { useEffect, useState, ReactNode } from 'react';
import { TItemDetails, TItemDetailsArray } from 'interfaces/interfaces';
import Spinner from 'components/spinner';
import './item-list.css';

interface IItemPerson {
  onItemSelected(id: number): void;
  getData(): Promise<TItemDetailsArray>;
  renderItem(list: TItemDetails): ReactNode;
}
interface IRenderItem {
  list: TItemDetailsArray;
  onItemSelected(id: number): void;
  renderItem(list: TItemDetails): ReactNode;
}

// TODO: Move to new component
const RenderItem = ({ list, onItemSelected, renderItem }: IRenderItem): JSX.Element => {
  return (
    <>
      {list.map((item: any) => {
        const { id } = item;
        const label = renderItem(item);
        return (
          <li key={id} className="list-group-item">
            <button type="button" onClick={() => onItemSelected(id)}>
              {label}
            </button>
          </li>
        );
      })}
    </>
  );
};

const ItemList = ({ onItemSelected, getData, renderItem }: IItemPerson): JSX.Element => {
  // TODO: Check other names and update to more generalized
  const [peopleList, setPeopleList] = useState<TItemDetailsArray>([]);

  useEffect(() => {
    getData().then((peopleItem) => {
      setPeopleList(peopleItem);
    });
  }, []);

  if (!peopleList.length) {
    return <Spinner />;
  }

  return (
    <ul className="item-list list-group">
      <RenderItem list={peopleList} renderItem={renderItem} onItemSelected={onItemSelected} />
    </ul>
  );
};

export default ItemList;
