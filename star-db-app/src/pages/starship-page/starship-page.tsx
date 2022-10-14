import { useState } from 'react';
import Row from '../components/row';
import { StarshipDetails, StarshipList } from '../../components/sw-components';

const PeoplePage = (): JSX.Element => {
  const [selectedStarship, setSelectedStarship] = useState<number | null>(null);

  const onOpenStarship = (id: number) => {
    setSelectedStarship(id);
  }

  return (
    <Row
      leftChild={
        <StarshipList onItemSelected={onOpenStarship} ></StarshipList>
        }
      rightChild={
        <StarshipDetails itemId={selectedStarship}></StarshipDetails>
      }
    />
  );
};

export default PeoplePage;
