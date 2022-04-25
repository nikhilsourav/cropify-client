/*******************************************************************
 *
 * Import Utilities
 *
 *******************************************************************/
import { motion } from 'framer-motion';

/*******************************************************************
 *
 * Error Component
 *
 *******************************************************************/
const Error = () => {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.35 }}
    >
      <h1>Error</h1>
    </motion.div>
  );
};

export default Error;
