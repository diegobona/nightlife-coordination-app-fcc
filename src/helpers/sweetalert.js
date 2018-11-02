import swal from 'sweetalert'

export const LOCATION_NOT_FOUND = () => swal({
  title: "Warning!",
  text: "Desired location does not exist!",
  icon: "error",
  button: "Try again!",
})