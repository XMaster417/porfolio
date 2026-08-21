import { useState } from 'react'

const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
const hasAccessKey = accessKey && accessKey !== 'YOUR_ACCESS_KEY_HERE'

const useContactForm = () => {
  const [submission, setSubmission] = useState({ status: 'idle', message: '' })

  const submitContactForm = async (event) => {
    event.preventDefault()

    if (!hasAccessKey) {
      setSubmission({
        status: 'error',
        message: 'Agrega tu access key de Web3Forms en el archivo .env.',
      })
      return
    }

    const form = event.currentTarget
    const formData = new FormData(form)
    formData.append('access_key', accessKey)
    formData.append('subject', 'New message from my portfolio')

    setSubmission({ status: 'submitting', message: 'Sending message...' })

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'The message could not be sent.')
      }

      form.reset()
      setSubmission({
        status: 'success',
        message: 'Message sent. I will get back to you soon.',
      })
    } catch (error) {
      setSubmission({
        status: 'error',
        message: error.message || 'The message could not be sent. Please try again.',
      })
    }
  }

  const clearSubmission = () => {
    if (submission.status !== 'idle' && submission.status !== 'submitting') {
      setSubmission({ status: 'idle', message: '' })
    }
  }

  return {
    isSubmitting: submission.status === 'submitting',
    submission,
    submitContactForm,
    clearSubmission,
  }
}

export default useContactForm
