import actionTypes from './actionTypes'
import parseBarList from '../helpers/parseBar'

import { batchActions } from 'redux-batched-actions'

// Loading indicator
export const loading = (bool) => (
  { type: actionTypes.LOADING, payload: bool }
)

// Authentication
export const showLoginForm = (bool) => (
  { type: actionTypes.SHOW_LOGIN_FORM, payload: bool }
)

export const login = (id) => (
  { type: actionTypes.LOGIN, payload: {logged: true, user: id} }
)

export const logout = () => (
  { type: actionTypes.LOGOUT, payload: {logged: false, user: null} }
)

export const checkUser = () => dispatch => {
  dispatch(loading(true))

  fetch('/user/auth')
  .then(response => {
    if (response.status !== 200) {  
      return Promise.reject('Authentication failed') 
    }
    
    return response.json()
  })
  .then(data => {
    // localStorage.setItem('user', JSON.stringify(data))
    dispatch(batchActions([!!data.user ? login(data.user._id) : logout(), loading(false)]))
  })
  .catch(err => {
    dispatch(batchActions([logout(), loading(false), error('CONNECTION_ERROR')]))
  })
}

// Bars
export const setBars = (bars, location) => (
  { type: actionTypes.BARS, payload: { bars, location } }
)

export const getBars = location => dispatch => {
  dispatch(loading(true))
  
  fetch('/bar?location=' + location)  
  .then(response => {  
      // response jest instancją interfejsu Response
      if (response.status !== 200) {
          return Promise.reject('Zapytanie się nie powiodło');  
      }

      // zwracamy obiekt typu Promise zwracający dane w postaci JSON
      return response.json()
  })
  .then(data => {
    if (data.statusCode == 400) {
      dispatch(batchActions([setBars([], location), loading(false), error('LOCATION_NOT_FOUND')]))
    } else {
      localStorage.setItem('location', location)
      dispatch(batchActions([setBars(parseBarList(data), location), loading(false), error(null)]))
    }
  })
  .catch(err => {
    console.log('bars fetching error')
    dispatch(batchActions([loading(false), error('CONNECTION_ERROR')]))
  })
}

// Local login and signup
export const localLogin = ({ username, password }) => dispatch => {
  dispatch(loading(true))

  fetch('/user/auth/local/login', {
    method: 'post',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({ username, password })
  })
  .then(response => {
    return response.json();
  })
  .then(data => {
    if (data.code) return dispatch(batchActions([loading(false), error(data.code, data.message)]))
    else return dispatch(batchActions([loading(false), showLoginForm(false), error('logged')]))
  })
  .catch(err => {
    dispatch(batchActions([loading(false), error('LOGIN_ERROR', 'We have some connection problems.')]))
  })

}

export const localRegister = ({ username, password }) => dispatch => {
  
  dispatch(loading(true))

  fetch('/user/auth/local/register', {
    method: 'post',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({ username, password })
  })
  .then(response => {
    return response.json();
  })
  .then(data => {
    if (data.code) return dispatch(batchActions([loading(false), error(data.code, data.message)]))
    else return dispatch(batchActions([loading(false), showLoginForm(false), error('logged')]))
  })
  .catch(err => {
    dispatch(batchActions([loading(false), error('LOGIN_ERROR', 'We have some connection problems.')]))
  })
}

// Error
export const error = (error, text) => (
  { type: actionTypes.ERROR, payload: { error, text } }
)