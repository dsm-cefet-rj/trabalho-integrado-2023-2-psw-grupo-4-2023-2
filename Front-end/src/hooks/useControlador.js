import { useContext } from "react";
import { ControladorContext } from './../contexts/Controlador';

export function useControlador() {
    const context = useContext(ControladorContext);
    if (!context) {
      throw new Error("useControlador deve ser usado dentro de um Controlador Provider.");
    }
    return context;
  }
  