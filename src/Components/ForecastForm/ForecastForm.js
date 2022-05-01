/************************************************************************************************
 *
 * Import Hooks
 *
 ************************************************************************************************/
import { useState } from 'react';

/************************************************************************************************
 *
 * Import Utilites
 *
 ************************************************************************************************/
import axios from 'axios';
import { Typography, Button, Container } from '@mui/material';
import useStyles from './styles';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

/************************************************************************************************
 *
 * ForecastForm Component
 *
 ************************************************************************************************/
const ForecastForm = () => {
  /*
   * Material ui styles
   */
  const classes = useStyles();

  /*
   * Handle submit
   */
  const handleSubmit = () => {
    /*
     * Check for availability of geolocation
     */
    if ('geolocation' in navigator === false) {
      console.log('Geolocation not available in your browser');
      return;
    }

    /*
     * Api call using current latitude and longitude
     */
    navigator.geolocation.getCurrentPosition(
      /*
       * Function to make api call
       */
      async (position) => {
        const options = {
          method: 'GET',
          url: process.env.REACT_APP_API_URL,
          params: { lat: position.coords.latitude, lon: position.coords.longitude },
          headers: {
            'X-RapidAPI-Host': process.env.REACT_APP_X_RapidAPI_Host,
            'X-RapidAPI-Key': process.env.REACT_APP_X_RapidAPI_Key,
          },
        };

        const { data } = await axios.request(options);
        console.log(data);
      },

      /*
       * Funtion to handle browser related error
       */
      (error) => {
        console.error('Error Code = ' + error.code + ' - ' + error.message);
      }
    );
  };

  return (
    <>
      <Container className={classes.HeadingContainer}>
        <Typography align='center' variant='h6'>
          Weather Forecast
        </Typography>
      </Container>

      <Container>
        <Typography align='center' sx={{ fontSize: '12px' }}>
          This service is provided by{' '}
          <a
            className={classes.Link}
            href='https://rapidapi.com/weatherbit/api/weather'
            target='_blank'
            rel='noreferrer'
          >
            Weatherbit Api
          </a>
        </Typography>

        <Container className={classes.InfoContainer}>
          <Typography
            sx={{ marginLeft: 2, marginBottom: 2 }}
            align='left'
            className={classes.ListItems}
          >
            &nbsp; &nbsp; <InfoOutlinedIcon color='primary' className={classes.Icon} />
            To use this feature please ensure the following:
          </Typography>

          <Typography
            sx={{ marginLeft: 2, marginBottom: 2 }}
            align='left'
            className={classes.ListItems}
          >
            &nbsp; &nbsp; <CheckCircleRoundedIcon color='primary' className={classes.Icon} />
            You are using chrome version 50 or higher.
          </Typography>
          <Typography
            sx={{ marginLeft: 2, marginBottom: 2 }}
            align='left'
            className={classes.ListItems}
          >
            &nbsp; &nbsp; <CheckCircleRoundedIcon color='primary' className={classes.Icon} /> You
            have enabled location sharing in your browser.
          </Typography>
          <Typography
            sx={{ marginLeft: 2, marginBottom: 2 }}
            align='left'
            className={classes.ListItems}
          >
            &nbsp; &nbsp; <CheckCircleRoundedIcon color='primary' className={classes.Icon} /> You
            allow cropify to access your current location.
          </Typography>
        </Container>

        <Container className={classes.ParaContainer}>
          <Typography sx={{ fontWeight: 'bold', marginBottom: 2 }} variant='body1' align='center'>
            Importance of weather
          </Typography>

          <Container>
            <Typography className={classes.ParaContent}>
              Weather forecasting can help with a farmer’s day-to-day decisions. These decisions
              include crop irrigation, time to add fertilizers etc. The decisions that farmers make
              will result in a profitable crop or failure.
              <br />
              <br />
              It’s important for a farmer to know the correct time to apply fertilizer, along with
              the application rate and type of fertilizer to use. Bad weather at the time of
              application can wash away the field’s profits.
            </Typography>
          </Container>
        </Container>

        <Typography align='center'>
          <Button type='submit' onClick={handleSubmit} sx={{ marginTop: 4 }} variant='outlined'>
            Get Weather Report
          </Button>
        </Typography>
      </Container>
      {/********************************** end Forecast Form **********************************/}
    </>
  );
};

export default ForecastForm;
