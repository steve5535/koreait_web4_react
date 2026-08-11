const BASE_URL = "http://localhost:4000/posts";

async function handleResponse(response) {
    if (!response.ok) {
        throw new Error("요청을 처리하지 못했습니다.");
    }

    const text = await response.text();

    if (!text) {
        return null;
    }

    return JSON.parse(text);
}

function createSearchParams({ keyword, page, perPage }) {
    const params = new URLSearchParams();
    const trimmedKeyword = keyword?.trim();

    params.set("_page", String(page));
    params.set("_per_page", String(perPage));

    if (trimmedKeyword) {
        params.set(
            "_where",
            JSON.stringify({
                or: [
                    { title: { contains: trimmedKeyword } },
                    { content: { contains: trimmedKeyword } },
                    { author: { contains: trimmedKeyword } },
                ],
            })
        );
    }

    return params;
}

export async function getPosts({
    keyword = "",
    page = 1,
    perPage = 5,
} = {}) {
    const params = createSearchParams({
        keyword,
        page,
        perPage,
    });

    const response = await fetch(`${BASE_URL}?${params.toString()}`);

    return handleResponse(response);
}

export async function getPost(postId) {
    const response = await fetch(`${BASE_URL}/${postId}`);
    return handleResponse(response);
}

export async function createPost({ title, content, author }) {
    const now = new Date().toLocaleString();

    const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id: String(Date.now()),
            title,
            content,
            author,
            createdAt: now,
            updatedAt: now,
        }),
    });

    return handleResponse(response);
}

export async function updatePost({ postId, title, content, author }) {
    const response = await fetch(`${BASE_URL}/${postId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title,
            content,
            author,
            updatedAt: new Date().toLocaleString(),
        }),
    });

    return handleResponse(response);
}

export async function deletePost(postId) {
    const response = await fetch(`${BASE_URL}/${postId}`, {
        method: "DELETE",
    });

    return handleResponse(response);
}