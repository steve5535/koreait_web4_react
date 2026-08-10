import { useEffect, useState } from "react";

function PostSearchForm({
    keyword,
    isFetching = false,
    onSearch,
    onReset,
}) {
    const [inputValue, setInputValue] = useState(keyword);

    useEffect(() => {
        setInputValue(keyword);
    }, [keyword]);

    const handleSubmit = (event) => {
        event.preventDefault();

        onSearch(inputValue.trim());
    };

    return (
        <section className="searchPanel">
            <div>
                <h3>게시글 검색</h3>
                <p>제목, 내용, 작성자에 포함된 단어로 게시글을 검색합니다.</p>
            </div>

            <form className="searchForm" onSubmit={handleSubmit}>
                <input
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                    placeholder="검색어를 입력하세요"
                />

                <button type="submit" disabled={isFetching}>
                    {isFetching ? "검색 중..." : "검색"}
                </button>

                {keyword && (
                    <button type="button" onClick={onReset} disabled={isFetching}>
                        초기화
                    </button>
                )}
            </form>
        </section>
    );
}

export default PostSearchForm;