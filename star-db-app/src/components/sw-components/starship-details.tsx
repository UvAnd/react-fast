import React from 'react';

import ItemDetails from '../item-details';
import { Record } from '../item-details/item-details';
import { SwapiServiceConsumer } from '../swapi-service-context';

interface IItemDetailsProps {
  itemId: number | null;
}

const StarshipDetails = ({ itemId }: IItemDetailsProps) => {
  return (
    <SwapiServiceConsumer>
      {(swapiServiceHooks) => (
        <ItemDetails
          selectedItem={itemId}
          getData={swapiServiceHooks.useGetStarship}
          getImgUrl={swapiServiceHooks.useGetStarshipImg}>

          <Record field="model" label="Model" />
          <Record field="length" label="Length" />
          <Record field="costInCredits" label="Cost" />
        </ItemDetails>
      )}

    </SwapiServiceConsumer>
  );
};

export default StarshipDetails;
