import { useMutation } from '@tanstack/react-query';
import { sendEmail, TemplateParams } from '../services/emailService';

export function useSendEmail() {
  const mutation = useMutation({
    mutationFn: (payload: TemplateParams) => sendEmail(payload),
  });
  return mutation;
}
