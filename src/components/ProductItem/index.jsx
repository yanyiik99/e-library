
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import MyBtn from "../MyBtn";
import './ProductItem.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import axios from "axios";


function ProductItems() {
  const books = useSelector((state) => {
    return state.books
  })
  const [getBuku, setGetBuku] = useState([])
  const getUsername = JSON.parse(localStorage.getItem("username"))


  const navigate = useNavigate();

  const api = axios.create({
    baseURL: 'https://kawahedukasibackend.herokuapp.com',
    timeout: 5000,
  })

  useEffect(() => {
    api
      .get('/content/data/' + getUsername)
      .then((ress) => {
        setGetBuku(ress.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, []);


  return (
    <div className="row">
      <div className="col-12 d-flex justify-content-center align-items-center flex-wrap">
        {
          getBuku.map((el) => {
            return (
              <Card
                key={el.id}
                className="product-items m-3 justify-self-start align-self-start"
              >
                <img
                  src={el.image}
                  className="product-img"
                  alt=""
                />
                <Card.Body >
                  <Card.Title>
                    <p>{el.name}</p>
                  </Card.Title>
                  <Card.Text >
                    <span>{el.description1}</span>
                  </Card.Text>
                  <MyBtn
                    style={{ backgroundColor: "#FF9C41" }}
                    label="Detail Buku"
                    onClick={() => {
                      navigate(`/Product/DetailProduct/${el.id}`)
                    }}
                  />
                </Card.Body>
              </Card>
            );
          })
        }
      </div>
    </div>
  );
}

export default ProductItems;
