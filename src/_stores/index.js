import { defineStore } from 'pinia';
import { http } from "@/_services";

const baseUrl = `/main`;

const useStore = defineStore({
    id: "main",
    state: () => ({
    }),
    actions: {
        async onChoise(type) {
            return await http.post(`${baseUrl}/save`, { "type": type });
        },
        async getByCount(type) {
            return await http.get(`${baseUrl}/${type}/count`);
        }
    },
    persist: true,
});

export default useStore;