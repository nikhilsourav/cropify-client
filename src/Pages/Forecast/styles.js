import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  FormWrapper: {
    padding: theme.spacing(4),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  ForecastForm: {
    maxWidth: 500,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));
