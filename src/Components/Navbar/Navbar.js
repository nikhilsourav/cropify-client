/************************************************************************************************
 *
 * Import Hooks
 *
 ************************************************************************************************/
import { useState, useEffect } from 'react';

/************************************************************************************************
 *
 * Import Utilites
 *
 ************************************************************************************************/
import { Link } from 'react-router-dom';
import {
  AppBar,
  Button,
  Toolbar,
  Box,
  Typography,
  Stack,
  Menu,
  MenuItem,
  Divider,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import useStyles from './styles';
import LeafIcon from '../../Assets/leaf.png';

/************************************************************************************************
 *
 * Import Components
 *
 ************************************************************************************************/
import MuiDrawer from './MuiDrawer';

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

  /*
   * Find window dimension on browser resize
   */
  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
  };

  const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
      const handleResize = () => setWindowDimensions(getWindowDimensions());
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
  };

  const { width } = useWindowDimensions();
  /*
   * end Find window dimension
   */

  return (
    <>
      <AppBar>
        <Toolbar className={classes.Toolbar}>
          {/**************************************** Logo ***************************************/}
          <Stack>
            <div className={classes.Heading}>
              <Box className={classes.LeafIcon} component='img' src={LeafIcon} />
              <Typography variant='h6'>Cropify</Typography>
            </div>
          </Stack>
          {/************************************** end Logo **************************************/}

          {width > 600 ? (
            /* Render on browsersize > 600 */
            <>
              {/**************************************** Pages ****************************************/}
              <Stack direction='row'>
                <Link to='/' className={classes.NavItem}>
                  <Button color='inherit'>Home</Button>
                </Link>
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
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                transformOrigin={{ vertical: 'top', horizontal: 'center' }}
              >
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
            </>
          ) : (
            /* Render on browsersize < 600 */
            <MuiDrawer
              drawerElements={[
                /**************************************** Pages ****************************************/
                <Stack direction='column'>
                  <Link to='/' className={classes.SidePanelItem}>
                    <Button color='inherit' className={classes.SidePanelBtn}>
                      Home
                    </Button>
                  </Link>
                  <Divider />
                  <Link to='/crop-recommendation' className={classes.SidePanelItem}>
                    <Button color='inherit' className={classes.SidePanelBtn}>
                      Recommendation
                    </Button>
                  </Link>
                  <Divider />
                  <Link to='/yield-prediction' className={classes.SidePanelItem}>
                    <Button color='inherit' className={classes.SidePanelBtn}>
                      Prediction
                    </Button>
                  </Link>
                  <Divider />
                  <Button
                    color='inherit'
                    className={classes.SidePanelBtn}
                    onClick={handleClick}
                    endIcon={<KeyboardArrowDownIcon />}
                  >
                    More
                  </Button>
                </Stack>,
                /**************************************** end Pages ****************************************/

                /************************************ 'More' button *************************************/
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                  transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                >
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
                </Menu>,
                /************************************ end 'More' button *************************************/
              ]}
            />
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Navbar;
