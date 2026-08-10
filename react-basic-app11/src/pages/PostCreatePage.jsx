import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createPost } from "../api/posts";
import PostForm from "../components/PostForm";
import { queryKeys } from "../constants/queryKeys";

function PostCreatePage() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const createMutation = useMutation({
        mutationFn: createPost,
        onSuccess: (createdPost) => {
            queryClient.invalidateQueries({
                queryKey: queryKeys.posts,
            });

            toast.success("게시글이 등록되었습니다.");
            navigate(`/posts/${createdPost.id}`);
        },
        onError: () => {
            toast.error("게시글을 등록하지 못했습니다.");
        },
    });

    const handleCreate = (formValues) => {
        createMutation.mutate(formValues);
    };

    return (
        <section className="page">
            <div className="pageHeader">
                <p>Create</p>
                <h2>게시글 작성</h2>
                <span>
                    제목, 작성자, 내용을 입력해 새 게시글을 등록합니다.
                </span>
            </div>

            <PostForm
                submitLabel="등록"
                isSubmitting={createMutation.isPending}
                onSubmit={handleCreate}
                onCancel={() => navigate("/posts")}
            />
        </section>
    );
}

export default PostCreatePage;