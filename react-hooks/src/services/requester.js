const request = async (method, url, data) => {
    let options = {};
    if (method !== "GET") {
        if (data) {
            options.method = method;
            options.headers = {
                "content-type": "application/json",
            };
            options.body = JSON.stringify(data);
        }
    }
    const response = await fetch(url, options);
    return response.json();
};

export const get = request.bind(null, "GET");
export const post = request.bind(null, "POST");
export const put = request.bind(null, "PUT");
export const remove = request.bind(null, "DELETE");
