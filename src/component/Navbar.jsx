import React from "react";
import LogoutButton from "../auth/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { user } = useAuth0();
  return (
    <nav className="bg-primaryDark p-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <img
          src="/starWarLogo.jpg"
          height={100}
          width={100}
          alt="company logo"
          className="block" // Set display to block
        />
        <div>
          <h2> Welcome {user.given_name}</h2>
        </div>
        <div>
          <LogoutButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
