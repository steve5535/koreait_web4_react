export const queryKeys = {
    posts: ["posts"],
    postsList: (filters = {}) => ["posts", "list", filters],
    post: (postId) => ["posts", "detail", postId],
};