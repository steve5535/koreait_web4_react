import {
    useMutation,
    useQuery,
    useQueryClient,
} from "@tanstack/react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { deletePost, getPost } from "../api/posts";
import ErrorMessage from "../components/ErrorMessage";
import LoadingMessage from "../components/LoadingMessage";
import { queryKeys } from "../constants/queryKeys";

function PostDetailPage() {
    const { postId } = useParams();
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const {
        data: post,
        isPending,
        isError,
        error,
    } = useQuery({
        queryKey: queryKeys.post(postId),
        queryFn: () => getPost(postId),
        enabled: Boolean(postId),
    });

    const deleteMutation = useMutation({
        mutationFn: deletePost,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: queryKeys.posts,
            });

            toast.success("게시글이 삭제되었습니다.");
            navigate("/posts");
        },
        onError: () => {
            toast.error("게시글을 삭제하지 못했습니다.");
        },
    });

    const handleDelete = () => {
        const confirmed = window.confirm("정말 이 게시글을 삭제하시겠습니까?");

        if (!confirmed) {
            return;
        }

        deleteMutation.mutate(post.id);
    };

    if (isPending) {
        return (
            <section className="page">
                <LoadingMessage message="게시글 상세를 불러오는 중입니다." />
            </section>
        );
    }

    if (isError) {
        return (
            <section className="page">
                <ErrorMessage
                    message={error.message || "게시글 상세를 불러오지 못했습니다."}
                />

                <div className="actionGroup">
                    <Link className="buttonLink" to="/posts">
                        목록으로 이동
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <section className="page">
            <div className="pageHeader">
                <p>Post Detail</p>
                <h2>{post.title}</h2>
                <span>
                    {post.author} · {post.createdAt}
                </span>
            </div>

            <article className="detailBox">
                <p className="detailContent">{post.content}</p>

                <dl className="detailMeta">
                    <div>
                        <dt>게시글 ID</dt>
                        <dd>{post.id}</dd>
                    </div>

                    <div>
                        <dt>작성자</dt>
                        <dd>{post.author}</dd>
                    </div>

                    <div>
                        <dt>작성일</dt>
                        <dd>{post.createdAt}</dd>
                    </div>

                    <div>
                        <dt>수정일</dt>
                        <dd>{post.updatedAt}</dd>
                    </div>
                </dl>
            </article>

            <div className="actionGroup">
                <button type="button" onClick={() => navigate(-1)}>
                    뒤로 가기
                </button>

                <Link className="buttonLink" to="/posts">
                    목록으로 이동
                </Link>

                <Link className="buttonLink primary" to={`/posts/${post.id}/edit`}>
                    수정하기
                </Link>

                <button
                    type="button"
                    className="danger"
                    onClick={handleDelete}
                    disabled={deleteMutation.isPending}
                >
                    {deleteMutation.isPending ? "삭제 중..." : "삭제"}
                </button>
            </div>
        </section>
    );
}

export default PostDetailPage;