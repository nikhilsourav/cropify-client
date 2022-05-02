import React from 'react';
import { getDateInWords } from './Date';
import { Box, Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import useStyles from './styles';
import './styles.css';

const WeatherCard = ({ result, index }) => {
  /*
   * Material ui styles
   */
  const classes = useStyles(result['data'][index]['datetime']);

  /*
   * Date
   */
  const { date, weekDay, month, year } = getDateInWords(result['data'][index]['datetime']);

  /*
   * Weather Icon link
   */
  const weatherIcon = `https://www.weatherbit.io/static/img/icons/${result['data'][index]['weather'].icon}.png`;

  return (
    <motion.div
      initial={{ opacity: 0, x: '-10%' }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <Box className={classes.Box}>
        <Paper className={classes.Paper} elevation={4}>
          <p className='weather_date'>
            {weekDay} {month} {date} {year}
          </p>
          <Box className={classes.Info}>
            <p
              style={{ textShadow: '0 6px 6px rgba(0, 0, 0, 0.2)' }}
              className={classes.Temperature}
            >
              {result['data'][index]['temp']}
              <sup className='weather_degree_celsius'>°C</sup>
            </p>
            <Box className={classes.IconAndInfo}>
              <img className='weather_image' src={weatherIcon} alt='' />
              <Typography
                sx={{ color: 'white', lineHeight: 1, textShadow: '0 6px 6px rgba(0, 0, 0, 0.4)' }}
                fontSize={12}
                align='center'
              >
                {result['data'][index]['weather']['description']}
              </Typography>
            </Box>
          </Box>
          <p className='weather_temperature_minmax'>
            {result['data'][index]['low_temp']}°C/{result['data'][index]['high_temp']}°C
          </p>
        </Paper>
      </Box>
    </motion.div>
  );
};

export default WeatherCard;
