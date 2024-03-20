import { useState, useContext } from 'react';
import GithubContext from '../../context/GithubContext';

function UserSearch() {
  const [text, setText] = useState('');

  const { users, searchUsers, clearUsers } = useContext(GithubContext);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === '') {
      alert('Please enter something in the input field');
    } else {
      searchUsers(text);
      setText('');
    }
  };

  const handleClear = () => {
    clearUsers();
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
