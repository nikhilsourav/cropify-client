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

      <div className='services-table' id='price' data-aos='fade-up' data-aos-duration='1000'>
        <span>services</span>
        <div className='services-flex'>
          <div className='services-card'>
            <h3 className='services-card-header'>Crop</h3>
            <div className='service_banner'>
              <sup></sup>
              <span>Recommendation</span>
            </div>
            <ul>
              <li>Get recommended crop for your next harvest</li>
              <li>Recommendation is provided based on multiple factors</li>
            </ul>
            <Link to='/crop-recommendation' className='services-btn'>
              Select
            </Link>
          </div>
          <div className='services-card'>
            <h3 className='services-card-header'>Yield</h3>
            <div className='service_banner'>
              <sup></sup>
              <span>Prediction</span>
            </div>
            <ul>
              <li>Get predicted yield per acre for given crop</li>
              <li>Prediction is provided based on previous year data</li>
            </ul>
            <Link to='yield-prediction' className='services-btn'>
              Select
            </Link>
          </div>
          {/* 
          <div className='services-card'>
            <h3 className='services-card-header'>Weather</h3>
            <div className='service_banner'>
              <sup></sup>
              <span>Forecast</span>
            </div>
            <ul>
              <li>Get weather forecase for your current location</li>
              <li>Forecast is provided using third-party api services</li>
            </ul>
            <Link to='/weather-forecast' className='services-btn'>Select</Link>
          </div> 
          */}
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
