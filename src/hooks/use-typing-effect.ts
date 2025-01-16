import { useEffect, useState } from 'react';

export function useTypingEffect(text: string, speed: number, trigger: boolean) {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    if (trigger) {
      let i = 0;
      const interval = setInterval(() => {
        setTypedText(text.slice(0, i));
        i++;
        if (i > text.length) clearInterval(interval);
      }, speed);
      return () => clearInterval(interval);
    }
  }, [text, speed, trigger]);

  return typedText;
}
