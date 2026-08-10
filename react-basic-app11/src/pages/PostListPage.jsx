import { useQuery } from "@tanstack/react-query";
import { Link, useSearchParams } from "react-router-dom";
import { getPosts } from "../api/posts";
import EmptyMessage from "../components/EmptyMessage";
import ErrorMessage from "../components/ErrorMessage";
import LoadingMessage from "../components/LoadingMessage";
import PostList from "../components/PostList";
import PostSearchForm from "../components/PostSearchForm";
import { queryKeys } from "../constants/queryKeys";

function PostListPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get("keyword") ?? "";

    const {
        data: posts = [],
        isPending,
        isFetching,
        isError,
        error,
    } = useQuery({
        queryKey: queryKeys.postsList({ keyword }),
        queryFn: () => getPosts({ keyword }),
    });

    const handleSearch = (nextKeyword) => {
        const trimmedKeyword = nextKeyword.trim();
        const nextParams = new URLSearchParams(searchParams);

        if (trimmedKeyword) {
            nextParams.set("keyword", trimmedKeyword);
        } else {
            nextParams.delete("keyword");
        }

        setSearchParams(nextParams);
    };

    const handleReset = () => {
        const nextParams = new URLSearchParams(searchParams);
        nextParams.delete("keyword");

        setSearchParams(nextParams);
    };

    const emptyMessage = keyword
        ? `"${keyword}"에 대한 검색 결과가 없습니다.`
        : "게시글이 없습니다.";

    return (
        <section className="page">
            <div className="pageHeader row">
                <div>
                    <p>Posts</p>
                    <h2>게시글 목록</h2>
                    <span>
                        검색어를 URL Query String으로 관리합니다.
                    </span>
                </div>

                <Link className="buttonLink primary" to="/posts/new">
                    글쓰기
                </Link>
            </div>

            <PostSearchForm
                keyword={keyword}
                isFetching={isFetching}
                onSearch={handleSearch}
                onReset={handleReset}
            />

            {keyword && !isPending && !isError && (
                <p className="searchSummary">
                    현재 검색어: <strong>{keyword}</strong>
                </p>
            )}

            {isPending && (
                <LoadingMessage message="게시글 목록을 불러오는 중입니다." />
            )}

            {isError && (
                <ErrorMessage
                    message={error.message || "게시글 목록을 불러오지 못했습니다."}
                />
            )}

            {!isPending && !isError && posts.length === 0 && (
                <EmptyMessage message={emptyMessage} />
            )}

            {!isPending && !isError && posts.length > 0 && (
                <PostList posts={posts} />
            )}
        </section>
    );
}

export default PostListPage;