import PostCard from "./PostCard";

function PostList({ posts }) {
    return (
        <ul className="postList">
            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </ul>
    );
}

export default PostList;