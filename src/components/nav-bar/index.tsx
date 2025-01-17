import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { useEffect, useState } from 'react';
import { IoMenu, IoMoon, IoSunny } from 'react-icons/io5';
import { Button } from '../ui/button';

const links = [
  { title: 'Sobre', anchorId: '#about' },
  { title: 'Projetos', anchorId: '#projects' },
  { title: 'Skills', anchorId: '#skills' },
  { title: 'Contato', anchorId: '#contact' },
];

export function Navbar() {
  const getPreferredTheme = () => {
    if (localStorage.getItem('theme')) {
      return localStorage.getItem('theme') as 'light' | 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  };

  const [theme, setTheme] = useState<'light' | 'dark'>(getPreferredTheme());
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  //Gambiarra pq o shadcn está bugado!!
  const handleLinkClick = (href: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView();
      }
    }, 300);
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 56);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-light-surface dark:bg-dark-surface shadow-md'
          : 'bg-light-background dark:bg-dark-background'
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-sm font-bold text-light-primary dark:text-dark-secondary">
          <a href="#home">@giovanaraphaelli</a>
        </h1>

        <div className="flex gap-4">
          <div className="hidden md:flex gap-5 items-center">
            <ul className="flex gap-2 ">
              {links.map((item, index) => (
                <li key={index}>
                  <Button variant="link" size="md">
                    <a href={item.anchorId}>{item.title}</a>
                  </Button>
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="p-2 shadow-md rounded-full bg-light-accent dark:bg-dark-accent text-light-secondary dark:text-dark-primary hover:bg-light-secondary dark:hover:bg-dark-primary hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-300"
          >
            {theme === 'light' ? (
              <IoMoon className="h-6 w-6" aria-label="Tema Dark" />
            ) : (
              <IoSunny className="h-6 w-6" aria-label="Tema Light" />
            )}
          </button>

          <Drawer open={menuOpen} onOpenChange={setMenuOpen}>
            <DrawerTrigger className="md:hidden p-2 shadow-md rounded-full bg-light-accent dark:bg-dark-accent text-light-secondary dark:text-dark-primary ">
              <IoMenu className="h-6 w-6" />
            </DrawerTrigger>
            <DrawerContent>
              <ul className="flex flex-col gap-4 items-center">
                {links.map((item, index) => (
                  <li key={index}>
                    <Button
                      variant="link"
                      size="md"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(item.anchorId);
                      }}
                    >
                      <a href={item.anchorId}>{item.title}</a>
                    </Button>
                  </li>
                ))}
              </ul>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </nav>
  );
}
