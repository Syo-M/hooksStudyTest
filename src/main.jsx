import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import ThemeContextArea from './contexts/ThemaContextArea.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ThemeContextArea>
            <App />
        </ThemeContextArea>
    </StrictMode>,
);
