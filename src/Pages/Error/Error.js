/************************************************************************************************
 *
 * Import Utilities
 *
 ************************************************************************************************/
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Stack, Typography } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import useStyles from './styles';

/************************************************************************************************
 *
 * Error Component
 *
 ************************************************************************************************/
const Error = () => {
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
      <Stack className={classes.Container}>
        <Typography variant='h1'>
          4 <HelpOutlineIcon fontSize='inherit' className={classes.QuestionMark} /> 4
        </Typography>
        <Typography variant='h6' fontWeight='regular' className={classes.Info}>
          Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the
          first place?
        </Typography>
        <Typography variant='h6' fontWeight='regular'>
          Let's go{' '}
          <Link className={classes.Link} to='/'>
            home
          </Link>{' '}
          and try from there.
        </Typography>
      </Stack>
    </motion.div>
  );
};

export default Error;
