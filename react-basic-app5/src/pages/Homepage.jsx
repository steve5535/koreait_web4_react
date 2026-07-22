import { Link } from "react-router-dom";

function HomePage() {
    return (
        <section className="page">
            <div className="pageHeader">
                <p>Home</p>
                <h2>React Router 학습 대시보드</h2>
                <span>
                    하나의 React 앱 안에서 여러 화면을 URL로 구분하는 방법을
                    학습합니다.
                </span>
            </div>

            <div className="heroCard">
                <h3>오늘의 핵심</h3>
                <p>
                    React Router를 사용하면 전체 페이지 새로고침 없이 URL에 따라
                    다른 컴포넌트를 화면에 표시할 수 있습니다.
                </p>
            </div>

            <div className="buttonGroup">
                <Link className="buttonLink primary" to="/study">
                    학습 목록 보기
                </Link>

                <Link className="buttonLink" to="/about">
                    라우팅 소개 보기
                </Link>
            </div>
        </section>
    );
}

export default HomePage;