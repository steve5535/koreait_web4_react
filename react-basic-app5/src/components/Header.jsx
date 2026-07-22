import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <div>
                <p className="eyebrow">React 6일차</p>
                <h1>React Router</h1>
                <span>
                    URL 경로에 따라 여러 페이지를 가진 SPA 구조를 만듭니다.
                </span>
            </div>

            <nav className="navigation">
                <NavLink to="/" end>
                    홈
                </NavLink>

                <NavLink to="/about">
                    소개
                </NavLink>

                <NavLink to="/study">
                    학습 목록
                </NavLink>

                <NavLink to="/profile">
                    프로필
                </NavLink>

                <NavLink to="/settings">
                    설정
                </NavLink>
            </nav>
        </header>
    );
}

export default Header;