/************************************************************************************************
 *
 * Import Components
 *
 ************************************************************************************************/
import PredictionForm from '../../Components/PredictionForm/PredictionForm';

/************************************************************************************************
 *
 * Import Utilities
 *
 ************************************************************************************************/
import { motion } from 'framer-motion';
import { Box, Paper } from '@mui/material';
import useStyles from './styles';

/************************************************************************************************
 *
 * Predict Component
 *
 ************************************************************************************************/
const Predict = () => {
  /*
   * Material ui styles
   */
  const classes = useStyles();

  return (
    <motion.div
      initial={{ y: '-10%', opacity: 0 }}
      animate={{ y: 1, opacity: 1 }}
      exit={{ y: '10%', opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box className={classes.FormWrapper}>
        <Paper className={classes.RecForm} elevation={4}>
          <PredictionForm />
        </Paper>
      </Box>
    </motion.div>
  );
};

export default Predict;
