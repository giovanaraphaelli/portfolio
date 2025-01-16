import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { ContactFormSchema, ContactFormValues } from './contact-form-schema';
import { useSendEmail } from '@/hooks/use-send-email';
import { useToast } from '@/hooks/use-toast';

export function ContactForm() {
  const { mutate, isPending } = useSendEmail();
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(data: ContactFormValues) {
    mutate(data, {
      onSuccess: () => {
        form.reset();
        toast({
          title: 'Sucesso!',
          description: 'Mensagem enviada com sucesso.',
        });
      },
      onError: (error: Error) => {
        form.reset();
        toast({
          title: 'Erro!',
          description: `Falha ao enviar mensagem: ${
            error.message || 'Tente novamente mais tarde.'
          }`,
        });
      },
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold text-light-secondary dark:text-dark-primary">
                Nome
              </FormLabel>
              <FormControl>
                <Input placeholder="Digite seu nome" {...field} />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold text-light-secondary dark:text-dark-primary">
                Email
              </FormLabel>
              <FormControl>
                <Input type="email" placeholder="Digite seu email" {...field} />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold text-light-secondary dark:text-dark-primary">
                Mensagem
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Digite sua mensagem..."
                  className="resize-none h-32"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <div className="flex justify-center">
          <Button type="submit" disabled={isPending}>
            {isPending ? 'enviando..' : 'enviar'}
          </Button>
        </div>
      </form>
    </Form>
  );
}
