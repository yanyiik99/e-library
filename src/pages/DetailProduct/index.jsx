import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import MyBtn from "../../components/MyBtn";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function DetailProduct() {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const access_token = JSON.parse(localStorage.getItem("token"));

  const params = useParams();
  const navigate = useNavigate();
  const [booksData, setBooksData] = useState([]);

  // GET DATA
  useEffect(() => {
    axios
      .get("https://kawahedukasibackend.herokuapp.com/content/data/oneca")
      .then((res) => setBooksData(res.data))
      .catch((err) => console.log(err));
  }, []);


  const [titleBook, setTitleBook] = useState("");
  const [imageBook, setImageBook] = useState("");
  const [categoryBook, setCategoryBook] = useState("");
  const [yearBook, setYearBook] = useState("");
  const [authorBook, setAuthorBook] = useState("");
  const [descBook, setDescBook] = useState("");

  // UPDATE DATA

  const api = axios.create({
    baseURL: 'https://kawahedukasibackend.herokuapp.com',
    timeout: 10000,
    headers: {
      access_token,
    }
  })


  function EditHandling(id) {
    // setIsEdit({ id: id });
    const books = [...booksData]
    books.forEach((e) => {
      if (e.id == params.id) {
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
    api.put('/content/update/' + params.id, {
      name: titleBook,
      image: imageBook,
      description1: categoryBook,
      description2: yearBook,
      description3: authorBook,
      description4: descBook,
    })
      .then((res) => {
        console.log(res)
        window.location.reload()
      })
      .catch((err) => {
        console.log(err)
      })
  }



  // DELETE DATA 
  function DeleteHandling() {
    api.delete('/content/delete/' + params.id)
      .then((ress) => {
        console.log(ress)
        navigate('/Product');
      })
      .catch((err) => {
        console.log(err)
      })
  }


  return (
    <div className="vh-100 bg-red">
      <div>
        {booksData.map((element) => {
          return (
            element.id == params.id && (
              <>
                <div>
                  <div className='mt-5 pt-5 '>
                    <div className='content flex-row d-flex justify-content-betwen'>

                      <div className='left-content col-7 pt-5 ps-5'>
                        <div className='btn-let mx-5'>
                          <MyBtn style={{ backgroundColor: "#BDB8B3" }} label="Kembali" onClick={() => {
                            navigate('/Product')
                          }} />
                        </div>

                        <div className='description mt-5 mx-5 d-flex justify-content-between'>
                          <div className='left-description '>
                            <p>Judul</p>
                            <p>Penulis</p>
                            <p>Kategori</p>
                            <p>Tahun Terbit</p>
                            <p>Deskripsi Buku</p>
                          </div>
                          <div className='right-description pe-5 me-4'>
                            <b>
                              <p>{element.name}</p>
                              <p>{element.description3}</p>
                              <p>{element.description1}</p>
                              <p>{element.description2}</p>
                            </b>
                          </div>


                        </div>
                        <h6 className='test mx-5 border border-dark rounded-2 py-4 px-2'>{element.description4}</h6>
                        <div className="m-4">
                          <MyBtn style={{ backgroundColor: "#EF4545", margin: "10px" }} label="Hapus" onClick={() => {
                            DeleteHandling(params.id)
                          }} />
                          <MyBtn style={{ backgroundColor: "#5C62F4", margin: "10px" }} label="Edit Buku" onClick={() => {
                            handleShow(EditHandling(params.id))
                          }} />
                        </div>
                      </div>
                      <div className='right-content col-6 mt-5 mx-5'>
                        <img className='img-fluid w-50 overflow-hidden' src={element.image} alt="" />
                      </div>
                    </div>
                  </div>

                </div>
              </>
            )
          );
        })}
      </div>




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
          <MyBtn style={{ backgroundColor: "#5C62F4" }} label="Edit Buku" onClick={updateHandling} />

        </Modal.Footer>
      </Modal>
    </div>
  );


}

export default DetailProduct;