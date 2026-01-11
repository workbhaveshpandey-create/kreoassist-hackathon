import { useState, useEffect } from 'react';
import { api } from '../services/api';
import { storage, STORAGE_KEYS } from '../services/storage';

/**
 * useAppInit Hook
 * 
 * FRONTEND/LOGIC TEAM:
 * - Manage complex app state here.
 * - Integrate with Services.
 */
export const useAppInit = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        const initApp = async () => {
            try {
                // Simulate checking auth or loading config
                const userPrefs = storage.get(STORAGE_KEYS.USER_PREFERENCES);
                console.log('User Prefs loaded:', userPrefs);

                // Simulate API health check
                await api.get('/health');

                setIsInitialized(true);
            } catch (err) {
                console.error('Initialization failed', err);
            } finally {
                // Minimum loading time for smooth UX
                setTimeout(() => setIsLoading(false), 2000);
            }
        };

        initApp();
    }, []);

    return { isLoading, isInitialized };
};
