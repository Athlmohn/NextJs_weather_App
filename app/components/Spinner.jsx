import React from "react";
import { MutatingDots } from "react-loader-spinner";

function Spinner() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <MutatingDots
        height="100"
        width="100"
        color="red"
        secondaryColor="red"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

export default Spinner;
