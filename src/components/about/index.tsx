import { Button } from '../button';

export function About() {
  return (
    <div id="#home" className="bg-light-background dark:bg-dark-background ">
      <div className="container mx-auto px-2 py-2 h-[calc(100vh-3.5rem)] flex flex-col justify-center items-center gap-6">
        <span className="text-lg text-light-text dark:text-dark-text ">
          hello word!
        </span>
        <h1 className="text-6xl font-medium text-light-primary dark:text-dark-secondary font-mono">
          {'< GiovanaRaphaelli />'}
        </h1>
        <p className="text-2xl text-light-secondary dark:text-dark-primary ">
          desenvolvedora front-end
        </p>
        <Button>
          <a href="cv_giovanaraphaelli.pdf" target="_blank">
            download CV
          </a>
        </Button>
      </div>
    </div>
  );
}
