/************************************************************************************************
 *
 * Improt Utilities
 *
 ************************************************************************************************/
import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './styles.css';

/************************************************************************************************
 *
 * Home Component
 *
 ************************************************************************************************/
const Home = () => {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.35 }}
    >
      {/************************************* Header Section *************************************/}
      <section id='header_wrapper'>
        <div className='header_container'>
          <div className='header_info'>
            <h1>Cropify</h1>
            <p>Get educated decision about your farming strategy</p>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <Button style={{ backgroundColor: '#357291', color: 'white' }}>Explore</Button>
            </Link>
          </div>
        </div>
      </section>
      {/*********************************** end Header Section ***********************************/}

      
    </motion.div>
  );
};

export default Home;
