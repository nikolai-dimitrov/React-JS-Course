import { get, post } from "../utils/requester";
const baseUrl = "http://localhost:3030/jsonstore/games";

export const getAll = async () => {
    const games = await get(baseUrl);
    return Object.values(games);
};

export const getOne = async (id) => {
    const currentGame = await get(`${baseUrl}/${id}`);
    return currentGame;
};

export const create = async (data) => {
    const result = await post(baseUrl, data);
    return result;
};
