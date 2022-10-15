import { useState } from 'react';
import Row from '../components/row';
import { PersonDetails, PersonList } from '../../components/sw-components';
import { useNavigate, useParams } from 'react-router-dom';

const PeoplePage = (): JSX.Element => {

  const navigate = useNavigate();
  const historyPush = (itemId: number) =>  navigate(itemId);
  const params = useParams();
  const idPeopleDetails =  Number(params.id);

  return (
    <Row
      leftChild={
        <PersonList onItemSelected={historyPush} ></PersonList>
        }
      rightChild={
        <PersonDetails itemId={idPeopleDetails}></PersonDetails>
      }
    />
  );
};

export default PeoplePage;
