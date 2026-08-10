import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getPosts } from "../api/posts";
import EmptyMessage from "../components/EmptyMessage";
import ErrorMessage from "../components/ErrorMessage";
import LoadingMessage from "../components/LoadingMessage";
import PostList from "../components/PostList";
import { queryKeys } from "../constants/queryKeys";

function PostListPage() {
    const {
        data: posts = [],
        isPending,
        isError,
        error,
    } = useQuery({
        queryKey: queryKeys.posts,
        queryFn: getPosts,
    });

    return (
        <section className="page">
            <div className="pageHeader row">
                <div>
                    <p>Posts</p>
                    <h2>게시글 목록</h2>
                    <span>json-server에서 게시글 목록을 조회합니다.</span>
                </div>

                <Link className="buttonLink primary" to="/posts/new">
                    글쓰기
                </Link>
            </div>

            {isPending && (
                <LoadingMessage message="게시글 목록을 불러오는 중입니다." />
            )}

            {isError && (
                <ErrorMessage
                    message={error.message || "게시글 목록을 불러오지 못했습니다."}
                />
            )}

            {!isPending && !isError && posts.length === 0 && (
                <EmptyMessage message="게시글이 없습니다." />
            )}

            {!isPending && !isError && posts.length > 0 && (
                <PostList posts={posts} />
            )}
        </section>
    );
}

export default PostListPage;