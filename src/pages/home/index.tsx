import { Button } from '@/components/ui/button';
import { RiArrowDownDoubleFill } from 'react-icons/ri';

export function Home() {
  return (
    <div id="home" className="bg-light-background dark:bg-dark-background">
      <div className="container mx-auto h-screen flex flex-col justify-center items-center gap-6 px-4 py-4 relative">
        <span className="text-lg sm:text-xl md:text-2xl text-light-text dark:text-dark-text animate-slide-up">
          hello word!
        </span>
        <code className="font-mono text-3xl md:text-6xl text-light-primary dark:text-dark-secondary">
          {'<GiovanaRaphaelli/>'}
        </code>
        <p className="text-2xl md:text-4xl text-light-secondary dark:text-dark-primary ">
          desenvolvedora front-end
        </p>
        <Button variant="outline">
          <a href="cv_giovanaraphaelli.pdf" target="_blank">
            download CV
          </a>
        </Button>

        <RiArrowDownDoubleFill className="absolute bottom-5 text-4xl animate-bounce" />
      </div>
    </div>
  );
}
