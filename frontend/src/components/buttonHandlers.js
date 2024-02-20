import { useNavigate } from 'react-router-dom';

export const LoginHandler = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Handle login logic here
    console.log('Button clicked');

    // Navigate to another page
    navigate('/MainPetPage');
  };

  return handleLogin;
};

