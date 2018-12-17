import swal from 'sweetalert'

export const LOCATION_NOT_FOUND = () => swal({
  title: "Warning!",
  text: "Desired location does not exist!",
  icon: "error",
  button: "Try again!"
})

export const CONNECTION_ERROR = () => swal({
  title: "Error!",
  text: "There are some connection problems!",
  icon: "error",
  button: "Check later!"
})

export const FETCH_LOGIN_ERROR = (text) => swal({
  title: "Error!",
  text: text,
  icon: "error",
  button: "Try again later!"
})

export const LOGIN_ERROR = (text) => swal({
  title: "Error!",
  text: text,
  icon: "error",
  button: "Try again!"
})

export const CHECK_PASSWORD = (text) => swal({
  title: "Your password:",
  text: '- ' + text.reduce((a, b) => a + '\n- ' + b),
  icon: "error",
  button: "Try again!"
})

export const CHECK_USERNAME = (text) => swal({
  title: "Your username:",
  text: '- ' + text.reduce((a, b) => a + '\n- ' + b),
  icon: "error",
  button: "Try again!"
})

export const LOGGED = () => swal({
  title: "Great!",
  text:'You\'re logged now!',
  icon: "success",
  button: "OK!"
})
.then(value => {
  window.location.assign('/')
})

export const TAKEN = () => swal({
  title: "Error!",
  text:'Choosed username is alreade taken.',
  icon: "error",
  button: "Try again!"
})