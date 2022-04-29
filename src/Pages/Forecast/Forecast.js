/************************************************************************************************
 *
 * Improt Utilities
 *
 ************************************************************************************************/
import { motion } from 'framer-motion';
import useStyles from './styles';

/************************************************************************************************
 *
 * Home Component
 *
 ************************************************************************************************/
const Home = () => {
  /*
   * Material ui styles
   */
  const classes = useStyles();

  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.35 }}
    >
      <h1>Forecast</h1>
    </motion.div>
  );
};

export default Home;
