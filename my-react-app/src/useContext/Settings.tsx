import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { LanguageContext } from './LanguageContext';

export default function Settings() {
  const theme = useContext(ThemeContext);
  const lang = useContext(LanguageContext);

  return (
    <div>
      <p>Tema actual: {theme}</p>
      <p>Idioma actual: {lang === 'es' ? 'Español' : 'Inglés'}</p>
    </div>
  );
}