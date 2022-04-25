/************************************************************************************************
 *
 * Import Components
 *
 ************************************************************************************************/
import RecommendationForm from '../../Components/RecommendationForm/RecommendationForm';

/************************************************************************************************
 *
 * Import Utilities
 *
 ************************************************************************************************/
import { motion } from 'framer-motion';

/************************************************************************************************
 *
 * Recommend Component
 *
 ************************************************************************************************/
const Recommend = () => {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.35 }}
    >
      <h1>Recommend</h1>
      <RecommendationForm />
    </motion.div>
  );
};

export default Recommend;
