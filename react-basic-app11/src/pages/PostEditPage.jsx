import {
    useMutation,
    useQuery,
    useQueryClient,
} from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getPost, updatePost } from "../api/posts";
import ErrorMessage from "../components/ErrorMessage";
import LoadingMessage from "../components/LoadingMessage";
import PostForm from "../components/PostForm";
import { queryKeys } from "../constants/queryKeys";

function PostEditPage() {
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

    const updateMutation = useMutation({
        mutationFn: updatePost,
        onSuccess: (updatedPost) => {
            queryClient.invalidateQueries({
                queryKey: queryKeys.posts,
            });

            queryClient.invalidateQueries({
                queryKey: queryKeys.post(postId),
            });

            toast.success("게시글이 수정되었습니다.");
            navigate(`/posts/${updatedPost.id}`);
        },
        onError: () => {
            toast.error("게시글을 수정하지 못했습니다.");
        },
    });

    const handleUpdate = (formValues) => {
        updateMutation.mutate({
            postId,
            ...formValues,
        });
    };

    if (isPending) {
        return (
            <section className="page">
                <LoadingMessage message="수정할 게시글을 불러오는 중입니다." />
            </section>
        );
    }

    if (isError) {
        return (
            <section className="page">
                <ErrorMessage
                    message={error.message || "수정할 게시글을 불러오지 못했습니다."}
                />
            </section>
        );
    }

    return (
        <section className="page">
            <div className="pageHeader">
                <p>Edit</p>
                <h2>게시글 수정</h2>
                <span>
                    기존 게시글 내용을 수정한 뒤 저장합니다.
                </span>
            </div>

            <PostForm
                initialValues={post}
                submitLabel="수정 완료"
                isSubmitting={updateMutation.isPending}
                onSubmit={handleUpdate}
                onCancel={() => navigate(`/posts/${postId}`)}
            />
        </section>
    );
}

export default PostEditPage;