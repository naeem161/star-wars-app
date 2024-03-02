import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../auth/LogoutButton";

const HomePage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  console.log({ user });

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <>
        {/* auth Logout button  */}
        <LogoutButton />
        <div>
          {/* user first name  */}
          <h2> Welcome {user.given_name}</h2>
        </div>
      </>
    )
  );
};

export default HomePage;
