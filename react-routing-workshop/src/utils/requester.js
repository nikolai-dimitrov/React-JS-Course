const request = async (method, token, url, data) => {
    let options = {};
    if (method !== "GET") {
        options.method = method;
        if (data) {
            options.headers = {
                "content-type": "application/json",
            };
            options.body = JSON.stringify(data);
        }
    }
    if (token) {
        let headers = options.headers;
        options.headers = { ...headers, "X-Authorization": token };
    }

    const response = await fetch(url, options);
    if (response.status === 204) {
        return {};
    }

    const result = response.json();

    if (!response.ok) {
        throw result;
    }

    return result;
};
export const requestFactory = (token) => {
    return {
        get: request.bind(null, "GET", token),
        post: request.bind(null, "POST", token),
        put: request.bind(null, "PUT", token),
        remove: request.bind(null, "DELETE", token),
    };
};

// export const get = request.bind(null, "GET");
// export const post = request.bind(null, "POST");
// export const put = request.bind(null, "PUT");
// export const remove = request.bind(null, "DELETE");
