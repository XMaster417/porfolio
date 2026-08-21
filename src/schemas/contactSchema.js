import { z } from 'zod'

const nameAllowedPattern = /^[A-Za-záéíóúÁÉÍÓÚ ]+$/
const emailAllowedPattern = /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~@-]+$/
const messageAllowedPattern = /^[A-Za-záéíóúÁÉÍÓÚ0-9\s!()_.,?-]+$/

export const nameDisallowedPattern = /[^A-Za-záéíóúÁÉÍÓÚ ]/g
export const emailDisallowedPattern = /[^A-Za-z0-9.,!#$%&'*+/=?^_`{|}~@-]/g
export const messageDisallowedPattern = /[^A-Za-záéíóúÁÉÍÓÚ0-9\s!()_.,?-]/g

export const contactFieldConstraints = {
  name: { minLength: 3, maxLength: 100 },
  contactEmail: { minLength: 3, maxLength: 100 },
  message: { minLength: 10, maxLength: 500 },
}

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(contactFieldConstraints.name.minLength, { message: 'Name must contain at least 3 characters.' })
    .max(contactFieldConstraints.name.maxLength, { message: 'Name must contain at most 100 characters.' })
    .regex(nameAllowedPattern, {
      message: 'Name can only contain letters from A-Z, a-z, accents and spaces.',
    }),
  contactEmail: z
    .string()
    .trim()
    .min(contactFieldConstraints.contactEmail.minLength, { message: 'E-mail must contain at least 3 characters.' })
    .max(contactFieldConstraints.contactEmail.maxLength, { message: 'E-mail must contain at most 100 characters.' })
    .regex(emailAllowedPattern, { message: 'E-mail contains unsupported characters.' })
    .email({ message: 'Enter a valid e-mail address, for example: john_doe@example.com. ' }),
  message: z
    .string()
    .trim()
    .min(contactFieldConstraints.message.minLength, { message: 'Message must contain at least 10 characters.' })
    .max(contactFieldConstraints.message.maxLength, { message: 'Message must contain at most 500 characters.' })
    .regex(messageAllowedPattern, {
      message: 'Message contains unsupported characters.',
    }),
})

export default contactSchema
