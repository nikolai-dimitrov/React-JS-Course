import { requestFactory } from "../utils/requester";
const request = requestFactory();
const baseUrl = "http://localhost:3030/data/comments";
export const create = async (gameId, value) => {
    const comment = value.comment;
    const result = await request.post(baseUrl, { gameId, comment });
    return result;
};
export const getAll = async (gameId) => {
    const searchQuery = encodeURIComponent(`gameId="${gameId}"`);
    const relationQuery = encodeURIComponent(`author=_ownerId:users`);

    const result = await request.get(
        `${baseUrl}?where=${searchQuery}&load=${relationQuery}`
    );

    return Object.values(result);
};
