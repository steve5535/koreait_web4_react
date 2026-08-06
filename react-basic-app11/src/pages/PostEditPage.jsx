import { useNavigate, useParams } from "react-router-dom";

function PostEditPage() {
    const { postId } = useParams();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        alert(`${postId}번 게시글 수정 API는 다음 시간에 연결합니다.`);
        navigate(`/posts/${postId}`);
    };

    return (
        <section className="page">
            <div className="pageHeader">
                <p>Edit</p>
                <h2>게시글 수정</h2>
                <span>
                    현재 수정 중인 게시글 ID는 {postId}입니다.
                </span>
            </div>

            <form className="postForm" onSubmit={handleSubmit}>
                <label>
                    제목
                    <input defaultValue={`${postId}번 게시글 제목`} />
                </label>

                <label>
                    작성자
                    <input defaultValue="홍길동" />
                </label>

                <label>
                    내용
                    <textarea rows={8} defaultValue="게시글 내용을 수정합니다." />
                </label>

                <div className="actionGroup">
                    <button type="button" onClick={() => navigate(-1)}>
                        취소
                    </button>

                    <button type="submit">
                        수정 완료
                    </button>
                </div>
            </form>
        </section>
    );
}

export default PostEditPage;