import { Link } from "react-router-dom";

const mockPosts = [
    {
        id: "1",
        title: "React Router로 게시판 만들기",
        author: "홍길동",
        createdAt: "2026. 7. 1. 오후 2:30:00",
    },
    {
        id: "2",
        title: "React Query로 서버 상태관리하기",
        author: "김철수",
        createdAt: "2026. 7. 1. 오후 3:00:00",
    },
];

function PostListPage() {
    return (
        <section className="page">
            <div className="pageHeader row">
                <div>
                    <p>Posts</p>
                    <h2>게시글 목록</h2>
                    <span>게시글 목록은 다음 시간에 서버 API와 연결합니다.</span>
                </div>

                <Link className="buttonLink primary" to="/posts/new">
                    글쓰기
                </Link>
            </div>

            <ul className="postList">
                {mockPosts.map((post) => (
                    <li key={post.id} className="postCard">
                        <Link to={`/posts/${post.id}`}>
                            <strong>{post.title}</strong>
                            <span>작성자: {post.author}</span>
                            <small>{post.createdAt}</small>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default PostListPage;