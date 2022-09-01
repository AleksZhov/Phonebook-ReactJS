import { useSelector, useDispatch } from 'react-redux';
import { logoutUser, token } from 'redux/authSlice';
const UserMenu = () => {
  const userEmail = useSelector(state => state.auth.user.email);
  const tokenAuth = useSelector(state => state.auth.token);
  const dispatch = useDispatch();
  const onClickHandle = () => {
    token.set(tokenAuth);
    dispatch(logoutUser());
  };
  return (
    <div>
      <h2>{userEmail}</h2>
      <button type="button" onClick={onClickHandle}>
        Logout
      </button>
    </div>
  );
};
export default UserMenu;
