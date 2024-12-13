import { create } from "zustand";
import { CreateState } from ".";

export const useStore = create<CreateState>((set) => ({
  user: "JOHN DOE",
  company: "Food share",
  setUser: (user) => set({ user }),
  setCompany: (company) => set({ company }),
}));

export default useStore;