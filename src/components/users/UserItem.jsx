import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className='card shadow-md bg-base-100'>
      <div className='flex-row card-body items-center space-x-4'>
        <div className='avatar'>
          <div className='w-14 h-14 rounded-full shadow'>
            <img src={avatar_url} alt='Profile' />
          </div>
        </div>
        <div>
          <div className='card-title'>{login}</div>
          <Link
            className='text-base-content text-opacity-40'
            to={`/user/${login}`}
          >
            Visit Profile{' '}
          </Link>
        </div>
      </div>
    </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
