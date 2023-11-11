import { requestFactory } from "../utils/requester";
const baseUrl = "http://localhost:3030/users";
export const authServiceFactory = (token) => {
    const request = requestFactory(token);
    return {
        login: async (data) => {
            const result = await request.post(`${baseUrl}/login`, data);
            return result;
        },

        register: async (data) => {
            const result = await request.post(`${baseUrl}/register`, data);
            return result;
        },

        logout: () => {
            request.get(`${baseUrl}/logout`);
            return;
        },
    };
};
