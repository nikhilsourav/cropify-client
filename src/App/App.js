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

/*******************************************************************
 *
 * App Component
 *
 *******************************************************************/
const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
