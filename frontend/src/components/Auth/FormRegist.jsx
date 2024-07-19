import InputForm from '../elements/Input/Index';
import Button from '../elements/button';

const FormRegister = () => {
  return (
    <form action="">
      <InputForm label="Fullname" type="text" placeholder="John Doe" name="fullname" autoComplete="name" />
      <InputForm label="Email" type="email" placeholder="example@gmail.com" name="email" autoComplete="email" />
      <InputForm label="Password" type="password" placeholder="*********" name="password" autoComplete="new-password" />
      <InputForm label="Confirm Password" type="password" placeholder="*********" name="confirm-password" autoComplete="new-password" />
      <Button className="p-2 font-semibold rounded-xl w-full bg-[#44C6BE] text-white">Daftar</Button>
    </form>
  );
};

export default FormRegister;
