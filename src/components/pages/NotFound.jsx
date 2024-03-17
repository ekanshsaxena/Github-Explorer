import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className='hero'>
      <div className='text-center hero-content'>
        <div>
          <div className='text-8xl font-bold mb-8'>Oops!</div>
          <div className='text-5xl mb-8'>404 - Page Not Found!</div>
          <Link to='/' className='btn btn-md shadow-lg'>
            <FaHome className='mr-2' />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
