/*******************************************************************
 *
 * Import Utilities
 *
 *******************************************************************/
import { motion } from 'framer-motion';

/*******************************************************************
 *
 * Predict Component
 *
 *******************************************************************/
const Predict = () => {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.35 }}
    >
      <h1>Predict</h1>
    </motion.div>
  );
};

export default Predict;
