import axios from 'axios';

export interface TemplateParams {
  name: string;
  email: string;
  message: string;
}

const userId = import.meta.env.VITE_EMAILJS_USER_ID;
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

export async function sendEmail(templateParams: TemplateParams) {
  const response = await axios.post(
    `https://api.emailjs.com/api/v1.0/email/send`,
    {
      user_id: userId,
      service_id: serviceId,
      template_id: templateId,
      template_params: templateParams,
    }
  );
  return response;
}
