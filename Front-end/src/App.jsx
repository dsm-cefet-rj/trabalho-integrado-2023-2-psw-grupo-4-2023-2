import { ThemeProvider } from "@mui/material";
import theme from "./themes/default";
import { Router } from "./Router";

import { Autenticacao } from "./contexts/Autenticacao";
import Livros from "./contexts/Livros";
import Usuario from "./contexts/Usuario";
import Controlador from "./contexts/Controlador";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Controlador>
          <Livros>
            <Usuario>
              <Autenticacao>
                <Router />
              </Autenticacao>
            </Usuario>
          </Livros>
        </Controlador>
      </ThemeProvider>
    </div>
  );
}

export default App;
