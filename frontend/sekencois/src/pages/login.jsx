import React from 'react';
import AuthLayout from '../components/Auth/AuthLayout';
import FormLogin from '../components/Auth/FormLogin';

const LoginPage = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <AuthLayout tittle="Login" type="login">
        <FormLogin />
      </AuthLayout>
    </div>
  );
};
export default LoginPage;
