import { useState, useEffect } from 'react';
import { Moon, Sun } from '@phosphor-icons/react';

export function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const body = document.body;

  useEffect(() => {
    if (theme === 'light') {
      body.classList.remove('dark');
    } else {
      body.classList.add('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((oldThemeName) => (oldThemeName === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="flex justify-center items-center flex-col gap-2 h-screen bg-purple-100 dark:bg-purple-700">
      <h1 className="text-3xl text-purple-700 dark:text-purple-500">
        Hello world!
      </h1>
      <div className="flex justify-center items-center bg-purple-500 dark:bg-purple-500 px-2.5 py-1 rounded-full">
        <button onClick={toggleTheme}>
          {theme === 'light' ? <Moon size="20" /> : <Sun size="20" />}
        </button>
      </div>
    </div>
  );
}
