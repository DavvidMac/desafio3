import { call, put, all, takeLatest } from 'redux-saga/effects'
import { loginSuccess } from './actions'
import httpRequest from '../../../httpRequest'
function* login({ values }) {
  console.log(
    'Aguardando o envio de dados...'
  )
  const response = yield call(httpRequest.post, values)
  yield put(loginSuccess(response))
}

export default all([takeLatest('LOGIN_REQUEST', login)])