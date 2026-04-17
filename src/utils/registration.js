import { registrationFormUrl } from '../data/content'

export function getRegistrationFormUrl() {
  const formUrl = registrationFormUrl?.trim()
  return formUrl ? formUrl : null
}

export function handleRegistrationRedirect(navigate) {
  const formUrl = getRegistrationFormUrl()

  if (formUrl) {
    window.open(formUrl, '_blank', 'noopener,noreferrer')
    return
  }

  navigate('/register')
}
