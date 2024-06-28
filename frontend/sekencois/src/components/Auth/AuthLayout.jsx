import { Link } from 'react-router-dom';

const AuthLayout = (props) => {
  const { children, tittle } = props;
  return (
    <div className="flex justify-center min-h-screen items-center p-8">
      {' '}
      {/* Menambahkan padding di sini */}
      <div className="w-full max-w p-12 bg-white border border-[#44C6BE] rounded shadow-md">
        <h1 className="text-3xl font-bold mb-2 text-[#44C6BE] text-center">{tittle}</h1>
        <p className="text-slate mb-8">Welcome, Silahkan {tittle} dulu</p>
        {children}
        <Navigation tittle={tittle}></Navigation>
      </div>
    </div>
  );
};

const Navigation = ({ tittle }) => {
  if (tittle === 'Login') {
    return (
      <p className="text-sm mt-4 text-center">
        Belum memiliki akun?{' '}
        <Link to="/register" className="text-[#44C6BE] font-bold">
          Sign Up
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-sm mt-4 text-center">
        Sudah memiliki akun?{' '}
        <Link to="/login" className="text-[#44C6BE] font-bold">
          Login
        </Link>
      </p>
    );
  }
};

export default AuthLayout;
