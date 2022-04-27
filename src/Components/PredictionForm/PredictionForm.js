import * as React from 'react';
import { Grid, Typography, TextField, Button } from '@mui/material';

const PredictionForm = () => {
  return (
    <React.Fragment>
      <Typography align='center' variant='h5' style={{ marginBottom: 20 }}>
        Yield Prediction
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField required id='Area' label='Area' name='Area' fullWidth variant='outlined' />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id='State_Name'
            label='State Name'
            name='State_Name'
            fullWidth
            variant='outlined'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id='Season'
            label='Season'
            name='Season'
            fullWidth
            variant='outlined'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField required id='Crop' label='Crop' name='Crop' fullWidth variant='outlined' />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id='Soil_Type'
            label='Soil Type'
            name='Soil Type'
            fullWidth
            variant='outlined'
          />
        </Grid>
      </Grid>
      <Typography align='center'>
        <Button sx={{ marginTop: 4 }} variant='outlined'>
          Submit
        </Button>
      </Typography>
    </React.Fragment>
  );
};

export default PredictionForm;
