import { useContext } from 'react';
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';
import GithubContext from '../../context/github/GithubContext';

function UserList() {
  const { users, isLoading } = useContext(GithubContext);

  return isLoading ? (
    <Spinner />
  ) : (
    <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-2 '>
      {users.map((user) => {
        return <UserItem key={user.id} user={user} />;
      })}
    </div>
  );
}

export default UserList;
