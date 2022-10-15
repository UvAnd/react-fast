
import { useNavigate } from "react-router-dom";
import { StarshipList } from '../../components/sw-components';

const StarshipPage = (): JSX.Element => {

  let navigate = useNavigate();

  const historyPush = (itemId: number) =>  navigate(itemId);

  return (
    <StarshipList onItemSelected={historyPush} ></StarshipList>
  );
};

export default StarshipPage;

// INFO: We can use withRouter
// const ShowTheLocationWithRouter = withRouter(ShowTheLocation);
