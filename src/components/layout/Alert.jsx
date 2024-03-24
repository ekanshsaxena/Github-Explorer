import { useContext } from 'react';
import AlertContext from '../../context/alert/AlertContext';
import { FaCircleXmark } from 'react-icons/fa6';

function Alert() {
  const { alert } = useContext(AlertContext);
  return (
    alert !== null && (
      <div className='flex items-center mb-4 space-x-2 text-red-500 text-2xl'>
        {alert.type === 'error' && <FaCircleXmark />}
        <div className='text-base text-white font-bold'>{alert.msg}</div>
      </div>
    )
  );
}

export default Alert;
