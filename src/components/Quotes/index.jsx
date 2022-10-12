import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserLock } from '@fortawesome/free-solid-svg-icons';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import './Quotes.css';
import { Fragment } from 'react';


// Images
import steve from '../../images/steve.png';

const textColor = {
  color: "#525252",
  textSecColor : {
    color: "#969696",
  }
}

const bgBlue = {
  backgroundColor: "#B8CCFF",
  bgPurple: {
    backgroundColor: "#D7B8FF",
    bgOrange: {
      backgroundColor: "#FFE0B0",
      bgGreen: {
        backgroundColor: "#BEFFB8",
      }
    }
  }
}

const ColorBlue = {
  color: "#5581F3",
  ColorPurpe: {
    color: "#A35DFD",
    ColorOrange: {
      color: "#F4B14B", 
      ColorGreen: {
        color: "#52F444"
      },
    }
  }
}

const faPaperPlaneStyle = {
  fontSize: "25.5px",
  padding: "7.8px",
  textAlign: "center"
}


function CardQuotes(props){
  return (
    <Card className='m-4 card' style={{ width: '20rem' }}>
      <Card.Body>
        <div className='p-2 wrap-circle' style={props.bgColor}>
          <div className='card-icon'>
            {props.passicon}
          </div>
        </div>
        <Card.Title className='pt-3 fw-bold' style={textColor}>{props.title}</Card.Title>
        <Card.Text className='mb-5'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

function Quotes(){
  return(
    <Container className='pt-5 mt-5'>
      <div className='quotes d-flex row mt-5'>
        <div className='left-quotes d-flex flex-column justify-content-center align-items-center col-4'>
          <div className='img-steve'>
            <img className='img-fluid' src={steve} alt="" />
          </div>
          <h4 className='mt-3 fw-bold' style={textColor}>Steve Jobs</h4>
          <span className='fw-bold' style={textColor.textSecColor}>Founder Apple Inc.</span>
          <p className='text-center mt-5 fw-bold'>
            “The Only  Way To Do Great Work Is To Love What Do You Do”
          </p>
        </div>
        <div className='right-quotes d-flex justify-content-end flex-wrap col-8'>
          <CardQuotes 
            title="Keamanan Terjaga" 
            bgColor={bgBlue}
            passicon={ <Fragment> <FontAwesomeIcon icon={faUserLock} style={ {...faPaperPlaneStyle, ...ColorBlue} } /> </Fragment> } 
          />
          <CardQuotes 
            title="Dapatkan Buku Menarik" 
            bgColor={bgBlue.bgPurple}
            passicon={ <Fragment> <FontAwesomeIcon icon={faLayerGroup} style={ {...faPaperPlaneStyle, ...ColorBlue.ColorPurpe} } /> </Fragment> } 
          />
          <CardQuotes 
            title="Bisa Menyewa Buku Bacaan" 
            bgColor={bgBlue.bgPurple.bgOrange}
            passicon={ <Fragment> <FontAwesomeIcon icon={faMoneyCheckDollar} style={ {...faPaperPlaneStyle, ...ColorBlue.ColorPurpe.ColorOrange} } /> </Fragment> } 
          />
          <CardQuotes 
            title="Ramah Lingkungan" 
            bgColor={bgBlue.bgPurple.bgOrange.bgGreen}
            passicon={ <Fragment> <FontAwesomeIcon icon={faLeaf} style={ {...faPaperPlaneStyle, ...ColorBlue.ColorPurpe.ColorOrange.ColorGreen} } /> </Fragment> } 
          />
        </div>
      </div>
    </Container>
  );
}

export default Quotes;