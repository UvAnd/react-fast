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
  const [itemList, setItemList] = useState<TItemDetailsArray>([]);

  useEffect(() => {
    getData().then((infoItem) => {
      setItemList(infoItem);
    });
  }, [getData]);

  if (!itemList.length) {
    return <Spinner />;
  }

  return (
    <ul className="item-list list-group">
      <RenderItem list={itemList} renderItem={renderItem} onItemSelected={onItemSelected} />
    </ul>
  );
};

export default ItemList;
