import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "../component/Navbar";
import SearchInput from "../component/SearchInput";
import People from "../component/People";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState();
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <>
        <Navbar />

        <SearchInput
          onInputChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          searchTerm={searchTerm}
        />

        <People />
      </>
    )
  );
};

export default HomePage;
