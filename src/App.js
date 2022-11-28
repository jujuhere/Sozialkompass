import Home from "./Components/home"; 
import { Route, Routes } from 'react-router-dom'; 
import { MuiNavbar } from "./Components/Navbar";
import { CssBaseline } from '@mui/material'; 
import {ThemeProvider} from "@mui/material/styles";
import { Images } from "./Components/logohome"
import theme from "./Components/theme"; 


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline/>
      </ThemeProvider>

      <MuiNavbar /> 
      <Home /> 
      
    </div>
  );
}

export default App;
