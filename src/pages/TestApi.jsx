import axios from "axios";
import { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';


function TestApi() {
  const access_token = JSON.parse(localStorage.getItem("token"));
  const username = JSON.parse(localStorage.getItem("username"));

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [titleBook, setTitleBook] = useState("");
  const [imageBook, setImageBook] = useState("");
  const [categoryBook, setCategoryBook] = useState("");
  const [yearBook, setYearBook] = useState("");
  const [authorBook, setAuthorBook] = useState("");
  const [descBook, setDescBook] = useState("");

  // GET DATA API
  const [getData, setGetData] = useState([]);
  useEffect(() => {
    // e.preventDefault();
    axios.get('https://kawahedukasibackend.herokuapp.com/content/data/' + username)
      .then((res) => {
        // console.log(res.data);
        setGetData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })

  }, [])


  // EDIT DATA
  const [isEdit, setIsEdit] = useState({ id: null, status: false });

  const api = axios.create({
    baseURL: 'https://kawahedukasibackend.herokuapp.com',
    timeout: 10000,
    headers: {
      access_token,
    }
  })


  function EditHandling(id) {
    setIsEdit({ id: id });
    const buku = [...getData]
    buku.forEach((e) => {
      if (e.id === isEdit.id) {
        setTitleBook(e.name)
        setImageBook(e.image)
        setCategoryBook(e.description1)
        setYearBook(e.description2)
        setAuthorBook(e.description3)
        setDescBook(e.description4)
      }
    })
  }


  function updateHandling() {
    api.put('/content/update/' + isEdit.id, {
      name: titleBook,
      image: imageBook,
      description1: categoryBook,
      description2: yearBook,
      description3: authorBook,
      description4: descBook,
    })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
    console.log("HANDLE EDIT")
  }




  return (
    <div style={{ marginTop: "100px" }}>
      <h1>This is Test API</h1>
      {
        getData.map((el) => {
          return (
            <div key={el.id} className="m-5">
              <p>
                ID : {el.id}
              </p>
              <h4>
                {el.name}
              </h4>
              <p>
                {el.description1}
              </p>
              <button
                onClick={(id) => {
                  handleShow(EditHandling(el.id))
                }}
              >
                EDIT
              </button>

            </div>
          )
        })
      }

      {/* MODAL SHOW */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Buku</Modal.Title>
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
            {/* <Form.Group className="mt-2 mb-2" controlId="formFile">
              <Form.Label>Cover Buku</Form.Label>
              <Form.Control
                value={imageBook}
                onChange={(e) => setImageBook(e.target.value)}
                type="file"
                size="sm"
                required
              />
            </Form.Group> */}
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
          <Button variant="primary" onClick={updateHandling}>EDIT DATA</Button>
          {/* <CreateDataAxios
            label="Create Data"
            className="btn btn-success"
            name={titleBook}
            image={imageBook}
            description1={categoryBook}
            description2={yearBook}
            description3={authorBook}
            description4={descBook}
          /> */}
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default TestApi;