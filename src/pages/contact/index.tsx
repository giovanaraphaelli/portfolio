import { FaRegWindowMinimize } from 'react-icons/fa';
import { RiCheckboxMultipleBlankLine, RiCloseLargeFill } from 'react-icons/ri';
import { ContactForm } from './form';

export function Contact() {
  return (
    <div id="contact" className="bg-light-background dark:bg-dark-background">
      <div className="container mx-auto h-full lg:h-[calc(100vh-3.5rem)] flex flex-col justify-center items-center p-4">
        <div className="max-w-xl w-full border-2 flex flex-col border-light-accent dark:border-dark-accent">
          <div className="h-10 w-full px-4 flex justify-end items-center gap-2 text-xl text-light-secondary dark:text-dark-primary bg-light-accent dark:bg-dark-accent">
            <FaRegWindowMinimize />
            <RiCheckboxMultipleBlankLine />
            <RiCloseLargeFill />
          </div>
          <div className="py-12 px-6">
            <h2 className="text-xl font-mono font-bold text-center text-light-secondary dark:text-dark-primary mb-6">
              entre em contato comigo!
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
