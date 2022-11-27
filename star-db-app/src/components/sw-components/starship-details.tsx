import React from 'react';

import ItemDetails from 'components/item-details';
import { Record } from 'components/item-details/item-details';
import { SwapiServiceConsumer } from 'components/swapi-service-context';

interface IItemDetailsProps {
  itemId: number | null;
}

const StarshipDetails = ({ itemId }: IItemDetailsProps): JSX.Element => {
  return (
    <SwapiServiceConsumer>
      {(swapiServiceHooks) => (
        <ItemDetails
          selectedItem={itemId}
          getData={swapiServiceHooks.useGetStarship}
          getImgUrl={swapiServiceHooks.useGetStarshipImg}
        >
          <Record field="model" label="Model" />
          <Record field="length" label="Length" />
          <Record field="costInCredits" label="Cost" />
        </ItemDetails>
      )}
    </SwapiServiceConsumer>
  );
};

export default StarshipDetails;
