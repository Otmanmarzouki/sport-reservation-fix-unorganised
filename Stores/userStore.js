import { create } from "zustand";

const useUserStore = create((set) => ({
  user: {
    name: "",
    email: "",
    dob: "",
    tel: "",
    adresse: "",
    gender: "",
    avatar: "",
  },
  loading: false,
  error: null,

  setUser: (payload) =>
    set((state) => ({
      user: { ...state.user, ...payload },
    })),

  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  setAvatar: (avatar) =>
    set((state) => ({
      user: { ...state.user, avatar },
    })),
}));

export default useUserStore;
