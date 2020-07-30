import React, { useContext } from "react";
import { HogwartsContext } from "../HogwartsContext";

const MyCommonRoom = () => {
  const { hogwartsData } = useContext(HogwartsContext);
  console.log("hogwartsData", hogwartsData);
  return (
    <main className="commonroom">
        <h1>Hello, {hogwartsData.name}</h1>
    </main>
  );
};

export default MyCommonRoom;
