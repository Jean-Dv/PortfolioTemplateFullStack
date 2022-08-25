import Swal from 'sweetalert2'
import { FormDataProps } from '../components/types'
import CONFIG from '../config/config.json'

const Toast = Swal.mixin({
  toast: true,
  position: 'top',
  showConfirmButton: false,
  timer: 2500,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  },
})

function sendEmail(values: FormDataProps) {
  const { apiURL, subjectDefault } = CONFIG

  return fetch(`${apiURL}/api/v1/mail`, {
    method: 'POST',
    body: JSON.stringify({
      from: values.email,
      subject: subjectDefault,
      text: values.message,
      fullname: values.fullname,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export { sendEmail, Toast }
