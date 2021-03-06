/*******************************************************************
 *
 * Import components
 *
 *******************************************************************/
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import AnimatedRoutes from '../Components/AnimatedRoutes/AnimatedRoutes';

/*******************************************************************
 *
 * Import Utilities
 *
 *******************************************************************/
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';

/*******************************************************************
 *
 * App Component
 *
 *******************************************************************/
const theme = createTheme({
  palette: {
    primary: {
      main: '#357291',
    },
    secondary: {
      main: '#357291',
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
