import * as request from "./requester";
export const getAll = async (url) => {
    const result = await request.get(url);
    return Object.values(result);
};

export const create = async (url, data) => {
    const result = await request.post(url, data);
    return result;
};

export const remove = async (url, data) => {
    const result = await request.remove(url, data);
    return result;
};

export const changeStatus = async (url, data) => {
    const result = await request.put(url, data);
    return result 
};
