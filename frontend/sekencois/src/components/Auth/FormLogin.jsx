import InputForm from '../elements/Input/index';
import Button from '../elements/button';
const FormLogin = () => {
  return (
    <form action="">
      <InputForm label="Email" type="email" placeholder="example@gmail.com" name="email" autoComplete="email" />
      <InputForm label="Password" type="password" placeholder="*********" name="password" autoComplete="current-password" />
      <Button className="p-2 font-semibold rounded-xl w-full bg-[#44C6BE] text-white">Masuk</Button>
    </form>
  );
};

export default FormLogin;
