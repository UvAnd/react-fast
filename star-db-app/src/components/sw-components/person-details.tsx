import React from 'react';

import ItemDetails from '../item-details';
import { Record } from '../item-details/item-details';
import { SwapiServiceConsumer } from '../swapi-service-context';

interface IItemDetailsProps {
  itemId: number | null;
}

const PersonDetails = ({ itemId }: IItemDetailsProps) => {
  // OR - const value = useContext(Context); - const Context = createContext('Default Value');

  return (
    <SwapiServiceConsumer>
      {(swapiServiceHooks) => (
        <ItemDetails
          selectedItem={itemId}
          getData={swapiServiceHooks.useGetPerson}
          getImgUrl={swapiServiceHooks.useGetPersonImg} >

          <Record field="gender" label="Gender" />
          <Record field="eyeColor" label="Eye Color" />
        </ItemDetails>
      )}

    </SwapiServiceConsumer>
  );
};

export default PersonDetails;
