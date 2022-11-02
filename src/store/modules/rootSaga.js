import { all } from 'redux-saga/effects'
import user from './user/saga'

export default function* rootSaga() {
    //[user, chat, etc..]
  return yield all([user])
}