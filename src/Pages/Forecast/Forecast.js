/************************************************************************************************
 *
 * Import Components
 *
 ************************************************************************************************/
import ForecastForm from '../../Components/ForecastForm/ForecastForm';

/************************************************************************************************
 *
 * Import Utilities
 *
 ************************************************************************************************/
import { Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import useStyles from './styles';

/************************************************************************************************
 *
 * Forecast Component
 *
 ************************************************************************************************/
const Forecast = () => {
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
        <Paper className={classes.ForecastForm} elevation={4}>
          <ForecastForm />
        </Paper>
      </Box>
    </motion.div>
  );
};

export default Forecast;
