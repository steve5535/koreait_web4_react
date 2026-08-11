import {
    keepPreviousData,
    useQuery,
} from "@tanstack/react-query";
import { Link, useSearchParams } from "react-router-dom";
import { getPosts } from "../api/posts";
import EmptyMessage from "../components/EmptyMessage";
import ErrorMessage from "../components/ErrorMessage";
import LoadingMessage from "../components/LoadingMessage";
import Pagination from "../components/Pagination";
import PostList from "../components/PostList";
import PostSearchForm from "../components/PostSearchForm";
import { queryKeys } from "../constants/queryKeys";

const POSTS_PER_PAGE = 5;

const DEFAULT_POSTS_RESPONSE = {
    first: 1,
    prev: null,
    next: null,
    last: 1,
    pages: 1,
    items: 0,
    data: [],
};

function getValidPage(value) {
    const page = Number(value);

    if (!Number.isInteger(page) || page < 1) {
        return 1;
    }

    return page;
}

function PostListPage() {
    const [searchParams, setSearchParams] = useSearchParams();

    const keyword = searchParams.get("keyword") ?? "";
    const page = getValidPage(searchParams.get("page"));

    const {
        data: result = DEFAULT_POSTS_RESPONSE,
        isPending,
        isFetching,
        isError,
        error,
    } = useQuery({
        queryKey: queryKeys.postsList({
            keyword,
            page,
            perPage: POSTS_PER_PAGE,
        }),
        queryFn: () =>
            getPosts({
                keyword,
                page,
                perPage: POSTS_PER_PAGE,
            }),
        placeholderData: keepPreviousData,
    });

    const posts = result.data ?? [];
    const totalPages = result.pages ?? 1;
    const totalItems = result.items ?? 0;

    const handleSearch = (nextKeyword) => {
        const trimmedKeyword = nextKeyword.trim();
        const nextParams = new URLSearchParams(searchParams);

        if (trimmedKeyword) {
            nextParams.set("keyword", trimmedKeyword);
        } else {
            nextParams.delete("keyword");
        }

        nextParams.delete("page");

        setSearchParams(nextParams);
    };

    const handleReset = () => {
        const nextParams = new URLSearchParams(searchParams);

        nextParams.delete("keyword");
        nextParams.delete("page");

        setSearchParams(nextParams);
    };

    const handlePageChange = (nextPage) => {
        const nextParams = new URLSearchParams(searchParams);

        if (nextPage <= 1) {
            nextParams.delete("page");
        } else {
            nextParams.set("page", String(nextPage));
        }

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
                        검색어와 페이지 번호를 URL Query String으로 관리합니다.
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
                <>
                    <PostList posts={posts} />

                    <Pagination
                        page={page}
                        totalPages={totalPages}
                        totalItems={totalItems}
                        prevPage={result.prev}
                        nextPage={result.next}
                        isFetching={isFetching}
                        onPageChange={handlePageChange}
                    />
                </>
            )}
        </section>
    );
}

export default PostListPage;