import { use } from 'react';
import { ThemeContext } from '../../contexts/ThemaContext';
import styles from './ThemeButton.module.css';

export default function ThemeButton() {
    const { theme, toggleTheme } = use(ThemeContext);
    return (
        <>
            <section className={styles.themeButton}>
                <p>現在のテーマ：{theme}</p>
                <button onClick={toggleTheme}>テーマ切り替え</button>
            </section>
        </>
    );
}
