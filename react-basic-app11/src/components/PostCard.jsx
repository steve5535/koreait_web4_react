import { Link } from "react-router-dom";

function PostCard({ post }) {
    const preview =
        post.content.length > 80
            ? `${post.content.slice(0, 80)}...`
            : post.content;

    return (
        <li className="postCard">
            <Link to={`/posts/${post.id}`}>
                <strong>{post.title}</strong>
                <p>{preview}</p>

                <div className="postMeta">
                    <span>작성자: {post.author}</span>
                    <small>{post.createdAt}</small>
                </div>
            </Link>
        </li>
    );
}

export default PostCard;