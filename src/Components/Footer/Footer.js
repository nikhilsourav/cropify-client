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
import { Box, Tooltip, Menu, MenuItem, Avatar, IconButton, Typography } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import WebhookIcon from '@mui/icons-material/Webhook';
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import CloudIcon from '@mui/icons-material/Cloud';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Dev from '../../Assets/dev.jpg';
import useStyles from './styles';

/************************************************************************************************
 *
 * Footer Component
 *
 ************************************************************************************************/
const Footer = () => {
  /*
   * Material ui styles
   */
  const classes = useStyles();

  /*
   * value state
   */
  const [value, setValue] = useState(0);

  /*
   * 'More' button
   */
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

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

  return width > 600 ? (
    <Box className={classes.FooterContainerLargeScreen}>
      <Typography sx={{ color: 'white', marginRight: 1 }}>Copyright &#169; Cropify 2022</Typography>
      <Tooltip arrow title='Linkedin: Nikhil Sourav'>
        <IconButton>
          <a href='https://www.linkedin.com/in/nikhilsourav' target='_blank' rel='noreferrer'>
            <Avatar src={Dev} sx={{ width: 24, height: 24 }} />
          </a>
        </IconButton>
      </Tooltip>
    </Box>
  ) : (
    <>
      <Box paddingBottom='50px'></Box>
      <Box className={classes.FooterContainerSmallScreen}>
        <BottomNavigation value={value} onChange={(event, newValue) => setValue(newValue)}>
          <Tooltip arrow placement='top' title='Home Page'>
            <Link to='/'>
              <BottomNavigationAction icon={<HomeIcon />} />
            </Link>
          </Tooltip>
          <Tooltip arrow placement='top' title='Recommendation Page'>
            <Link to='/crop-recommendation'>
              <BottomNavigationAction icon={<WebhookIcon />} />
            </Link>
          </Tooltip>
          <Tooltip arrow placement='top' title='Prediction Page'>
            <Link to='/yield-prediction'>
              <BottomNavigationAction icon={<OnlinePredictionIcon />} />
            </Link>
          </Tooltip>
          <Tooltip arrow placement='top' title='Weather Forecast'>
            <Link to='/weather-forecast'>
              <BottomNavigationAction icon={<CloudIcon />} />
            </Link>
          </Tooltip>
          <Tooltip arrow placement='top' title='Codes'>
            <div>
              <BottomNavigationAction onClick={handleClick} icon={<KeyboardArrowUpIcon />} />
            </div>
          </Tooltip>

          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            transformOrigin={{ vertical: 'bottom', horizontal: 'center' }}
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
            <MenuItem onClick={handleClose}>
              <Tooltip title='Linkedin: Nikhil Sourav' placement='left'>
                <a
                  href='https://www.linkedin.com/in/nikhilsourav'
                  target='_blank'
                  rel='noreferrer'
                  style={{ width: '100%' }}
                >
                  <BottomNavigationAction
                    sx={{ marginLeft: '5px' }}
                    icon={
                      <>
                        <Avatar src={Dev} sx={{ width: 27, height: 27 }} />
                      </>
                    }
                  />
                </a>
              </Tooltip>
            </MenuItem>
          </Menu>
        </BottomNavigation>
      </Box>
    </>
  );
};

export default Footer;
