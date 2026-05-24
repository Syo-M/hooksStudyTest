import './App.css';
import ThemeButton from './components/ThemeButton/ThemeButton';
import Timer from './components/Timer/Timer';

function App() {
    return (
        <>
            <h1 style={{ textAlign: 'center' }}>アウトプット問題</h1>

            <h2 style={{ textAlign: 'center' }}>テーマカラー変更</h2>
            <p style={{ textAlign: 'center' }}>
                下のThemeButtonコンポーネントをクリックすると、テーマが切り替わるように、
                <br />
                useStateとuseContextを使用して実装してください。
            </p>

            <ThemeButton />
            <hr style={{ margin: '40px 0' }} />
            <h2 style={{ textAlign: 'center' }}>タイマー</h2>
            <p style={{ textAlign: 'center' }}>
                下のコンポーネントにuseState、useEffectを使用して、 <br />
                画面上に現在のテーマとタイマーを表示してください。
            </p>
            <Timer />
        </>
    );
}

export default App;
