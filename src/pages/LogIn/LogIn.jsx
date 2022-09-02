import { useState } from 'react';
import { logInUser } from 'redux/authSlice';
import { useDispatch } from 'react-redux';
import { Form, Label, Button } from './Login.styled';

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
    <section>
      <Form onSubmit={handleSubmit}>
        <Label>
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
        </Label>
        <Label>
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
        </Label>
        <Button type="submit"> LogIn </Button>
      </Form>
    </section>
  );
};

export default LogIn;
