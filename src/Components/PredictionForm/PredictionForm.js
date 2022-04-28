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
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import ClearAllIcon from '@mui/icons-material/ClearAll';

import * as data from './Data';
import { getPrediction } from '../../Api';
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
  const [predictionData, setPredictionData] = useState({
    Area: '',
    State_Name: '',
    Season: '',
    Crop: '',
    Soil_Type: '',
  });

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
            value={predictionData.Area ? predictionData.Area : ''}
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
              value={predictionData.State_Name ? predictionData.State_Name : ''}
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
              value={predictionData.Season ? predictionData.Season : ''}
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
              value={predictionData.Crop ? predictionData.Crop : ''}
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
              value={predictionData.Soil_Type ? predictionData.Soil_Type : ''}
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
