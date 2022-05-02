import { makeStyles } from '@mui/styles';
import CardBg from '../../../Assets/card-bg.webp';

export default makeStyles((theme) => ({
  Box: {
    margin: 15,
  },

  Paper: {
    backgroundImage: `url(${CardBg})`,
    backgroundPosition: 'bottom',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '240px',
    height: '240px',
    padding: theme.spacing(2),
  },

  Info: {
    marginBottom: 10,
    height: '58%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  Temperature: {
    color: 'white',
    flex: 1,
    padding: 5,
    fontSize: '34px',
    fontFamily: 'Titan One',
    fontWeight: '400',
  },

  IconAndInfo: {
    flex: 1,
    padding: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
}));
