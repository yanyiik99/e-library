import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import './navbar.css';
import MyBtn from '../../components/MyBtn';
import logo from '../../images/logo-e-library.png';
import { useState, useEffect } from "react";

function NavbarLayout() {

    const navigate = useNavigate();

    const menus = [
        {
            label: 'Home',
            path: '/',
        },
        {
            label: 'Our Team',
            path: '/Team'
        },
        {
            label: 'Product',
            path: '/Product',
        },
    ];

    const login = [
        {
            label: 'Login',
            path: '/'
        }
    ]

    const logout = [
        {
            label: 'Logout',
            path: '/'
        }
    ]

    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {

        if (localStorage.getItem("token") !== null) {

            setIsLogin(true)
        } else {
            setIsLogin(false)
        }

    }, [isLogin])


    return (
        <div>
            <Navbar className='color-nav fixed-top shadow-lg' variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} alt='logo-e-library' height={60} />
                    </Navbar.Brand>
                    <Nav>
                        {
                            menus.map((menu, idx) => {
                                return (
                                    <Nav.Link key={idx} href={menu.path} className='me-3'>
                                        {menu.label}
                                    </Nav.Link>
                                )
                            })
                        }
                        {
                            !isLogin ?
                                login.map((el, idx) => {
                                    return <MyBtn
                                        style={{ backgoundColor: "#FF9C41" }}
                                        key={idx}
                                        label={el.label}
                                        onClick={
                                            () => {
                                                navigate(el.path || '/Login');
                                            }
                                        } />
                                })
                                :
                                logout.map((el, idx) => {
                                    return <MyBtn
                                        style={{ backgroundColor: "#FF9C41" }}
                                        key={idx}
                                        label={el.label}
                                        onClick={
                                            () => {
                                                navigate(el.path);
                                                window.location.reload();
                                                localStorage.removeItem("token");
                                                localStorage.removeItem("username");
                                            }
                                        } />
                                })
                        }
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavbarLayout;