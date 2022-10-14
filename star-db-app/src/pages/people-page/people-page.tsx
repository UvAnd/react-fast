import { useState } from 'react';
import Row from '../components/row';
import { PersonDetails, PersonList } from '../../components/sw-components';

const PeoplePage = (): JSX.Element => {
  const [selectedPerson, setSelectedPerson] = useState<number | null>(null);

  const onOpenPerson = (id: number) => {
    setSelectedPerson(id);
  }

  return (
    <Row
      leftChild={
        <PersonList onItemSelected={onOpenPerson} ></PersonList>
        }
      rightChild={
        <PersonDetails itemId={selectedPerson}></PersonDetails>
      }
    />
  );
};

export default PeoplePage;
