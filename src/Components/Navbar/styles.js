import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  Toolbar: {
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  Heading: {
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: theme.palette.common.white,
  },

  AgricultureIcon: {
    marginRight: theme.spacing(1),
  },

  NavItem: {
    textDecoration: 'none',
    color: theme.palette.common.white,
  },

  Link: {
    textDecoration: 'none',
    color: theme.palette.common.white,
    WebkitTapHighlightColor: 'transparent',
  },

  MenuLink:{
    textDecoration: 'none',
    color: theme.palette.common.black,
    WebkitTapHighlightColor: 'transparent',
  }
}));
