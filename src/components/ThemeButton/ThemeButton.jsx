import styles from './ThemeButton.module.css';

export default function ThemeButton() {
    return (
        <>
            <section className={styles.themeButton}>
                <p>現在のテーマ：ライト</p>
                <button>テーマ切り替え</button>
            </section>
        </>
    );
}
