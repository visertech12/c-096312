import {create} from 'zustand';
import {TabScreens} from '../routes';

export type TabStateType = {
  screen: string;
  setScreen: (screen: string) => void;
};

const initialState: TabStateType = {
  screen: TabScreens.DASHBOARD,
  setScreen: () => {},
};

export const useTabStore = create<TabStateType>((set) => ({
  ...initialState,
  setScreen: (screen) => set({screen}),
}));
