/************************************************************************************************
 *
 * Improt Utilities
 *
 ************************************************************************************************/
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/************************************************************************************************
 *
 * Home Component
 *
 ************************************************************************************************/
const Home = () => {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.35 }}
    >
      <h1>Home</h1>
      <Link to='/crop-recommendation'>Crop Recommendation</Link>
      <br />
      <Link to='/yield-prediction'>Yield Prediction</Link>
      <br />
    </motion.div>
  );
};

export default Home;
