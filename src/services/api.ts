/**
 * API Service
 * 
 * Handles all external network requests.
 * 
 * BACKEND TEAM:
 * - Define API endpoints here.
 * - Handle request/response interceptons.
 */

const BASE_URL = import.meta.env.VITE_API_URL || '';

export const api = {
    get: async <T>(endpoint: string): Promise<T> => {
        // Simulation of network delay
        await new Promise(resolve => setTimeout(resolve, 500));

        // In a real app, this would fetch from BASE_URL + endpoint
        console.log(`[API] GET request to ${endpoint}`);

        // Return mock data for now
        return {} as T;
    },

    post: async <T>(endpoint: string, data: any): Promise<T> => {
        await new Promise(resolve => setTimeout(resolve, 500));
        console.log(`[API] POST request to ${endpoint}`, data);
        return data as T;
    }
};
