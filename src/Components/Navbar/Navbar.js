/*******************************************************************
 *
 * Import Utilites
 *
 *******************************************************************/
import { Link } from 'react-router-dom';

/*******************************************************************
 *
 * Navbar Component
 *
 *******************************************************************/
const Navbar = () => {
  return (
    <div className='Navbar'>
      <h1>Navbar</h1>
      <Link to='/'>Home</Link>
      <br />
      <Link to='/crop-recommendation'>Recommend</Link>
      <br />
      <Link to='/yield-prediction'>Yield</Link>
    </div>
  );
};

export default Navbar;
