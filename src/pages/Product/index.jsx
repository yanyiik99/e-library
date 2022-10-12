import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./Product.css";
import ProductItems from "../../components/ProductItem";
import Modal from "../../layouts/Modal";
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner';

function Product() {

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false)
    }, 3000);

  }, [])


  function ShowProduct() {
    if (isLoading) {
      return (
        <>
          <div className="mt-5 pt-5 d-flex justify-content-center">
            <Spinner className="mt-5" animation="border" variant="warning" />
          </div>
        </>
      )
    }

    else {
      return (
        <Container className="mt-5 pt-5" >
          <Row className="product-head">
            <h1 className="text-center">Baca Buku Tanpa Perlu Ribet</h1>
          </Row>
          <Modal />
          <div className="product-row">
            <ProductItems />
          </div>
        </Container>
      )
    }
  }

  return (
    <div>
      <ShowProduct />
    </div>
  );
}

export default Product;
