import React from "react";

const HogwartsContext = React.createContext();
const { Provider, Consumer } = HogwartsContext;

const HogwartsProvider = props => {
  const { children } = props;
  const hogwartsData = {
    name: "Lindsay",
    house: "slytherin"
  };

  return (
    <Provider
      value={{
        hogwartsData
      }}
    >
      {children}
    </Provider>
  );
};


export { HogwartsProvider, Consumer as HogwartsConsumer, HogwartsContext };



