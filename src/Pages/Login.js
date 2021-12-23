import Card from '../Components/UI/Card';
import InputField from '../Components/UI/InputField';
import { Link } from 'react-router-dom';

const Login = () => {
  const emailChangeHandler = () => {};
  const passwordChangeHandler = () => {};
  return (
    <div className="h-screen w-screen flex justify-center items-center text-white sm:px-4">
      <Card className="bg-grayOne p-8 rounded-md shadow-sm text-center md:w-[415px] sm:w-full">
        <h1 className="text-2xl font-whiteney font-semibold">Welcome back!</h1>
        <p className="font-whiteney text-greyple">
          We're so excited to see you again.
        </p>
        <form className="mt-4">
          <InputField
            type="text"
            id="email"
            label="Email"
            onChange={emailChangeHandler}
          />
          <InputField
            type="password"
            id="password"
            label="Password"
            onChange={passwordChangeHandler}
          />
          <p className="text-blurple text-left">Forgot your password?</p>
          <button
            type="button"
            className="h-[40px] min-w-full p-3 bg-blurple text-white font-semibold mt-6 flex justify-center items-center rounded-sm hover:bg-blurpleDark transition-colors"
          >
            Login
          </button>
          <p className="text-left text-greyple">
            Need an account?{' '}
            <Link to="/signup" className="text-blurple hover:underline">
              Register
            </Link>
          </p>
        </form>
      </Card>
    </div>
  );
};

export default Login;
