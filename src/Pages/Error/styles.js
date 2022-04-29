import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  Container: {
    padding: '30px',
    height: '82.5vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },

  Info: {
    maxWidth: '500px',
    paddingTop: '25px',
    paddingBottom: '25px',
  },

  QuestionMark: {
    marginBottom: '-12px',
    animation: '$spin 2s linear infinite',
  },
  '@keyframes spin': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },

  Link: {
    color: '#357291',
    fontWeight: 'bold',
    textDecoration: 'none',
    '&:hover': {
      textDecoration:'underline'
    },
  },
}));
