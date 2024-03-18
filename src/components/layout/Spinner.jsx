import spinner from './assets/spinner.gif';

function Spinner() {
  return (
    <div className=' mt-20'>
      <img width={180} src={spinner} alt='Loading...' className='mx-auto' />
    </div>
  );
}

export default Spinner;
