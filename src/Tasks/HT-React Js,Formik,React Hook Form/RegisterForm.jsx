import React from 'react';
import { useFormik } from 'formik';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

const RegisterForm = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required(<span className="error">Name is required</span>)
      .max(50, 'Name must not exceed 50 characters'),
    email: Yup.string()
      .required(<span className="error">Email is required</span>)
      .matches(/@code\.edu\.az$/, <span className="error">Email must end with "@code.edu.az"</span>),
    password: Yup.string()
      .required(<span className="error">Password is required</span>)
      .min(8, 'Password must be at least 8 characters long'),
    confirmPassword: Yup.string()
      .required(<span className="error">Confirm Password is required</span>)
      .oneOf([Yup.ref('password')], 'Passwords must match'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: validationSchema,
  });

  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          {...register('name')}
          value={formik.values.name}
          onChange={formik.handleChange}
          className={formik.errors.name && formik.touched.name ? 'error' : ''}
        />
        {formik.errors.name && formik.touched.name && (
          <div className="error-message">{formik.errors.name}</div>
        )}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          {...register('email')}
          value={formik.values.email}
          onChange={formik.handleChange}
          className={formik.errors.email && formik.touched.email ? 'error' : ''}
        />
        {formik.errors.email && formik.touched.email && (
          <div className="error-message">{formik.errors.email}</div>
        )}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          {...register('password')}
          value={formik.values.password}
          onChange={formik.handleChange}
          className={formik.errors.password && formik.touched.password ? 'error' : ''}
        />
        {formik.errors.password && formik.touched.password && (
          <div className="error-message">{formik.errors.password}</div>
        )}
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          {...register('confirmPassword')}
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          className={formik.errors.confirmPassword && formik.touched.confirmPassword ? 'error' : ''}
        />
        {formik.errors.confirmPassword && formik.touched.confirmPassword && (
          <div className="error-message">{formik.errors.confirmPassword}</div>
        )}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
