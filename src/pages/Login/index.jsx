import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../images/logo-e-library.png';
import { useState } from 'react';
import MyBtn from '../../components/MyBtn';
import Input from '../../components/Input';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './Login.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { login, setAuth } from '../../bootstrap/actions';



function Login() {
  const navigate = useNavigate();
  const [dataInput, setDataInput] = useState({});
  const [isPassSame, setIsPassSame] = useState(false);

  const [typePass, setTypePass] = useState('password');
  const [typePassConfirm, setTypePassConfirm] = useState('password');
  const [eyeIcon, setEyeIcon] = useState(faEyeSlash);
  const [eyeIcon2, setEyeIcon2] = useState(faEyeSlash);
  const { access_token, loginResponse } = useSelector((state) => state);

  const dispatch = useDispatch();

  const handlerEye = () => {
    if (typePass === 'password') {
      setEyeIcon(faEye);
      setTypePass('text');
    } else {
      setEyeIcon(faEyeSlash);
      setTypePass('password');
    }
  };

  const handlerEye2 = () => {
    if (typePassConfirm === 'password') {
      setEyeIcon2(faEye);
      setTypePassConfirm('text');
    } else {
      setEyeIcon2(faEyeSlash);
      setTypePassConfirm('password');
    }
  };

  useEffect(() => {
    if (loginResponse?.access_token) {
      // untuk menyimpan access token di redux tetapi saat ini kita tidak memerlukannya karena ketika di refresh access token tersebut akan hilang
      dispatch(setAuth({ access_token: loginResponse?.access_token }));

      // Opsi kedua kita menyimpan access token dan username di localStorage
      localStorage.setItem("token", JSON.stringify(loginResponse.access_token));
      localStorage.setItem("username", JSON.stringify(dataInput.username));
      window.location.reload();
    }
  }, [loginResponse, dataInput]);


  useEffect(() => {
    if (access_token) {
      // navigate('/Login');
      // console.log(access_token)
      console.log("INI TOKEN : ", access_token)
    }
  }, [navigate, access_token]);



  function handleLogin(e) {
    e.preventDefault();
    dispatch(login(dataInput));

  }






  return (
    <div className='login-background'>
      <div className='mb-5 p-5'>
        <div className='head-login d-flex flex-column align-items-center'>
          <div>
            <img src={Logo} alt='Logo E Library' />
          </div>
          <h1 className='text-color fw-bold'>Selamat Datang</h1>
          <span>silahkan login terlebih dahulu sebagai admin</span>
        </div>

        <div className='mt-5 container-body'>
          <div className='d-flex flex-column align-items-center'>
            <form onSubmit={handleLogin} >
              <Form.Group className='mb-3'>
                <Input
                  className='form-control username'
                  label='Username '
                  type='text'
                  value={dataInput.username}
                  placeholder='Username oneca'
                  onChange={(val) => {
                    setDataInput((prev) => ({ ...prev, username: val }));
                  }}
                />
              </Form.Group>

              <div className='d-flex align-items-center'>
                <Form.Group className='mb-3'>
                  <Input
                    className='form-control pw'
                    label='Password '
                    type={typePass}
                    placeholder='Password oneca123'
                    value={dataInput.password}
                    onChange={(val) => {
                      setDataInput((prev) => ({ ...prev, password: val }));
                      setIsPassSame(val === dataInput.confirmPass);
                    }}
                  />
                </Form.Group>
                <button className='col-1  btn-eye m-1 bg-transparent' onClick={handlerEye}>
                  <FontAwesomeIcon icon={eyeIcon} />
                </button>
              </div>

              <div className='d-flex align-items-center'>
                <Form.Group className='mb-3'>
                  <Input
                    className='form-control pw'
                    label='Konfirmasi Password '
                    type={typePassConfirm}
                    placeholder='Password oneca123'
                    value={dataInput.confirmPass}
                    onChange={(val) => {
                      setDataInput((prev) => ({ ...prev, confirmPass: val }));
                      setIsPassSame(dataInput.password === val);
                    }}
                    style={{
                      borderColor: !isPassSame ? 'orange' : '',
                    }}
                  />
                </Form.Group>
                <button className='col-1 btn-eye m-1 bg-transparent' onClick={handlerEye2}>
                  <FontAwesomeIcon icon={eyeIcon2} />
                </button>
              </div>

              <Form.Group className='mb-3'>
                <MyBtn

                  style={{ backgroundColor: "#FF9C41" }}
                  label='Login'
                  type='submit'
                  onClick={(e) => {
                    localStorage.getItem("user") ? navigate('/') : console.log('');
                  }}
                />
              </Form.Group>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
