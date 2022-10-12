import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import HeaderBanner from '../../components/HeaderBanner';
import NewsLetter from '../../components/NewsLetter';
import Quotes from '../../components/Quotes';


function Home(){

  
  return(
    <div>
      <HeaderBanner/>
      <Quotes/>
      <NewsLetter />
      

    </div>
  );

}

export default Home;