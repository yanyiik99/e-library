import 'bootstrap/dist/css/bootstrap.min.css';
import './NewsLetter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';


// Image
import newsLeft from '../../images/news-left.png';
import newsRight from '../../images/news-right.png';


function FaPaperPlaneIcon() {
  const faPaperPlaneStyle = {
    color: "#DDC2FF",
    fontSize: "25.5px",
    padding: "7.8px", 
  }

  return(
    <div>
      <button className='ic-paper'>
        <FontAwesomeIcon icon={faPaperPlane} style={faPaperPlaneStyle} />
      </button>
    </div>
  );
}

function NewsLetter() {


  return (
    <div className='news-letter position-relative mt-5 pt-5'>
      {/* Image Side */}
      <div className='newsbg-left position-absolute'>
        <img src={newsLeft} alt="" />
      </div>
      <div className='newsbg-right position-absolute'>
        <img src={newsRight} alt="" />
      </div>

      {/* Content */}
      <div className='news-center position-relative d-flex flex-column h-100  align-items-center justify-content-center'>
        <div className='news-title fw-bolder py-2'>
          <h4 className='fw-bold'>Dapatkan Insight Bulanan Dengan Berlangganan Dengan Kami</h4>
        </div>
        <span className='news-desc pb-5 mb-3'>Lorem ipsum dolor sit amet, consecteturing elit, sed od tempor incididunt ut labore et dolore elit, se</span>
        <div className='d-flex'>
          <div>
            <input className='news-input' type="text" placeholder='Kirim Insight Bulanan' />
          </div>
          <FaPaperPlaneIcon />
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;