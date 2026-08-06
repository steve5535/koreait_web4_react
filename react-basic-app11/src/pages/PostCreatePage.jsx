import { useNavigate } from "react-router-dom";

function PostCreatePage() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        alert("다음 시간에 게시글 작성 API를 연결합니다.");
        navigate("/posts");
    };

    return (
        <section className="page">
            <div className="pageHeader">
                <p>Create</p>
                <h2>게시글 작성</h2>
                <span>
                    제목, 작성자, 내용을 입력하는 작성 폼입니다.
                </span>
            </div>

            <form className="postForm" onSubmit={handleSubmit}>
                <label>
                    제목
                    <input placeholder="제목을 입력하세요" />
                </label>

                <label>
                    작성자
                    <input placeholder="작성자를 입력하세요" />
                </label>

                <label>
                    내용
                    <textarea rows={8} placeholder="내용을 입력하세요" />
                </label>

                <div className="actionGroup">
                    <button type="button" onClick={() => navigate(-1)}>
                        취소
                    </button>

                    <button type="submit">
                        등록
                    </button>
                </div>
            </form>
        </section>
    );
}

export default PostCreatePage;