import React from 'react';

import ItemDetails from 'components/item-details';
import { Record } from 'components/record/record';
import { SwapiServiceConsumer } from 'components/swapi-service-context';

interface IItemDetailsProps {
  itemId: number | null;
}

const PlanetDetails = ({ itemId }: IItemDetailsProps): JSX.Element => {
  return (
    <SwapiServiceConsumer>
      {(swapiServiceUtils) => (
        <ItemDetails
          selectedItem={itemId}
          getData={swapiServiceUtils.getPlanet}
          getImgUrl={swapiServiceUtils.getPlanetImg}
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
