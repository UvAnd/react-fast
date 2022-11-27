import { useNavigate, useParams } from 'react-router-dom';
import { PersonDetails, PersonList } from 'components/sw-components';
import Row from 'pages/components/row';

const PeoplePage = (): JSX.Element => {
  const navigate = useNavigate();
  const historyPush = (itemId: number): void => navigate(itemId);
  const params = useParams();
  const idPeopleDetails = Number(params.id);

  return (
    <Row
      leftChild={<PersonList onItemSelected={historyPush} />}
      rightChild={<PersonDetails itemId={idPeopleDetails} />}
    />
  );
};

export default PeoplePage;
