import {z} from 'zod'

export const registerSchema = z.object({
  username: z.string({
    required_error: 'Usuario es requerido.',
  }),
  email: z.string({
    required_error: 'Correo Electronico es requerido.',
  }).email({
    message: 'Correo Electronico no valido.',
  }),
  password: z.string({
    required_error: 'Contraseña es requerida.',
  }).min(8, {
    message: 'Contraseña incorrecta. (min. 8 caracteres).',
  }),
})

export const loginSchema = z.object({
  email: z.string({
    required_error: 'Correo Electronico es requerido.',
  }).email({
    message: 'Correo Electronico no valido.',
  }),
  password: z.string({
    required_error: 'Contraseña es requerida.',
  }).min(8, {
    message: 'Contraseña incorrecta. (min. 8 caracteres).',
  }),
})
