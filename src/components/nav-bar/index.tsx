import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { useEffect, useState } from 'react';
import { IoMenu, IoMoon, IoSunny } from 'react-icons/io5';

const links = [
  { name: 'Sobre', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projetos', href: '#projects' },
  { name: 'Contato', href: '#contact' },
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
        {/* Logo */}
        <h1 className="text-sm font-bold text-light-primary dark:text-dark-secondary">
          <a href="#home">@giovanaraphaelli</a>
        </h1>

        <div className="flex gap-4">
          {/* Menu Desktop */}
          <div className="hidden md:flex gap-5 items-center">
            <ul className="flex gap-5 font-bold text-light-secondary dark:text-dark-primary transition-colors duration-300">
              {links.map((item, index) => (
                <li key={index}>
                  <a
                    className="hover:underline hover:text-light-primary dark:hover:text-dark-secondary"
                    href={item.href}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Botão de troca de tema */}
          <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="p-2 shadow-md rounded-full bg-light-accent dark:bg-dark-accent text-light-secondary dark:text-dark-primary hover:bg-light-secondary dark:hover:bg-dark-primary hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-300"
          >
            {theme === 'light' ? (
              <IoMoon className="h-6 w-6" />
            ) : (
              <IoSunny className="h-6 w-6" />
            )}
          </button>

          {/* Menu Mobile */}
          <Drawer open={menuOpen} onOpenChange={setMenuOpen}>
            <DrawerTrigger className="md:hidden p-2 shadow-md rounded-full bg-light-accent dark:bg-dark-accent text-light-secondary dark:text-dark-primary ">
              <IoMenu className="h-6 w-6" />
            </DrawerTrigger>
            <DrawerContent className="bg-light-surface dark:bg-dark-surface">
              <div className="flex justify-between items-center px-5 py-4"></div>
              <ul className="flex flex-col gap-4 text-center font-bold text-light-secondary dark:text-dark-primary">
                {links.map((item, index) => (
                  <li key={index} className="py-2">
                    <a href={item.href} onClick={() => setMenuOpen(false)}>
                      {item.name}
                    </a>
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
