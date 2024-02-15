
import { useNavigate } from 'react-router-dom';



export const LoginHandler = () => {
    const navigate = useNavigate();

  // Handle login logic here
  console.log('Button clicked');
  navigate('/MainPetPage');

  // Navigate to another page
};


