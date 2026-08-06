import { Link } from "react-router-dom";

function HomePage() {
    return (
        <section className="page">
            <div className="pageHeader">
                <p>Home</p>
                <h2>게시판 프로젝트</h2>
                <span>
                    React Router를 사용해 여러 페이지를 가진 게시판 프로젝트를
                    시작합니다.
                </span>
            </div>

            <div className="actionGroup">
                <Link className="buttonLink primary" to="/posts">
                    게시글 목록 보기
                </Link>

                <Link className="buttonLink" to="/posts/new">
                    새 게시글 작성하기
                </Link>
            </div>
        </section>
    );
}

export default HomePage;