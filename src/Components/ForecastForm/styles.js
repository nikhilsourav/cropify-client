import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  HeadingContainer: {
    marginBottom: '0px',
  },

  Link: {
    color: '#357291',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },

  InfoContainer: {
    marginTop: '20px',
    position: 'relative',
  },

  ListItems: {
    position: 'relative',
  },

  Icon: {
    position: 'absolute',
    top: '0',
    left: '-10px',
  },

  ParaContainer: {
    marginTop: '40px',
    marginBottom: '20px',
  },

  ParaContent: {
    textAlign: 'justify',
  },

  Link: {
    textDecoration: 'none',
    color: '#357291',
  },
}));
