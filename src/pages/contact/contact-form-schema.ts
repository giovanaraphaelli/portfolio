import { z } from 'zod';

export const ContactFormSchema = z.object({
  name: z.string().min(1, 'Campo obrigatório!'),
  email: z.string().email('E-mail inválido!'),
  message: z
    .string()
    .min(1, 'Campo obrigatório!')
    .max(500, 'Máximo de 500 caracteres'),
});

export type ContactFormValues = z.infer<typeof ContactFormSchema>;
