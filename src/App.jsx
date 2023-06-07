import Githubuser from "./components/Githubuser";
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: ['"Space Mono"', 'monospace'].join(','),
  },
  
});


function App() {



  return (
    <>
      <Githubuser/>
    </>
  )
}

export default App;
