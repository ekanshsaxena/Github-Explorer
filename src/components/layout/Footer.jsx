import { FaSlackHash } from 'react-icons/fa';
function Footer() {
  const footerYear = new Date().getFullYear();
  return (
    <footer className='footer p-10 footer-center bg-gray-700'>
      <div>
        <FaSlackHash className='text-3xl' />
        <div>Copyright &copy; {footerYear} All rights reserved</div>
      </div>
    </footer>
  );
}

export default Footer;
