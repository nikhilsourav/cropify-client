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
import { Drawer, Box, IconButton, List, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import useStyles from './styles';

/************************************************************************************************
 *
 * Drawer Component
 *
 ************************************************************************************************/
const MuiDrawer = ({ drawerElements }) => {
  /*
   * Material ui styles
   */
  const classes = useStyles();

  /*
   * Drawer sate
   */
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      {/**************************************** Menu Icon ***************************************/}
      <IconButton size='large' edge='start' color='inherit' onClick={() => setIsDrawerOpen(true)}>
        <MenuIcon />
      </IconButton>
      {/************************************** end Menu Icon *************************************/}

      {/***************************************** Drawer *****************************************/}
      <Drawer anchor='right' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <Box p={2} className={classes.SidePanelBox}>
          <List>
            {drawerElements.map((text, index) => (
              <ListItemText primary={text} key={index} />
            ))}
          </List>
        </Box>
      </Drawer>
      {/*************************************** end Drawer ***************************************/}
    </>
  );
};

export default MuiDrawer;
