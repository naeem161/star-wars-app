import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      className="btn btn-primary rounded-3xl text-xl font-medium text-slate-950 bg-primaryColor p-2 w-32 hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out shadow-zinc-950   "
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
