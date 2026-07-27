export const queryKeys = {
    users: ["users"],
    posts: ["posts"],
    postsList: (filters = {}) => ["posts", "list", filters],
    post: (postId) => ["posts", "detail", postId]
}