import { createContext, useState } from "react";

export const ControladorContext = createContext({
  openModal: false,
  setOpenModal: () => {},
  tipoModal: "",
  setTipoModal: () => {},
});

const Controlador = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [tipoModal, setTipoModal] = useState("");
  return (
    <ControladorContext.Provider
      value={{
        openModal,
        setOpenModal,
        tipoModal,
        setTipoModal,
      }}
    >
      {children}
    </ControladorContext.Provider>
  );
};

export default Controlador;
