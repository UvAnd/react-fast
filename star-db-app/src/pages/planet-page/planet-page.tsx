import { useState } from 'react';
import Row from '../components/row';
import { PlanetDetails, PlanetList } from '../../components/sw-components';

const PlanetPage = (): JSX.Element => {
  const [selectedPlanet, setSelectedPlanet] = useState<number | null>(null);

  const onOpenPlanet = (id: number) => {
    setSelectedPlanet(id);
  }

  return (
    <Row
      leftChild={
        <PlanetList onItemSelected={onOpenPlanet} ></PlanetList>
        }
      rightChild={
        <PlanetDetails itemId={selectedPlanet}></PlanetDetails>
      }
    />
  );
};

export default PlanetPage;
