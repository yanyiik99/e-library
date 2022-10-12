import React, { useState } from 'react';
import MyBtn from "../../components/MyBtn";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CreateDataAxios from "./CreateDataAxios.jsx";


function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [titleBook, setTitleBook] = useState("");
  const [imageBook, setImageBook] = useState("");
  const [categoryBook, setCategoryBook] = useState("");
  const [yearBook, setYearBook] = useState("");
  const [authorBook, setAuthorBook] = useState("");
  const [descBook, setDescBook] = useState("");



  return (
    <>
      <div className='mx-5 px-5 my-4'>
        <MyBtn style={{ backgroundColor: "#198754" }} onClick={handleShow} label="Tambah Buku" />
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tambahkan Buku Baru</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Judul Buku</Form.Label>
              <Form.Control
                value={titleBook}
                onChange={(e) => setTitleBook(e.target.value)}
                placeholder="Judul Buku"
                required
                autoFocus
              />
            </Form.Group>
            <Row>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Kategori</Form.Label>
                <Form.Select
                  value={categoryBook}
                  onChange={(e) => setCategoryBook(e.target.value)}
                >
                  <option value="Novel">Novel</option>
                  <option value="Komik">Komik</option>
                  <option value="Dongeng">Dongeng</option>
                  <option value="Biografi">Biografi</option>
                  <option value="Karya Ilmiah">Karya Ilmiah</option>
                  <option value="Kamus">Kamus</option>
                  <option value="Panduan">Panduan</option>
                  <option value="Majalah">Majalah</option>
                  <option value="Buku Digital">Buku Digital</option>
                  <option value="dll">dll..</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Tahun Terbit</Form.Label>
                <Form.Control
                  value={yearBook}
                  onChange={(e) => setYearBook(e.target.value)}
                  type="date"
                  required
                />
              </Form.Group>
            </Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Penulis</Form.Label>
              <Form.Control
                value={authorBook}
                onChange={(e) => setAuthorBook(e.target.value)}
                placeholder="Penulis"
                required
              />
            </Form.Group>
            <Form.Group
              className="mt-3 mb-2"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Deskripsi Buku</Form.Label>
              <Form.Control
                value={descBook}
                onChange={(e) => setDescBook(e.target.value)}
                placeholder="Deskripsi"
                as="textarea"
                rows={3}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Cover Buku</Form.Label>
              <Form.Control
                value={imageBook}
                onChange={(e) => setImageBook(e.target.value)}
                placeholder="URL cover buku"
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <CreateDataAxios
            label="Create Data"
            className="btn btn-success"
            name={titleBook}
            image={imageBook}
            description1={categoryBook}
            description2={yearBook}
            description3={authorBook}
            description4={descBook}
          />
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
