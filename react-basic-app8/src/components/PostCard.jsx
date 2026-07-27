function PostCard({ post, isSelected, onSelect }) {
    const preview =
        post.body.length > 100 ? `${post.body.slice(0, 100)}...` : post.body;

    return (
        <button
            type="button"
            className={`postCard${isSelected ? "selected" : ""}`}
            onClick={() => onSelect(post.id)}
        >
            <span>작성자 ID: {post.userId}</span>
            <strong>{post.title}</strong>
            <p>{preview}</p>
        </button>
    );
}

export default PostCard;