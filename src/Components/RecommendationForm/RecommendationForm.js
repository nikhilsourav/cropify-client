import * as React from 'react';
import { Grid, Typography, TextField, Button } from '@mui/material';

const RecommendationForm = () => {
  return (
    <React.Fragment>
      <Typography align='center' variant='h5' style={{ marginBottom: 20 }}>
        Crop Recommendation
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id='Nitrogen'
            label='Nitrogen'
            name='N'
            fullWidth
            variant='outlined'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id='Phosphorous'
            label='Phosphorous'
            name='P'
            fullWidth
            variant='outlined'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id='Potassium'
            label='Potassium'
            name='K'
            fullWidth
            variant='outlined'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id='Temperature'
            label='Temperature'
            name='temperature'
            fullWidth
            variant='outlined'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id='Humidity'
            label='Humidity'
            name='humidity'
            fullWidth
            variant='outlined'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField required id='Ph' label='Ph value' name='ph' fullWidth variant='outlined' />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id='Rainfall'
            label='Rainfall'
            name='rainfall'
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

export default RecommendationForm;
