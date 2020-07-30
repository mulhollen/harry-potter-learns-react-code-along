import React from "react";

const HogwartsContext = React.createContext();
const { Provider, Consumer } = HogwartsContext;

const HogwartsProvider = props => {
  const { children } = props;
  const hogwartsData = {
      name: 'Melissa',
      house: 'Ravenclaw'
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



