import { useNavigate } from 'react-router-dom';

export const LoginHandler = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
  
    console.log('Button clicked');


    navigate('/MainPetPage');
  };

  return handleLogin;
};

