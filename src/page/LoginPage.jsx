import React from "react";
import LoginButton from "../auth/LoginButton";

const LoginPage = () => {
  return (
    <div
      className="flex items-center justify-center bg-cover bg-center h-screen "
      style={{ backgroundImage: "url(/starWarImage.jpg)" }}
    >
      {/* Auth Login button  */}
      <LoginButton />
    </div>
  );
};

export default LoginPage;
