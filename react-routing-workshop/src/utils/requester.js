const request = async (method, url, data) => {
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
    const response = await fetch(url, options);

    try {
        const result = response.json();
        return result;
    } catch (err) {
        return {};
    }
};

export const get = request.bind(null, "GET");
export const post = request.bind(null, "POST");
export const put = request.bind(null, "PUT");
export const remove = request.bind(null, "DELETE");
