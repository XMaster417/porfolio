import { useEffect, useState } from 'react'
import { z } from 'zod'
import contactSchema, {
  contactFieldConstraints,
  emailDisallowedPattern,
  messageDisallowedPattern,
  nameDisallowedPattern,
} from '../schemas/contactSchema'

const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
const hasAccessKey = accessKey && accessKey !== 'YOUR_ACCESS_KEY_HERE'

const getContactData = (formData) => ({
  name: String(formData.get('name') ?? ''),
  contactEmail: String(formData.get('contactEmail') ?? ''),
  message: String(formData.get('message') ?? ''),
})

const useContactForm = () => {
  const [fieldErrors, setFieldErrors] = useState({})
  const [submission, setSubmission] = useState({ status: 'idle', message: '' })

  useEffect(() => {
    if (submission.status !== 'success') return undefined

    const timeoutId = window.setTimeout(() => {
      setSubmission({ status: 'idle', message: '' })
    }, 5000)

    return () => window.clearTimeout(timeoutId)
  }, [submission.status])

  const validateField = (name, value) => {
    const fieldSchema = contactSchema.shape[name]
    if (!fieldSchema) return

    const result = fieldSchema.safeParse(value)

    setFieldErrors((currentErrors) => {
      const nextErrors = { ...currentErrors }

      if (result.success) {
        delete nextErrors[name]
      } else {
        nextErrors[name] = result.error.issues.map((issue) => issue.message)
      }

      return nextErrors
    })
  }

  const validateContactField = (event) => {
    validateField(event.target.name, event.target.value)
  }

  const handleContactChange = (event) => {
    const { name } = event.target
    const maxLength = contactFieldConstraints[name]?.maxLength
    let disallowedPattern

    if (name === 'name') disallowedPattern = nameDisallowedPattern
    if (name === 'contactEmail') disallowedPattern = emailDisallowedPattern
    if (name === 'message') disallowedPattern = messageDisallowedPattern

    const sanitizedValue = disallowedPattern
      ? event.target.value.replace(disallowedPattern, '')
      : event.target.value
    const value = maxLength ? sanitizedValue.slice(0, maxLength) : sanitizedValue

    if (event.target.value !== value) event.target.value = value

    if (name in fieldErrors) validateField(name, value)

    setSubmission((currentSubmission) => (
      currentSubmission.status !== 'idle' && currentSubmission.status !== 'submitting'
        ? { status: 'idle', message: '' }
        : currentSubmission
    ))
  }

  const submitContactForm = async (event) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)
    const validation = contactSchema.safeParse(getContactData(formData))

    if (!validation.success) {
      const errors = z.flattenError(validation.error).fieldErrors
      const firstInvalidField = validation.error.issues[0]?.path[0]

      setFieldErrors(errors)
      setSubmission({ status: 'idle', message: '' })
      form.elements.namedItem(firstInvalidField)?.focus()
      return
    }

    setFieldErrors({})

    if (!hasAccessKey) {
      setSubmission({
        status: 'error',
        message: 'Agrega tu access key de Web3Forms en el archivo .env.',
      })
      return
    }

    Object.entries(validation.data).forEach(([name, value]) => formData.set(name, value))
    formData.delete('contactEmail')
    formData.set('contact_email', validation.data.contactEmail)
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
    setSubmission((currentSubmission) => (
      currentSubmission.status !== 'idle' && currentSubmission.status !== 'submitting'
        ? { status: 'idle', message: '' }
        : currentSubmission
    ))
  }

  return {
    fieldErrors,
    isSubmitting: submission.status === 'submitting',
    submission,
    submitContactForm,
    clearSubmission,
    handleContactChange,
    validateContactField,
  }
}

export default useContactForm
