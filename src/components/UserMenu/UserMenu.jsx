import { useSelector, useDispatch } from 'react-redux';
import { logoutUser, token } from 'redux/authSlice';
import { UserWrapperDiv, UserH2, Button } from './UserMenu.styled';

const UserMenu = () => {
  const userEmail = useSelector(state => state.auth.user.email);
  const tokenAuth = useSelector(state => state.auth.token);
  const dispatch = useDispatch();
  const onClickHandle = () => {
    token.set(tokenAuth);
    dispatch(logoutUser());
  };
  return (
    <UserWrapperDiv>
      <UserH2>{userEmail}</UserH2>
      <Button type="button" onClick={onClickHandle}>
        Logout
      </Button>
    </UserWrapperDiv>
  );
};
export default UserMenu;
