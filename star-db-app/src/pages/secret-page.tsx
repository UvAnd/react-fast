
import { Navigate } from 'react-router-dom';

interface ISecretPageProps {
  isLoggedIn: boolean;
}

const SecretPage = ({ isLoggedIn }: ISecretPageProps): JSX.Element => {

  if (isLoggedIn) {
    return (
      <div className="jumbotron text-center">
        <h3>This page is full of secrets!!!</h3>
      </div>
    );
  }

  return <>{<Navigate replace to="/login" />}</>;

};

export default SecretPage;
