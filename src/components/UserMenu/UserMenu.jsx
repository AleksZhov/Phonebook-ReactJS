import { useSelector, useDispatch } from 'react-redux';
import { logoutUser, token } from 'redux/authSlice';
import { UserWrapperDiv, UserH2, Button } from './UserMenu.styled';
import { useEffect } from 'react';
import { getUserData } from 'redux/authSlice';

const UserMenu = () => {
  const userName = useSelector(state => state.auth.user.name);
  const tokenAuth = useSelector(state => state.auth.token);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const onClickHandle = () => {
    token.set(tokenAuth);
    dispatch(logoutUser());
  };

  useEffect(() => {
    if (isLoggedIn) {
      token.set(tokenAuth);
      dispatch(getUserData());
    }
  }, [dispatch, isLoggedIn, tokenAuth]);
  return (
    <UserWrapperDiv>
      <UserH2>{userName ? `Hi,  ${userName}` : 'Loading'}</UserH2>
      <Button type="button" onClick={onClickHandle}>
        Logout
      </Button>
    </UserWrapperDiv>
  );
};
export default UserMenu;
