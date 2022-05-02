/************************************************************************************************
 *
 * Import Hooks
 *
 ************************************************************************************************/
import { useState, forwardRef } from 'react';

/************************************************************************************************
 *
 * Import Components
 *
 ************************************************************************************************/
import WeatherCard from './WeatherCard/WeatherCard';

/************************************************************************************************
 *
 * Import Utilites
 *
 ************************************************************************************************/
import {
  Typography,
  Button,
  Backdrop,
  CircularProgress,
  Container,
  Stack,
  Snackbar,
} from '@mui/material';

import axios from 'axios';
import MuiAlert from '@mui/material/Alert';
import { Link } from 'react-router-dom';
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
   * States
   */
  const [result, setResult] = useState('');
  const [backdropOpen, setBackdropOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  /*
   * Snackbar
   */
  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
  });

  const handleSnackbarClick = () => {
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setSnackbarOpen(false);
  };

  /*
   * Backdrop
   */
  const handleBackdropClose = () => {
    setBackdropOpen(false);
  };

  const handleBackdropToggle = () => {
    setBackdropOpen(!backdropOpen);
  };

  /*
   * Handle submit
   */
  const handleSubmit = () => {
    handleBackdropToggle();

    /*
     * Check for availability of geolocation
     */
    if ('geolocation' in navigator === false) {
      setTimeout(() => {
        handleSnackbarClick();
        handleBackdropClose();
      }, 1500);
      // console.log('Geolocation not available in this browser');
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
        setResult(data);

        handleBackdropClose();
        // console.log(data);
      },

      /*
       * Funtion to handle browser related error
       */
      (error) => {
        setTimeout(() => {
          handleSnackbarClick();
          handleBackdropClose();
        }, 1500);
        // console.error('Error Code = ' + error.code + ' - ' + error.message);
      },
      { enableHighAccuracy: true }
    );
  };

  return result === '' ? (
    <>
      {/************************************** Snackbar *************************************/}
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar
          open={snackbarOpen}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          autoHideDuration={5000}
          onClose={handleSnackbarClose}
        >
          <Alert
            align='center'
            onClose={handleSnackbarClose}
            severity='error'
            sx={{ width: '100%' }}
          >
            Geolocation not supported or location sharing is off.
          </Alert>
        </Snackbar>
      </Stack>
      {/************************************ end Snackbar ************************************/}

      {/************************************** Backdrop *************************************/}
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backdropOpen}
        onClick={handleBackdropClose}
      >
        <CircularProgress color='inherit' />
      </Backdrop>
      {/************************************ end Backdrop ************************************/}

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
  ) : (
    <>
      {/************************************ Weather Cards ************************************/}
      <Container
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
        }}
      >
        <Container>
          <Typography align='center' variant='h6'>
            Weather Report
          </Typography>
        </Container>

        <Container sx={{ marginTop: 2, marginBottom: 2 }}>
          <Typography align='center' variant='body2'>
            City: {result['city_name']}
          </Typography>
          <Typography align='center' variant='body2'>
            Timezone: {result['timezone']}
          </Typography>
        </Container>

        {result.data.map((item, index) => {
          return <WeatherCard key={index} result={result} index={index} />;
        })}
      </Container>
      <Typography align='center' sx={{ marginTop: 5 }}>
        <Button onClick={() => setResult('')}>
          <Link className={classes.Link} to='/weather-forecast'>
            Clear
          </Link>
        </Button>
      </Typography>
      {/********************************** end Weather Cards ***********************************/}
    </>
  );
};

export default ForecastForm;
