import React, { useState } from "react";
import Routes from "./routes/routes";
//import Context
import { ModalContext } from "./GlobalContext";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
      <Routes />
    </ModalContext.Provider>
  );
}

export default App;
