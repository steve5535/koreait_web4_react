import { Link, useNavigate, useParams } from "react-router-dom";

function PostDetailPage() {
    const { postId } = useParams();
    const navigate = useNavigate();

    return (
        <section className="page">
            <div className="pageHeader">
                <p>Post Detail</p>
                <h2>게시글 상세</h2>
                <span>
                    현재 URL에서 읽은 게시글 ID는 {postId}입니다.
                </span>
            </div>

            <article className="detailBox">
                <h3>게시글 ID: {postId}</h3>
                <p>
                    다음 시간에는 이 ID를 사용해 서버에서 게시글 상세 데이터를
                    조회합니다.
                </p>
            </article>

            <div className="actionGroup">
                <button type="button" onClick={() => navigate(-1)}>
                    뒤로 가기
                </button>

                <Link className="buttonLink" to="/posts">
                    목록으로 이동
                </Link>

                <Link className="buttonLink primary" to={`/posts/${postId}/edit`}>
                    수정하기
                </Link>
            </div>
        </section>
    );
}

export default PostDetailPage;