import React from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/auth/operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    dispatch(registerUser(formData));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        <span>Username</span>
        <input type="text" name="name" />
      </label>
      <label className={css.label}>
        <span>Email</span>
        <input type="email" name="email" />
      </label>
      <label className={css.label}>
        <span>Password</span>
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
