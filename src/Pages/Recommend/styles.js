import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  FormWrapper: {
    padding: theme.spacing(4),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  RecForm: {
    maxWidth: 500,
    padding: theme.spacing(4),
  },
}));
