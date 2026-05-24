// src/contexts/ThemeContextArea.jsx
import { useEffect, useState } from 'react';
import { ThemeContext } from './ThemaContext';

export default function ThemeContextArea({ children }) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
    }, [theme]);

    return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
}
