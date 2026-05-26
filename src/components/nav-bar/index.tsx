import { useEffect, useState } from 'react';
import { IoMoon, IoSunny } from 'react-icons/io5';

const links = [
  { title: 'sobre', anchorId: '#about' },
  { title: 'trabalho', anchorId: '#projects' },
  { title: 'experiência', anchorId: '#experience' },
  { title: 'stack', anchorId: '#skills' },
  { title: 'contato', anchorId: '#contact' },
];

const borderClass = 'border border-light-secondary/40 dark:border-dark-secondary/30';

const availabilityDate = new Intl.DateTimeFormat('pt-BR', { month: 'short', year: 'numeric' })
  .format(new Date())
  .replace('.', '')
  .toLowerCase();

export function Navbar() {
  const getPreferredTheme = (): 'light' | 'dark' => {
    if (localStorage.getItem('theme')) {
      return localStorage.getItem('theme') as 'light' | 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  };

  const [theme, setTheme] = useState<'light' | 'dark'>(getPreferredTheme);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-light-background dark:bg-dark-background border-b border-light-secondary/25 dark:border-dark-secondary/20">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <a href="#home" className="flex items-center gap-3">
            <span className="text-base font-bold text-light-primary dark:text-dark-highlight">
              giovana raphaelli.
            </span>
            <span className="hidden sm:inline text-sm text-light-secondary dark:text-dark-text font-mono">
              ↳ front-end
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {links.map((item, index) => (
              <li key={index}>
                <a
                  href={item.anchorId}
                  className="text-base text-light-primary dark:text-dark-secondary hover:text-light-secondary dark:hover:text-dark-highlight transition-colors"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 px-2 rounded-full bg-light-accent dark:bg-dark-surface text-sm text-light-primary dark:text-dark-secondary py-0.5">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-blink flex-shrink-0" />
              disponivel para projetos · {availabilityDate}
            </div>

            <span className={`hidden md:flex w-9 h-9 items-center justify-center rounded-full ${borderClass} text-sm text-light-secondary dark:text-dark-secondary select-none`}>
              en
            </span>

            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              aria-label="Alternar tema"
              className={`hidden md:flex w-9 h-9 items-center justify-center rounded-full ${borderClass} text-light-secondary dark:text-dark-secondary hover:text-light-primary dark:hover:text-dark-highlight transition-colors`}
            >
              {theme === 'light' ? <IoMoon size={16} /> : <IoSunny size={16} />}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Abrir menu"
              className={`md:hidden w-9 h-9 flex items-center justify-center rounded-full ${borderClass} text-light-secondary dark:text-dark-text transition-colors`}
            >
              {menuOpen ? (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <line x1="1" y1="1" x2="13" y2="13" />
                  <line x1="13" y1="1" x2="1" y2="13" />
                </svg>
              ) : (
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <line x1="0" y1="1" x2="14" y2="1" />
                  <line x1="0" y1="5" x2="14" y2="5" />
                  <line x1="0" y1="9" x2="14" y2="9" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-light-surface dark:bg-dark-surface flex flex-col">
          <div className="flex-1 flex flex-col justify-center px-8">
            <ul className="flex flex-col">
              {links.map((item, index) => (
                <li key={index} className="border-b border-light-secondary/20 dark:border-dark-secondary/30">
                  <a
                    href={item.anchorId}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center py-6 text-2xl font-bold text-light-primary dark:text-dark-highlight hover:text-light-secondary dark:hover:text-dark-secondary transition-colors"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-center gap-3 px-6 pb-10">
            <div className="flex items-center gap-2 px-4 rounded-full bg-light-accent dark:bg-dark-surface text-sm text-light-primary dark:text-dark-secondary py-1">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-blink flex-shrink-0" />
              disponivel · {availabilityDate}
            </div>

            <span className={`w-10 h-10 flex items-center justify-center rounded-full ${borderClass} text-sm text-light-secondary dark:text-dark-text select-none`}>
              en
            </span>

            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              aria-label="Alternar tema"
              className={`w-10 h-10 flex items-center justify-center rounded-full ${borderClass} text-light-secondary dark:text-dark-secondary hover:text-light-primary dark:hover:text-dark-highlight transition-colors`}
            >
              {theme === 'light' ? <IoMoon size={16} /> : <IoSunny size={16} />}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
