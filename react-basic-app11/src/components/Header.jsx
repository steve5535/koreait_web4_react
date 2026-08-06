import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <div>
                <p>20일차 게시판 프로젝트</p>
                <h1>라우팅과 레이아웃</h1>
                <span>
                    React Router를 사용해 게시판의 페이지 이동 구조를 만듭니다.
                </span>
            </div>

            <nav className="navigation">
                <NavLink to="/" end>
                    홈
                </NavLink>

                <NavLink to="/posts">
                    게시글
                </NavLink>

                <NavLink to="/posts/new">
                    글쓰기
                </NavLink>
            </nav>
        </header>
    );
}

export default Header;