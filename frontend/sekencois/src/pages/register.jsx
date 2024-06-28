import React from 'react';
import AuthLayout from '../components/Auth/AuthLayout';
import FormRegister from '../components/Auth/FormRegist';

const RegisterPage = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <AuthLayout tittle="Register" type="register">
        <FormRegister />
      </AuthLayout>
    </div>
  );
};
export default RegisterPage;
