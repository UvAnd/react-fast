import { Navigate } from 'react-router-dom';

interface ILoginPageProps {
  isLoggedIn: boolean;
  onLogin(): void;
}

const LoginPage = ({ isLoggedIn, onLogin }: ILoginPageProps): JSX.Element => {
  if (isLoggedIn) {
    return <Navigate replace to="/" />;
  }

  return (
    <div className="jumbotron">
      <p>Login to see secret page!</p>
      <button type="button" className="btn btn-primary" onClick={onLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginPage;

// Info
// const shouldRedirect = true;

// const navigate = useNavigate();

// React.useEffect(() => {
//   if (shouldRedirect) {
//     navigate('/home');
//   }
// });
