/*******************************************************************
 *
 * Improt Utilities
 *
 *******************************************************************/
import { motion } from 'framer-motion';

/*******************************************************************
 *
 * Home Component
 *
 *******************************************************************/
const Home = () => {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.35 }}
    >
      <h1>Home</h1>
    </motion.div>
  );
};

export default Home;
