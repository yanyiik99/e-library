
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from './layouts/Navbar';
import MyFooter from "./layouts/MyFooter";
import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleWare from "redux-saga";
import reducer from "./bootstrap/reducers";
import TestApi from "./pages/TestApi";
import * as Page from './pages';
import { bootstrapSaga } from "./bootstrap/sagas";


function App() {
  const sagaMiddleware = createSagaMiddleWare();
  const store = createStore(reducer, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(bootstrapSaga);

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {

    if (localStorage.getItem("token") !== null) {
      setIsLogin(true)

    } else {
      setIsLogin(false)
    }

  }, [isLogin])



  return (
    <Provider store={store}>
      <BrowserRouter>
        {
          !isLogin ?
            <>
              <Routes>
                <Route exact path='/' element={<Page.Login />} />
                <Route exact path='/Login' element={<Page.Login />} />
                <Route exact path='/Product' element={<Page.Login />} />
                <Route exact path='/Team' element={<Page.Login />} />
              </Routes>
            </>
            :
            <>
              <Navbar />
              <Routes>
                <Route exact path='/' element={<Page.Home />} />
                <Route exact path='/Team' element={<Page.Team />} />
                <Route exact path='/Product' element={<Page.Product />} />
                <Route exact path='/Login' element={<Page.Home />} />
                <Route exact path='/Product/:DetailProduct/:id' element={<Page.DetailProduct />} />
                <Route exact path='/Testing' element={<TestApi />} />
              </Routes>
              <MyFooter />
            </>
        }
      </BrowserRouter>
    </Provider>
  );
}

export default App;
