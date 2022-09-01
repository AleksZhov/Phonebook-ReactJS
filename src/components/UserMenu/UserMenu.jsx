import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from 'redux/authSlice';
const UserMenu = () => {
  const userEmail = useSelector(state => state.auth.user.email);
  const dispatch = useDispatch();
  const onClickHandle = () => {
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
