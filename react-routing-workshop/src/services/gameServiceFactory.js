import { requestFactory } from "../utils/requester";
const baseUrl = "http://localhost:3030/data/games";
export const gameServiceFactory = (token) => {
    const request = requestFactory(token);
    return {
        getAll: async () => {
            const games = await request.get(baseUrl);
            return Object.values(games);
        },

        getOne: async (id) => {
            const currentGame = await request.get(`${baseUrl}/${id}`);
            return currentGame;
        },

        create: async (data) => {
            const result = await request.post(baseUrl, data);
            return result;
        },
        edit: async (data, gameId) => {
            const result = await request.put(`${baseUrl}/${gameId}`, data);
            return result;
        },
        remove: async (gameId) => {
            const result = await request.remove(`${baseUrl}/${gameId}`);
            return result;
        },
    };
};
