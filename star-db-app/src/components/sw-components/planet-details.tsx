import React from 'react';

import ItemDetails from '../item-details';
import { Record } from '../item-details/item-details';
import { SwapiServiceConsumer } from '../swapi-service-context';

interface IItemDetailsProps {
  itemId: number | null;
}

const PlanetDetails = ({ itemId }: IItemDetailsProps): JSX.Element => {
  return (
    <SwapiServiceConsumer>
      {(swapiServiceHooks) => (
        <ItemDetails
          selectedItem={itemId}
          getData={swapiServiceHooks.useGetPlanet}
          getImgUrl={swapiServiceHooks.useGetPlanetImg}
        >
          <Record field="population" label="Population" />
          <Record field="rotationPeriod" label="Rotation Period" />
          <Record field="diameter" label="Diameter" />
        </ItemDetails>
      )}
    </SwapiServiceConsumer>
  );
};

export default PlanetDetails;
