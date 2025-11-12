import { create } from "zustand";

interface IMacStore {
  color: string;
  scale: number;
  setColor: (color: string) => void;
  setScale: (scale: number) => void;
  reset: () => void;
}

const DEFAULT_SCALE = 0.08;
const DEFAULT_COLOR = "#2e2c2e";

export const useMacStore = create<IMacStore>((set) => ({
  color: DEFAULT_COLOR,
  setColor: (color: string) => set({ color }),

  scale: DEFAULT_SCALE,
  setScale: (scale: number) => set({ scale }),

  reset: () => set({ color: DEFAULT_COLOR, scale: DEFAULT_SCALE }),
}));
