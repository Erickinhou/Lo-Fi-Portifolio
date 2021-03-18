import React, { useContext } from "react";
import { ContactButton } from "./style";
//import global state
import { ModalContext } from "../../GlobalContext";

const Index = () => {
  const { setIsModalOpen } = useContext(ModalContext);
  return (
    <ContactButton
      onClick={() => setIsModalOpen(true)}
      whileHover={{
        scale: 1.1
      }}
      whileTap={{ scale: 0.9 }}
    >
      Contact Me
    </ContactButton>
  );
};

export default Index;
