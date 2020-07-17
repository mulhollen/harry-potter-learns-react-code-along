import React from 'react';
import './App.css';
import MyCommonRoom from "./MyCommonRoom"
import { HogwartsProvider } from "./HogwartsContext/";


function App() {
  return (
    <HogwartsProvider>
      <MyCommonRoom />
    </HogwartsProvider>
  );
}

export default App;
