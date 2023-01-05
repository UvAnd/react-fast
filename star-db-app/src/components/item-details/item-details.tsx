import { Children, cloneElement, ReactElement, ReactNode } from 'react';
import { TItemDetails } from 'interfaces/interfaces';
import Spinner from 'components/spinner';
import useGetItemDetails from 'components/item-details/item-details.hooks';

import './item-details.css';

interface IItemDetailsProps {
  selectedItem: number | null;
  getData(itemId: number): Promise<TItemDetails>;
  getImgUrl(id: number): string;
  children?: ReactNode;
}

const ItemDetails = ({
  selectedItem,
  getData,
  getImgUrl,
  children,
}: IItemDetailsProps): JSX.Element => {
  const { item, isLoading } = useGetItemDetails({ selectedItem, getData });

  if (!item) {
    return <span>Select a person from a list</span>;
  }

  if (isLoading) {
    return <Spinner />;
  }

  const { id, name } = item;

  return (
    <div className="item-details card">
      <img className="item-image" src={getImgUrl(id)} alt="" />

      <div className="card-body">
        <h4>{name}</h4>
        <h6>{selectedItem}</h6>
        <ul className="list-group list-group-flush">
          {Children.map(children, (child) => {
            return cloneElement(child as ReactElement, { item });
          })}
        </ul>
      </div>
    </div>
  );
};

export default ItemDetails;
