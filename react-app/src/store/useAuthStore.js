import { create } from "zustand";

const useAuthStore = create((set) => ({
  isAuthenticated: false,

  login: (username, password) => {
    const validUser = import.meta.env.VITE_ADMIN_USERNAME;
    const validPass = import.meta.env.VITE_ADMIN_PASSWORD;

    if (username === validUser && password === validPass) {
      set({ isAuthenticated: true });
      return true;
    }
    return false;
  },

  logout: () => set({ isAuthenticated: false }),
}));

export default useAuthStore;
