import { ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';

export function Layout({
  children,
  subtitle,
  id,
}: {
  children: ReactNode;
  subtitle: string;
  id: string;
}) {
  return (
    <div id={id} className="bg-light-background dark:bg-dark-background">
      <div className="container mx-auto h-full lg:h-[calc(100vh-3.5rem)] flex flex-col justify-center items-center p-4">
        <h2 className="text-subtitle font-mono text-center text-light-primary dark:text-dark-secondary">
          <ReactMarkdown className="font-mono text-base lg:text-xl text-light-primary dark:text-dark-secondary">
            {subtitle}
          </ReactMarkdown>
        </h2>
        {children}
      </div>
    </div>
  );
}
