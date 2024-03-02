import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "../component/Navbar";
import SearchInput from "../component/SearchInput";
import People from "../component/People";
import FilmComponent from "../component/FilmComponent";
import SelectDropDown from "../UI/SelectDropDown";
import SpeciesComponent from "../component/SpeciesComponent";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { isAuthenticated, isLoading } = useAuth0();
  const [selectCatagory, setSelectCatagory] = React.useState("");

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <>
        {/* -------------------- Navbar ------------------ */}
        <Navbar />
        {/* -------------------- Seacrhbar & Dropdown ------------------ */}
        <div className="flex justify-between mb-4 p-4 align-middle">
          <div className="mb-2">
            <SearchInput
              onInputChange={(e) => {
                e.preventDefault();
                setSearchTerm(e.target.value);
              }}
              searchTerm={searchTerm}
            />
          </div>
          <div className="mt-7">
            <SelectDropDown
              selectedCatagory={selectCatagory}
              onSelectCatagory={setSelectCatagory}
            />
          </div>
        </div>
        {/* -------------------- End of Seacrhbar & Dropdown ------------------ */}

        {selectCatagory === "" && searchTerm === "" ? <People /> : ""}
        {selectCatagory === "films" && (
          <FilmComponent searchValue={searchTerm} />
        )}
        {selectCatagory === "species" && (
          <SpeciesComponent searchValue={searchTerm} />
        )}
      </>
    )
  );
};

export default HomePage;
