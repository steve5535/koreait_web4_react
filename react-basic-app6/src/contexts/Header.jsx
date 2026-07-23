import { useTheme } from "./ThemeProvider";
import { useUser } from "./UserProvider";

function Header() {
    const { theme, isDark, toggleTheme } = useTheme();
    const { user } = useUser();

    return (
        <header className={`header${isDark ? "dark" : ""}`}>
            <div>
                <p className="eyebrow">React 7일차</p>
                <h1>전역 상태와 Context API</h1>
                <span>
                    {user.name}님은 현재 {theme} 테마를 사용하고 있습니다.
                </span>
            </div>

            <button type="button" onClick={toggleTheme}>
                {isDark ? "라이트 모드" : "다크 모드"}
            </button>
        </header>
    );
}

export default Header;
