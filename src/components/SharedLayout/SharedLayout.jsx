import { Outlet } from 'react-router-dom';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { Container, Header, NavLinkSt } from './SharedLayout.styled';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <>
      <Container>
        <Header>
          <nav>
            <NavLinkSt to="/">Home</NavLinkSt>
            {isLoggedIn ? (
              <>
                <NavLinkSt to="/contacts">Contacts</NavLinkSt>
              </>
            ) : (
              <>
                <NavLinkSt to="/register">Registration</NavLinkSt>
                <NavLinkSt to="/login">Log in </NavLinkSt>
              </>
            )}
          </nav>
          {isLoggedIn && <UserMenu />}
        </Header>
      </Container>
      <main className="background">
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
};
