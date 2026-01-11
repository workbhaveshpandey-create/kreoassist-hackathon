/**
 * Storage Service
 * 
 * This service handles all data persistence for the application.
 * Currently simulates a database using LocalStorage.
 * 
 * BACKEND TEAM:
 * - Implement caching logic here.
 * - Future: Replace with actual API calls to a real backend.
 */

export const STORAGE_KEYS = {
  USER_PREFERENCES: 'kreo_user_prefs',
  AUTH_TOKEN: 'kreo_auth_token',
};

export const storage = {
  get: <T>(key: string): T | null => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Storage Error:', error);
      return null;
    }
  },

  set: (key: string, value: any): void => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Storage Save Error:', error);
    }
  },

  remove: (key: string): void => {
    localStorage.removeItem(key);
  },

  clear: (): void => {
    localStorage.clear();
  },
};
