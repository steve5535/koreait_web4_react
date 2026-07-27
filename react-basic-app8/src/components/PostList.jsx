import PostCard from "./PostCard";

function PostList({ posts, selectedPostId, onSelectPost }) {
    return (
        <div className="postList">
            {posts.map((post) => (
                <PostCard
                    key={post.id}
                    post={post}
                    isSelected={post.id === selectedPostId}
                    onSelect={onSelectPost}
                />
            ))}
        </div>
    );
}

export default PostList;