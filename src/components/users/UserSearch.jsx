import { useState, useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';
import AlertContext from '../../context/alert/AlertContext';
import { searchUsers } from '../../context/github/GithubActions';

function UserSearch() {
  const [text, setText] = useState('');

  const { users, dispatch } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (text === '') {
      setAlert('Please enter something', 'error');
    } else {
      dispatch({ type: 'SET_LOADING' });
      const users = await searchUsers(text);
      dispatch({
        type: 'GET_USERS',
        payload: users,
      });
      setText('');
    }
  };

  const handleClear = () => {
    dispatch({ type: 'CLEAR_USERS' });
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-8'>
      <div>
        <form onSubmit={handleSubmit}>
          <div className='relative'>
            <input
              type='text'
              placeholder='Search a username ...'
              className='w-full input input-lg text-black bg-white'
              value={text}
              onChange={handleChange}
            />
            <button
              type='submit'
              className='btn absolute top-0 right-0 rounded-l-none btn-lg w-36'
            >
              Go
            </button>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button onClick={handleClear} className='btn btn-ghost btn-lg'>
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
