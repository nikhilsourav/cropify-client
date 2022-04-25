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
import { ThemeProvider, createTheme, colors } from '@mui/material';

/*******************************************************************
 *
 * App Component
 *
 *******************************************************************/
const theme = createTheme({
  palette: {
    primary: {
      main: colors.teal[500],
    },
    secondary: {
      main: colors.pink[500],
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
