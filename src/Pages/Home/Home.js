/************************************************************************************************
 *
 * Improt Utilities
 *
 ************************************************************************************************/
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
      initial={{ y: '-10%', opacity: 0 }}
      animate={{ y: 1, opacity: 1 }}
      exit={{ y: '10%', opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/************************************* Header Section *************************************/}
      <section id='header_wrapper'>
        <div className='header_container'>
          <div className='header_info'>
            <h1>Cropify</h1>
            <p>Get educated decision about your farming strategy</p>
            <a href='#services' className='header-btn'>
              Explore
            </a>
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

      {/************************************* Services section ************************************/}
      <div className='services-table' id='services'>
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
            <Link to='/yield-prediction' className='services-btn'>
              Select
            </Link>
          </div>
          <div className='services-card'>
            <h3 className='services-card-header'>Forecast</h3>
            <div className='service_banner'>
              <sup></sup>
              <span>Weather</span>
            </div>
            <ul>
              <li>Get weather forecast to plan your cultivation</li>
              <li>Uses third party api to display weather forecast</li>
            </ul>
            <Link to='/weather-forecast' className='services-btn'>
              Select
            </Link>
          </div>
          {/********************************* end Services section *********************************/}
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
