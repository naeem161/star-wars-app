import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
import LoginPage from "./page/LoginPage";
import HomePage from "./page/HomePage";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isAuthenticated) {
    console.log({ user });
  }

  if (isAuthenticated) {
    return (
      <>
        <HomePage />
      </>
    );
  }

  return (
    <>
      <LoginPage />
    </>
  );
}

export default App;
