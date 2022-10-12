import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import MyBtn from '../MyBtn';
import './CardMember.css';

const TeamCard = ({ nama, foto, background, work, hobby }) => {
    return (
        <Card className="card-team">
            <Card.Img className="img" src={foto} alt={nama} />
            <Card.Body>
                <Card.Title className="nama">{nama}</Card.Title>
                <Card.Text className="text">
                    Background : {background} <br />
                    Work Experience : {work} <br />
                    Hobby : {hobby}
                </Card.Text>
                <MyBtn style={{ backgroundColor: "#FF9C41" }} label="Contact Me" />
            </Card.Body>
        </Card>
    )
}

export default TeamCard;