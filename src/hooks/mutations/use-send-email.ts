import { useMutation } from '@tanstack/react-query';
import { sendEmail, TemplateParams } from '../../services/send-email';

export function useSendEmail() {
  const mutation = useMutation({
    mutationFn: (payload: TemplateParams) => sendEmail(payload),
  });
  return mutation;
}
