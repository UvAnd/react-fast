import React from 'react';

import ItemDetails from 'components/item-details';
import { Record } from 'components/record/record';
import { SwapiServiceConsumer } from 'components/swapi-service-context';

interface IItemDetailsProps {
  itemId: number | null;
}

const PersonDetails = ({ itemId }: IItemDetailsProps): JSX.Element => {
  // INFO: OR - const value = useContext(Context); - const Context = createContext('Default Value');

  return (
    <SwapiServiceConsumer>
      {(swapiServiceUtils) => (
        <ItemDetails
          selectedItem={itemId}
          getData={swapiServiceUtils.getPerson}
          getImgUrl={swapiServiceUtils.getPersonImg}
        >
          <Record field="gender" label="Gender" />
          <Record field="eyeColor" label="Eye Color" />
        </ItemDetails>
      )}
    </SwapiServiceConsumer>
  );
};

export default PersonDetails;
