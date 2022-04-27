/************************************************************************************************
 *
 * Improt Utilities
 *
 ************************************************************************************************/
import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './styles.css';
import ModernFarming from '../../Assets/modernFarming.jpg';

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

      {/************************************** About section **************************************/}
      <section className='about' id='about'>
        <div className='about-container'>
          <img src={ModernFarming} alt='' className='about-img' />
          <div className='about-info'>
            <span>About</span>
            <p>
              We use cutting-edge Artificial Intelligence and Machine Learning technologies to
              assist you with directing through the whole framing process. Get informed decisions
              about your farming strategy to figure out the demographics of your region, comprehend
              the variables that influence your crop and keep them healthy for a marvellous yield.
            </p>
            <p>
              We provide a crop recommendation system and a crop yield prediction system based on ML
              algorithms to enhance your farming experience.
            </p>
          </div>
        </div>
      </section>
      {/************************************ end About section ************************************/}
    </motion.div>
  );
};

export default Home;
