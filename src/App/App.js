/*******************************************************************
 *
 * Import pages
 *
 *******************************************************************/
import Home from '../Pages/Home/Home';
import Recommend from '../Pages/Recommend/Recommend';
import Predict from '../Pages/Predict/Predict';
import Error from '../Pages/Error/Error';

/*******************************************************************
 *
 * Import components
 *
 *******************************************************************/
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

/*******************************************************************
 *
 * Import Utilities
 *
 *******************************************************************/
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/*******************************************************************
 *
 * App Component
 *
 *******************************************************************/
const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/crop-recommendation' element={<Recommend />} />
          <Route path='/yield-prediction' element={<Predict />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
