import { useState } from 'react';
import { registerNewUser } from 'redux/authSlice';
import { useDispatch } from 'react-redux';
const Register = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    setFormFields(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(registerNewUser(formFields));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={formFields.name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
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
      <button type="submit"> Register </button>
    </form>
  );
};

export default Register;
