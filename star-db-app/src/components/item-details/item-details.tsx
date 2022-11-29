import { Children, cloneElement, ReactElement, ReactNode, useEffect, useState } from 'react';
import { TItemDetails } from 'interfaces/interfaces';
import Spinner from 'components/spinner';

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
  const [item, setItem] = useState<TItemDetails | null>(null);
  const [isLoadin, setIsLoadin] = useState<boolean>(false);

  const updatePerson = (): void => {
    const personId = selectedItem;
    if (!personId) {
      return;
    }

    setIsLoadin(true);

    getData(personId).then((itemDetails) => {
      setItem(itemDetails);
      setIsLoadin(false);
    });
  };

  useEffect(() => {
    updatePerson();
  }, [selectedItem]);

  if (!item) {
    return <span>Select a person from a list</span>;
  }

  if (isLoadin) {
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
            // TODO: find solution to cloneElement into TS
            return cloneElement(child as ReactElement<any>, { item });
          })}
        </ul>
      </div>
    </div>
  );
};

export default ItemDetails;
