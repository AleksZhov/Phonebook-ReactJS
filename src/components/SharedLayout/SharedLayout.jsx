import { Outlet, NavLink } from 'react-router-dom';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';


export const SharedLayout = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <header>
      <nav>
        {isLoggedIn ? (
          <>
            <NavLink to="/contacts">Contacts</NavLink>
          </>
        ) : (
          <>
            <NavLink to="/register">Registration</NavLink>
            <NavLink to="/login">Log in </NavLink>
          </>
        )}
      </nav>
      {isLoggedIn && <UserMenu />}
      <Outlet />
    </header>
  );
};
