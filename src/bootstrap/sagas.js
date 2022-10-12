import { all, call, put, takeLatest } from 'redux-saga/effects';
import * as API from './apis';
import * as ACTION from './actions';
import * as CONST from './constants';

function* login({ payload }) {
  try {
    // Call API
    const response = yield call(API.loginApi, payload);

    // if success
    yield put(ACTION.loginSucces(response?.data));

  } catch (error) {
    // if failed
    console.log({ error });
    yield put(ACTION.loginFailed({ error: 'Salah Username/Password' }));
  }
}

const bootstrap = [takeLatest(CONST.LOGIN, login)];

export function* bootstrapSaga() {
  yield all([...bootstrap]);
}