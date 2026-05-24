import styles from './Timer.module.css';

export default function Timer() {
    return (
        <section className={styles.timer}>
            <h2>学習タイマー</h2>

            <p>学習時間：0秒</p>

            <button>スタート</button>
            <button>ストップ</button>
            <button>リセット</button>
        </section>
    );
}
