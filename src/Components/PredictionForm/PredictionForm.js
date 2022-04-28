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
import { getPrediction } from '../../Api';

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
  InputLabel,
  MenuItem,
  FormControl,
  Select,
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
 * PredictionForm Component
 *
 ************************************************************************************************/
const PredictionForm = () => {
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
  const [predictionData, setPredictionData] = useState({
    Area: '',
    State_Name: '',
    Season: '',
    Crop: '',
    Soil_Type: '',
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
    setPredictionData({ ...predictionData, [name]: value });
  };

  /*
   * Form Submission
   */
  const handleSubmit = async () => {
    handleBackdropToggle();

    /*
     * Check if all inputs are provided
     */
    for (const val in predictionData) {
      if (predictionData[val] === '') {
        setTimeout(() => {
          handleSnackbarClick();
          handleBackdropClose();
        }, 1500);
        return;
      }
    }

    predictionData['Area'] = parseInt(predictionData['Area']);
    const { data } = await getPrediction(predictionData);
    const predictedYield = Math.round(data[0]['predicted yield'] * 100) / 100;
    setResult(predictedYield);

    handleBackdropClose();
    handleModalOpen();
  };

  /*
   * Clear Form
   */
  const handleClear = () => {
    setPredictionData({
      Area: '',
      State_Name: '',
      Season: '',
      Crop: '',
      Soil_Type: '',
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
              Predicted yield {result} kg/acre
            </Typography>
          </div>
        </Paper>
      </Modal>
      {/************************************* end Modal **************************************/}

      {/*********************************** Prediction Form **********************************/}
      <Container className={classes.HeadingContainer}>
        <Typography align='center' variant='h6'>
          Yield Prediction
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
            label='Area'
            name='Area'
            value={predictionData.Area ?? ''}
            onChange={handleChange}
            fullWidth
            variant='outlined'
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>State Name</InputLabel>
            <Select
              label='State Name'
              name='State_Name'
              value={predictionData.State_Name ?? ''}
              onChange={handleChange}
            >
              {data.stateArr.map(function (stateName, index) {
                return (
                  <MenuItem value={index} key={index}>
                    {stateName}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Season</InputLabel>
            <Select
              label='Season'
              name='Season'
              value={predictionData.Season ?? ''}
              onChange={handleChange}
            >
              {data.seasonArr.map(function (seasonName, index) {
                return (
                  <MenuItem value={index} key={index}>
                    {seasonName}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Crop</InputLabel>
            <Select
              label='Crop'
              name='Crop'
              value={predictionData.Crop ?? ''}
              onChange={handleChange}
            >
              {data.cropArr.map(function (cropName, index) {
                return (
                  <MenuItem value={index} key={index}>
                    {cropName}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Soil Type</InputLabel>
            <Select
              label='Soil Type'
              name='Soil_Type'
              value={predictionData.Soil_Type ?? ''}
              onChange={handleChange}
            >
              {data.soilArr.map(function (soilName, index) {
                return (
                  <MenuItem value={index} key={index}>
                    {soilName}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Typography align='center'>
        <Button type='submit' onClick={handleSubmit} sx={{ marginTop: 4 }} variant='outlined'>
          Submit
        </Button>
      </Typography>
      {/********************************** end Prediction Form **********************************/}
    </>
  );
};

export default PredictionForm;
