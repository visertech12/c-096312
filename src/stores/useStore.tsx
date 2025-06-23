import {create} from 'zustand';

type State = {
  rememberMe: boolean;
  setRememberMe: (value: boolean) => void;
};

export const useStore = create<State>((set) => ({
  rememberMe: false,
  setRememberMe: (value) => set({rememberMe: value}),
}));
