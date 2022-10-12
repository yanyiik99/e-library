import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './MyFooter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from '../../images/logo-e-library.png';

function MyFooter() {
  return (
    <div className='bg-footer mt-5 py-5'>
      <Container className='footer-content'>
        <div className='footer-center d-flex flex-column align-items-left'>
          <p><img className='f-logo' src={logo} alt="logo" /></p>
          <p className='fix-position'>
            <i className='letter-icon'></i>
            <i className='instagram-icon'></i>
            <i className='facebook-icon'></i>
            <i className='twitter-icon'></i>
            <i className='whatsapp-icon'></i>
          </p>
          <p className='team-style'><b>From Team </b><span className='fw-bold'>ONECA</span></p>
        </div>
        <div className='vertical-line'></div>
        <div>
          <h5><b>Our Product</b></h5>
          <p>Web React</p>
          <p>Landing Page</p>
          <p>Design</p>
          <p>Rekomendasi</p>
        </div>
        <div>
          <h5><b>Dukungan</b></h5>
          <p>FAQ</p>
          <p>Pusat Bantuan</p>
          <p>Kebijakan Privasi</p>
          <p>Syarat dan Ketentuan</p>
        </div>
      </Container>
    </div>
  );
}

export default MyFooter;
