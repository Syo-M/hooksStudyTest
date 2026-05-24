import { useState, useEffect } from 'react';
import styles from './Timer.module.css';

export default function Timer() {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        // タイマーを止めるための条件式
        if (!isRunning) {
            return;
        }

        const timerId = setInterval(() => {
            setSeconds((i) => {
                return i + 1;
            });
        }, 1000);

        return () => {
            clearInterval(timerId);
        };
    }, [isRunning]);

    const handleStart = () => {
        setIsRunning(true);
    };

    const handleStop = () => {
        setIsRunning(false);
    };

    const handleReset = () => {
        setIsRunning(false);
        setSeconds(0);
    };

    return (
        <section className={styles.timer}>
            <h2>学習タイマー</h2>

            <p>学習時間：{seconds}秒</p>

            <div className={styles.buttons}>
                <button onClick={handleStart}>スタート</button>
                <button onClick={handleStop}>ストップ</button>
                <button onClick={handleReset}>リセット</button>
            </div>
        </section>
    );
}
