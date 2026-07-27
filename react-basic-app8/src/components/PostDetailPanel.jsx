import { useQuery } from "@tanstack/react-query";
import { getPost } from "../api/posts";
import { queryKeys } from "../constants/queryKeys";
import ErrorMessage from "./ErrorMessage";
import LoadingMessage from "./LoadingMessage";

function PostDetailPanel({ postId }) {
    const {
        data: post,
        isPending,
        isFetching,
        isError,
        error,
        refetch,
    } = useQuery({
        queryKey: queryKeys.post(postId),
        queryFn: () => getPost(postId),
        enabled: Boolean(postId),
        staleTime: 1000 * 60,
    });

    if (!postId) {
        return (
            <aside className="detailPanel empty">
                <h2>게시글 상세</h2>
                <p>왼쪽 목록에서 게시글을 선택하면 상세 내용이 표시됩니다.</p>
            </aside>
        );
    }

    if (isPending) {
        return (
            <aside className="detailPanel">
                <LoadingMessage message="게시글 상세를 불러오는 중입니다." />
            </aside>
        );
    }

    if (isError) {
        return (
            <aside className="detailPanel">
                <ErrorMessage
                    message={error.message || "게시글 상세를 불러오지 못했습니다."}
                />
            </aside>
        );
    }

    return (
        <aside className="detailPanel">
            <div className="detailHeader">
                <div>
                    <p>Post ID: {post.id}</p>
                    <h2>{post.title}</h2>
                </div>

                <button type="button" onClick={() => refetch()} disabled={isFetching}>
                    {isFetching ? "새로고침 중..." : "상세 새로고침"}
                </button>
            </div>

            <p className="detailBody">{post.body}</p>

            <dl className="detailMeta">
                <div>
                    <dt>작성자 ID</dt>
                    <dd>{post.userId}</dd>
                </div>

                <div>
                    <dt>캐시 기준</dt>
                    <dd>queryKey: posts/detail/{post.id}</dd>
                </div>
            </dl>
        </aside>
    );
}

export default PostDetailPanel;