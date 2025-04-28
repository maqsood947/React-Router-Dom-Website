import { useContext } from "react";
import React from "react";
import DataCard from "../../components/Cards/dataCard";
import cContext from "../../components/context/Context";

function Countries() {
  const { country, loader } = useContext(cContext); // Use context correctly

  console.log(country);

  return (
    <div className="flex justify-center items-center my-5 ">
      {loader ? (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="grid lg:grid-cols-5 sm:grid-cols-2 md:grid-cols-3 justify-center items-center gap-6">
          {country?.map((item) => (
            <div key={item?.id} className="">
              <DataCard index={item?.id} myData={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Countries;
