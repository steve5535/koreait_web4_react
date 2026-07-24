const BASE_URL = "https://jsonplaceholder.typicode.com";

async function handleResponse(response) {
    if (!response.ok) {
        throw new Error("요청을 처리하지 못했습니다.")
    }
    return response.json();
}

export async function getUsers() {
    const response = await fetch(`${BASE_URL}/users`);

    return handleResponse(response);
}

export async function getPosts({ userId = "" } = {}) {
    const params = new URLSearchParams();

    if (userId) {
        params.set("userId", userId)
    }
    const querString = params.toString();
    const url = queryString ? `${BASE_URL}/posts?${querString}` : `${BASE_URL}/posts`;

    const response = await fetch(url);
    return handleResponse(response);
}

export async function getPost(postId) {
    const response = await fetch(`${BASE_URL}/posts/${postId}`)
    return handleResponse(response)
}