import { useNavigate } from 'react-router-dom';
import { StarshipList } from 'components/sw-components';

const StarshipPage = (): JSX.Element => {
  const navigate = useNavigate();

  const historyPush = (itemId: number): void => navigate(itemId);

  return <StarshipList onItemSelected={historyPush} />;
};

export default StarshipPage;

// INFO: We can use withRouter
// const ShowTheLocationWithRouter = withRouter(ShowTheLocation);
