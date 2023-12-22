import { Links } from './Navigation.styled';
import { useAuth } from 'hooks';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Links to="/">Home</Links>
      {isLoggedIn && <Links to="/contacts">Contacts</Links>}
    </nav>
  );
};
