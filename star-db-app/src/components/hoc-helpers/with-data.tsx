// TODO: Check how we can use component like it

import React, { useEffect, useState } from 'react';

import Spinner from 'components/spinner';
import { TItemDetailsArray } from 'interfaces/interfaces';
import ItemList from 'components/item-list';

// TODO: remove any
interface IWithData {
  getData: any;
}

const WithData = ({ getData }: IWithData): any => {
  const [data, setData] = useState<TItemDetailsArray>([]);

  useEffect(() => {
    getData().then((data: TItemDetailsArray) => {
      setData(data);
    });
  }, []);

  if (!data.length) {
    return <Spinner />;
  }

  return (props: any) => {
    return <ItemList {...props} data={data} />;
  };
};

export default WithData;
