import { TItemDetails } from 'interfaces/interfaces';
import { useEffect, useState } from 'react';

interface IGetItemDetailsProps {
  selectedItem: number | null;
  getData(itemId: number): Promise<TItemDetails>;
}
interface IGetItemDetails {
  isLoading: boolean;
  item: TItemDetails | null;
}

const useGetItemDetails = ({ selectedItem, getData }: IGetItemDetailsProps): IGetItemDetails => {
  const [item, setItem] = useState<TItemDetails | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const updatePerson = (): void => {
    if (!selectedItem) {
      return;
    }

    setIsLoading(true);

    getData(selectedItem).then((itemDetails) => {
      setItem(itemDetails);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    updatePerson();
  }, [selectedItem]);

  return { item, isLoading };
};

export default useGetItemDetails;
