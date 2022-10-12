import 'bootstrap/dist/css/bootstrap.min.css';
import './HeaderBanner.css';

// Image
import stackBook from '../../images/stack-book.svg';
import rightBanner from '../../images/right-side.png';
import topOne from '../../images/book-top-1.png';
import topTwo from '../../images/book-top-2.png';
import topThree from '../../images/book-top-3.png';
import lamp from '../../images/lamp.svg';
import MyBtn from '../MyBtn';

function HeaderBanner() {
  return (
    <div className='mt-5 pt-3'>
      <div className='banner d-flex row '>
        <div className='left-banner col-5 pt-5 ps-5'>
          <p className='fw-semibold'>Explore Your Favorite Books
            <span className='mx-3'>
              <img className='img-fluid' src={stackBook} alt="Tumpukan Buku" />
            </span>
          </p>
          <h1 className='fw-bolder mt-5'>Dapatkan Insight Menarik Dari <span>E-Library</span>  Just One Click
            <span className='mx-4'>
              <img src={lamp} alt="lamp" />
            </span>
          </h1>
          <div className='btn-let my-5'>
            <MyBtn label="Let's Go" style={{ backgroundColor: "#FF9C41" }} />
          </div>

          {/* Top Book */}
          <div className='top-book d-flex justify-content-around w-100 pt-5 '>
            <div>
              <img src={topOne} alt="" />
            </div>
            <div>
              <img src={topTwo} alt="" />
            </div>
            <div>
              <img src={topThree} alt="" />
            </div>
          </div>
        </div>

        <div className='right-banner col-7 '>
          <img className='img-fluid w-100 overflow-hidden' src={rightBanner} alt="" />
        </div>

      </div>
    </div>
  );
}

export default HeaderBanner;