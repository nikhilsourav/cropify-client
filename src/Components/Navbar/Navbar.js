/************************************************************************************************
 *
 * Import Hooks
 *
 ************************************************************************************************/
import { useState } from 'react';

/************************************************************************************************
 *
 * Import Utilites
 *
 ************************************************************************************************/
import { Link } from 'react-router-dom';
import { AppBar, Button, Toolbar, Typography, Stack, Menu, MenuItem } from '@mui/material';
import { Agriculture } from '@mui/icons-material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import useStyles from './styles';

/************************************************************************************************
 *
 * Navbar Component
 *
 ************************************************************************************************/
const Navbar = () => {
  /*
   * Material ui styles
   */
  const classes = useStyles();

  /*
   * 'More' button
   */
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  /*
   * end 'More' button
   */

  return (
    <>
      <AppBar>
        <Toolbar className={classes.Toolbar}>
          {/**************************************** Logo ***************************************/}
          <Stack>
            <Link to='/' className={classes.Heading}>
              <Agriculture className={classes.AgricultureIcon} />
              <Typography variant='h6'>Cropify</Typography>
            </Link>
          </Stack>
          {/************************************** end Logo **************************************/}

          {/**************************************** Pages ****************************************/}
          <Stack direction='row'>
            <Link to='/crop-recommendation' className={classes.NavItem}>
              <Button color='inherit'>Recommendation</Button>
            </Link>
            <Link to='/yield-prediction' className={classes.NavItem}>
              <Button color='inherit'>Prediction</Button>
            </Link>
            <Button color='inherit' onClick={handleClick} endIcon={<KeyboardArrowDownIcon />}>
              More
            </Button>
          </Stack>
          {/************************************** end Pages **************************************/}

          {/************************************ 'More' button *************************************/}
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem onClick={handleClose}>
              <a
                href='https://www.google.com'
                target='_blank'
                rel='noreferrer'
                className={classes.MenuLink}
              >
                ML Codes
              </a>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <a
                href='https://www.youtube.com'
                target='_blank'
                rel='noreferrer'
                className={classes.MenuLink}
              >
                Client Codes
              </a>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <a
                href='https://www.instagram.com'
                target='_blank'
                rel='noreferrer'
                className={classes.MenuLink}
              >
                Server Codes
              </a>
            </MenuItem>
          </Menu>
          {/*********************************** end 'More' button ***********************************/}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Navbar;
