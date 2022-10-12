import { states } from './initialStates';
import * as CONST from "./constants";

const reducer = (state = states, action) => {
  const { type, payload } = action;

  switch (type) {
    case CONST.SET_BOOK:
      return {
        ...state.books,
        nama: payload.name,
        penerbit: payload.penerbit,
      };

    case CONST.SET_AUTH:
      return {
        ...state.user,
        access_token: payload.access_token
      };

    case CONST.LOGIN: // Panggil API
      return {
        ...state,
        loginFetch: true,
      };

    case CONST.LOGIN_SUCCES: // Login Sukses
      return {
        ...state,
        loginResponse: payload,
        loginFetch: false,
      };

    case CONST.LOGIN_FAILED: // login gagal
      return {
        ...state,
        loginError: payload,
        loginFetch: false,
      };

    case CONST.CREATE_BUKU:
      return {
        ...state,
        buku: payload.buku,
      }

    case CONST.GET_BUKU:
      return {
        ...state
      }

    default:
      return state
  }
}

export default reducer;