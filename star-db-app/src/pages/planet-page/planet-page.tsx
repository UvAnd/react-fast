import { useState } from 'react';
import { PlanetDetails, PlanetList } from 'components/sw-components';
import Row from 'pages/components/row';

const PlanetPage = (): JSX.Element => {
  const [selectedPlanet, setSelectedPlanet] = useState<number | null>(null);

  const onOpenPlanet = (id: number): void => {
    setSelectedPlanet(id);
  };

  return (
    <Row
      leftChild={<PlanetList onItemSelected={onOpenPlanet} />}
      rightChild={<PlanetDetails itemId={selectedPlanet} />}
    />
  );
};

export default PlanetPage;
