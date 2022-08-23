import emailjs from '@emailjs/browser'
import CONFIG from '../config/config.json'
import Swal from 'sweetalert2'

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

function sendEmail(e: React.FormEvent<HTMLFormElement>) {
  const { serviceID, templateID, publicAPIKEY } = CONFIG.emailConfig

  return emailjs.sendForm(serviceID, templateID, e.currentTarget, publicAPIKEY)
}

export { sendEmail, Toast }
