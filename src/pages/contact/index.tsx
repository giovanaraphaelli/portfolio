import { FaRegWindowMinimize } from 'react-icons/fa';
import { RiCheckboxMultipleBlankLine, RiCloseLargeFill } from 'react-icons/ri';
import { ContactForm } from './form';

export function Contact() {
  return (
    <div id="contact" className="bg-light-background dark:bg-dark-background">
      <div className="container mx-auto h-full flex flex-col justify-center items-center py-20 px-4">
        <div className="max-w-xl w-full border-2 rounded-md flex flex-col border-light-surface dark:border-dark-surface">
          <div className="h-10 w-full px-4 flex justify-end items-center gap-2 text-xl text-light-secondary/60 dark:text-dark-primary/40 bg-light-surface dark:bg-dark-surface">
            <FaRegWindowMinimize />
            <RiCheckboxMultipleBlankLine />
            <RiCloseLargeFill />
          </div>
          <div className="w-full py-12 px-6">
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
