import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <section className="page notFound">
            <h2>404</h2>
            <p>요청하신 페이지를 찾을 수 없습니다.</p>

            <Link className="buttonLink primary" to="/">
                홈으로 이동
            </Link>
        </section>
    );
}

export default NotFoundPage;