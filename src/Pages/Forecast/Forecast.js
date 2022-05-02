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
      initial={{ y: '-10%', opacity: 0 }}
      animate={{ y: 1, opacity: 1 }}
      exit={{ y: '10%', opacity: 0 }}
      transition={{ duration: 0.5 }}
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
