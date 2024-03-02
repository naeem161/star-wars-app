import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className="btn btn-primary rounded-3xl text-3xl font-medium  bg-primaryColor p-3 mt-36  w-48 hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out shadow-zinc-950"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
};

export default LoginButton;
