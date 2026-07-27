import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getPosts, getUsers } from "../api/posts";
import { queryKeys } from "../constants/queryKeys";
import EmptyMessage from "./EmptyMessage";
import ErrorMessage from "./ErrorMessage";
import LoadingMessage from "./LoadingMessage";
import PostDetailPanel from "./PostDetailPanel";
import PostList from "./PostList";
import UserFilter from "./UserFilter";

function PostExplorer() {
    const [selectedUserId, setSelectedUserId] = useState("");
    const [selectedPostId, setSelectedPostId] = useState(null);

    const {
        data: users = [],
        isPending: isUsersPending,
        isError: isUsersError,
        error: usersError,
    } = useQuery({
        queryKey: queryKeys.users,
        queryFn: getUsers,
        staleTime: 1000 * 60 * 5,
    });

    const {
        data: posts = [],
        isPending: isPostsPending,
        isFetching: isPostsFetching,
        isError: isPostsError,
        error: postsError,
        refetch: refetchPosts,
    } = useQuery({
        queryKey: queryKeys.postsList({
            userId: selectedUserId,
        }),
        queryFn: () =>
            getPosts({
                userId: selectedUserId,
            }),
        staleTime: 1000 * 30,
    });

    const handleChangeUser = (userId) => {
        setSelectedUserId(userId);
        setSelectedPostId(null);
    };

    return (
        <section className="explorer">
            {isUsersPending && (
                <LoadingMessage message="사용자 목록을 불러오는 중입니다." />
            )}

            {isUsersError && (
                <ErrorMessage
                    message={usersError.message || "사용자 목록을 불러오지 못했습니다."}
                />
            )}

            {!isUsersPending && !isUsersError && (
                <UserFilter
                    users={users}
                    selectedUserId={selectedUserId}
                    isFetching={isPostsFetching}
                    onChangeUser={handleChangeUser}
                    onRefresh={refetchPosts}
                />
            )}

            <div className="contentGrid">
                <section className="listPanel">
                    <div className="sectionHeader">
                        <p>게시글 목록</p>
                        <h2>
                            {selectedUserId
                                ? `${selectedUserId}번 사용자의 게시글`
                                : "전체 게시글"}
                        </h2>
                        <span>
                            queryKey에 사용자 필터를 포함해 조건별 데이터를 관리합니다.
                        </span>
                    </div>

                    {isPostsPending && (
                        <LoadingMessage message="게시글 목록을 불러오는 중입니다." />
                    )}

                    {isPostsError && (
                        <ErrorMessage
                            message={postsError.message || "게시글 목록을 불러오지 못했습니다."}
                        />
                    )}

                    {!isPostsPending && !isPostsError && posts.length === 0 && (
                        <EmptyMessage message="게시글이 없습니다." />
                    )}

                    {!isPostsPending && !isPostsError && posts.length > 0 && (
                        <PostList
                            posts={posts}
                            selectedPostId={selectedPostId}
                            onSelectPost={setSelectedPostId}
                        />
                    )}
                </section>

                <PostDetailPanel postId={selectedPostId} />
            </div>
        </section>
    );
}

export default PostExplorer;