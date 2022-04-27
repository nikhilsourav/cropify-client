import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  FooterContainerSmallScreen: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    WebkitTapHighlightColor: 'transparent',
  },

  FooterContainerLargeScreen: {
    color: 'white',
    backgroundColor: '#357291',
    width: '100%',
    height: '9vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  MenuLink: {
    textDecoration: 'none',
    color: theme.palette.common.black,
    WebkitTapHighlightColor: 'transparent',
  },
}));
