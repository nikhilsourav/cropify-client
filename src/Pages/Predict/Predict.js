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
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.35 }}
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
