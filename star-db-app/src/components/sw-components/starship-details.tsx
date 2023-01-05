import React from 'react';

import ItemDetails from 'components/item-details';
import { Record } from 'components/record/record';
import { SwapiServiceConsumer } from 'components/swapi-service-context';

interface IItemDetailsProps {
  itemId: number | null;
}

const StarshipDetails = ({ itemId }: IItemDetailsProps): JSX.Element => {
  return (
    <SwapiServiceConsumer>
      {(swapiServiceUtils) => (
        <ItemDetails
          selectedItem={itemId}
          getData={swapiServiceUtils.getStarship}
          getImgUrl={swapiServiceUtils.getStarshipImg}
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
