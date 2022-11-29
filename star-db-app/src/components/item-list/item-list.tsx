import { useEffect, useState, ReactNode } from 'react';
import { TItemDetails, TItemDetailsArray } from 'interfaces/interfaces';
import Spinner from 'components/spinner';
import './item-list.css';
import RenderItem from 'components/render-item';

interface IItemPerson {
  onItemSelected(id: number): void;
  getData(): Promise<TItemDetailsArray>;
  renderItem(list: TItemDetails): ReactNode;
}

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
