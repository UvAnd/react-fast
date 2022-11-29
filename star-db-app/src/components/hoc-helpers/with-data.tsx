// INFO: Check how we can use component like it (HOC)

import React, { useEffect, useState } from 'react';

import Spinner from 'components/spinner';
import { TItemDetailsArray } from 'interfaces/interfaces';
import ItemList from 'components/item-list';

interface IWithData {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getData: any;
}

const WithData = ({ getData }: IWithData): any => {
  const [data, setData] = useState<TItemDetailsArray>([]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    getData().then((data: TItemDetailsArray) => {
      setData(data);
    });
  }, []);

  if (!data.length) {
    return <Spinner />;
  }

  return (props: any) => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <ItemList {...props} data={data} />;
  };
};

export default WithData;
