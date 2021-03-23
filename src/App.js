import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeAnimation } from "./animations";
import Routes from "./routes/routes";
//loading component
import Loading from "./components/Loading";
//import Context
import { ModalContext } from "./GlobalContext";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, [setIsLoading]);

  return (
    <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
      <AnimatePresence exitBeforeEnter>
        {isLoading ? (
          <Loading />
        ) : (
          <motion.div
            initial="hidden"
            animate="show"
            exit="exit"
            variants={fadeAnimation}
          >
            <Routes />
          </motion.div>
        )}
      </AnimatePresence>
    </ModalContext.Provider>
  );
}

export default App;
