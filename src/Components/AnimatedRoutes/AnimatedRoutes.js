/************************************************************************************************
 *
 * Import pages
 *
 ************************************************************************************************/
import Home from '../../Pages/Home/Home';
import Recommend from '../../Pages/Recommend/Recommend';
import Predict from '../../Pages/Predict/Predict';
import Error from '../../Pages/Error/Error';

/************************************************************************************************
 *
 * Import Utilities
 *
 ************************************************************************************************/
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

/************************************************************************************************
 *
 * AnimatedRoutes Component
 *
 ************************************************************************************************/
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/crop-recommendation' element={<Recommend />} />
        <Route path='/yield-prediction' element={<Predict />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
