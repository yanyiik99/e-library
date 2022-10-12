import * as CONST from "./constants";

export const setBook = (payload) => {
  return {
    type: CONST.SET_BOOK,
    payload: payload,
  }
}

export const setAuth = (payload) => {
  return {
    type: CONST.SET_AUTH,
    payload: payload,
  }
}

export const login = (payload) => ({
  type: CONST.LOGIN,
  payload,
});

export const loginSucces = (payload) => ({
  type: CONST.LOGIN_SUCCES,
  payload,
});

export const loginFailed = (payload) => ({
  type: CONST.LOGIN_FAILED,
  payload,
});


export const createBuku = (payload) => ({
  type: CONST.CREATE_BUKU,
  payload,
})


export const getBuku = () => ({
  type: CONST.GET_BUKU,
})