import { useState } from 'react';
import { logInUser } from 'redux/authSlice';
import { useDispatch } from 'react-redux';
const LogIn = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState({
    email: '',
    password: '',
  });

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    setFormFields(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logInUser(formFields));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        {' '}
        Email address
        <input
          type="email"
          name="email"
          value={formFields.email}
          onChange={handleChange}
          title="Please enter valid email address, for example  'example@gmail.com'"
          min-length="6"
          required
        />
      </label>
      <label>
        {' '}
        Password
        <input
          type="password"
          name="password"
          value={formFields.password}
          onChange={handleChange}
          title="Please enter your password. Minimum length 8 symbols"
          min-length="8"
          required
        />
      </label>
      <button type="submit"> LogIn </button>
    </form>
  );
};

export default LogIn;
