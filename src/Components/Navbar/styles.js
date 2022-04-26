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

  LeafIcon: {
    marginRight: theme.spacing(1),
    width: '20px',
    height: '20px',
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

  MenuLink: {
    textDecoration: 'none',
    color: theme.palette.common.black,
    WebkitTapHighlightColor: 'transparent',
  },

  SidePanelBox: {
    width: '230px',
    textAlign: 'center',
    role: 'presentation',
  },

  SidePanelItem: {
    textDecoration: 'none',
    color: theme.palette.common.black,
    WebkitTapHighlightColor: 'transparent',
  },

  SidePanelBtn: { width: '100%' },
}));
