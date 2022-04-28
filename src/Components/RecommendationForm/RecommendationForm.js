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
import * as data from './Data';
import { getRecommendation } from '../../Api';

/************************************************************************************************
 *
 * Import Utilites
 *
 ************************************************************************************************/
import {
  Grid,
  Typography,
  TextField,
  Button,
  Backdrop,
  CircularProgress,
  Modal,
  Paper,
  IconButton,
  Container,
  Tooltip,
  Stack,
  Snackbar,
} from '@mui/material';

import MuiAlert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import useStyles from './styles';

/************************************************************************************************
 *
 * RecommendationForm Component
 *
 ************************************************************************************************/
const RecommendationForm = () => {
  /*
   * Material ui styles
   */
  const classes = useStyles();

  /*
   * States
   */
  const [result, setResult] = useState('');
  const [backdropOpen, setBackdropOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [recommendationData, setRecommendationData] = useState({
    N: '',
    P: '',
    K: '',
    temperature: '',
    humidity: '',
    ph: '',
    rainfall: '',
  });

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
   * Modal
   */
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  /*
   * Data field Updation
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecommendationData({ ...recommendationData, [name]: value });
  };

  /*
   * Form Submission
   */
  const handleSubmit = async () => {
    handleBackdropToggle();

    /*
     * Check if all inputs are provided
     */
    for (const val in recommendationData) {
      if (recommendationData[val] === '') {
        setTimeout(() => {
          handleSnackbarClick();
          handleBackdropClose();
        }, 1500);
        return;
      }
    }

    const { data } = await getRecommendation(recommendationData);
    const recommendedCrop = data[0]['recommended crop'];
    setResult(recommendedCrop.toLocaleString(undefined, { maximumFractionDigits: 2 }));

    handleBackdropClose();
    handleModalOpen();
  };

  /*
   * Clear Form
   */
  const handleClear = () => {
    setRecommendationData({
      N: '',
      P: '',
      K: '',
      temperature: '',
      humidity: '',
      ph: '',
      rainfall: '',
    });
  };

  return (
    <>
      {/************************************** Snackbar *************************************/}
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar
          open={snackbarOpen}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          autoHideDuration={5000}
          onClose={handleSnackbarClose}
        >
          <Alert onClose={handleSnackbarClose} severity='error' sx={{ width: '100%' }}>
            All fields are required!
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

      {/*************************************** Modal ****************************************/}
      <Modal open={modalOpen} onClose={handleModalClose}>
        <Paper elevation={20} className={classes.ModalContainer}>
          <div className={classes.ModalClose}>
            <IconButton onClick={handleModalClose}>
              <CloseIcon />
            </IconButton>
          </div>
          <div className={classes.ModalInfo}>
            <Typography align='center' variant='body1'>
              Crop recommended is <strong> {result} </strong>
            </Typography>
          </div>
        </Paper>
      </Modal>
      {/************************************* end Modal **************************************/}

      {/******************************** Recommendation Form **********************************/}
      <Container className={classes.HeadingContainer}>
        <Typography align='center' variant='h6' style={{ marginBottom: 20 }}>
          Crop Recommendation
        </Typography>
        <Grid className={classes.DelIconContainer}>
          <Tooltip placement='top' arrow title='Clear Form'>
            <IconButton onClick={handleClear}>
              <ClearAllIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      </Container>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            type='number'
            id='Nitrogen'
            label='Nitrogen'
            name='N'
            variant='outlined'
            value={recommendationData.N ?? ''}
            onChange={handleChange}
            error={Boolean(
              recommendationData.N &&
                (recommendationData.N < data.Nitrogen.minValue ||
                  recommendationData.N > data.Nitrogen.maxValue)
            )}
            helperText={
              Boolean(
                recommendationData.N &&
                  (recommendationData.N < data.Nitrogen.minValue ||
                    recommendationData.N > data.Nitrogen.maxValue)
              )
                ? `Value must be in range (${data.Nitrogen.minValue} to ${data.Nitrogen.maxValue})`
                : ''
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            type='number'
            id='Phosphorous'
            label='Phosphorous'
            name='P'
            variant='outlined'
            value={recommendationData.P ?? ''}
            onChange={handleChange}
            error={Boolean(
              recommendationData.P &&
                (recommendationData.P < data.Phosphorous.minValue ||
                  recommendationData.P > data.Phosphorous.maxValue)
            )}
            helperText={
              Boolean(
                recommendationData.P &&
                  (recommendationData.P < data.Phosphorous.minValue ||
                    recommendationData.P > data.Phosphorous.maxValue)
              )
                ? `Value must be in range (${data.Phosphorous.minValue} to ${data.Phosphorous.maxValue})`
                : ''
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            type='number'
            id='Potassium'
            label='Potassium'
            name='K'
            variant='outlined'
            value={recommendationData.K ?? ''}
            onChange={handleChange}
            error={Boolean(
              recommendationData.K &&
                (recommendationData.K < data.Potassium.minValue ||
                  recommendationData.K > data.Potassium.maxValue)
            )}
            helperText={
              Boolean(
                recommendationData.K &&
                  (recommendationData.K < data.Potassium.minValue ||
                    recommendationData.K > data.Potassium.maxValue)
              )
                ? `Value must be in range (${data.Potassium.minValue} to ${data.Potassium.maxValue})`
                : ''
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            type='number'
            id='Temperature'
            label='Temperature'
            name='temperature'
            variant='outlined'
            value={recommendationData.temperature ?? ''}
            onChange={handleChange}
            error={Boolean(
              recommendationData.temperature &&
                (recommendationData.temperature < data.Temperature.minValue ||
                  recommendationData.temperature > data.Temperature.maxValue)
            )}
            helperText={
              Boolean(
                recommendationData.temperature &&
                  (recommendationData.temperature < data.Temperature.minValue ||
                    recommendationData.temperature > data.Temperature.maxValue)
              )
                ? `Value must be in range (${data.Temperature.minValue} to ${data.Temperature.maxValue})`
                : ''
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            type='number'
            id='Humidity'
            label='Humidity'
            name='humidity'
            variant='outlined'
            value={recommendationData.humidity ?? ''}
            onChange={handleChange}
            error={Boolean(
              recommendationData.humidity &&
                (recommendationData.humidity < data.Humidity.minValue ||
                  recommendationData.humidity > data.Humidity.maxValue)
            )}
            helperText={
              Boolean(
                recommendationData.humidity &&
                  (recommendationData.humidity < data.Humidity.minValue ||
                    recommendationData.humidity > data.Humidity.maxValue)
              )
                ? `Value must be in range (${data.Humidity.minValue} to ${data.Humidity.maxValue})`
                : ''
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            type='number'
            id='Ph'
            label='Ph value'
            name='ph'
            variant='outlined'
            value={recommendationData.ph ?? ''}
            onChange={handleChange}
            error={Boolean(
              recommendationData.ph &&
                (recommendationData.ph < data.PH.minValue ||
                  recommendationData.ph > data.PH.maxValue)
            )}
            helperText={
              Boolean(
                recommendationData.ph &&
                  (recommendationData.ph < data.PH.minValue ||
                    recommendationData.ph > data.PH.maxValue)
              )
                ? `Value must be in range (${data.PH.minValue} to ${data.PH.maxValue})`
                : ''
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            type='number'
            id='Rainfall'
            label='Rainfall'
            name='rainfall'
            variant='outlined'
            value={recommendationData.rainfall ?? ''}
            onChange={handleChange}
            error={Boolean(
              recommendationData.rainfall &&
                (recommendationData.rainfall < data.Rainfall.minValue ||
                  recommendationData.rainfall > data.Rainfall.maxValue)
            )}
            helperText={
              Boolean(
                recommendationData.rainfall &&
                  (recommendationData.rainfall < data.Rainfall.minValue ||
                    recommendationData.rainfall > data.Rainfall.maxValue)
              )
                ? `Value must be in range (${data.Rainfall.minValue} to ${data.Rainfall.maxValue})`
                : ''
            }
          />
        </Grid>
      </Grid>
      <Typography align='center'>
        <Button onClick={handleSubmit} sx={{ marginTop: 4 }} variant='outlined'>
          Submit
        </Button>
      </Typography>
      {/****************************** end Recommendation Form ********************************/}
    </>
  );
};

export default RecommendationForm;
