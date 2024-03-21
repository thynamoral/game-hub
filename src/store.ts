import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchQuery?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
}

interface GameQueryAction {
  onSelectGenre: (genreId: number) => void;
  onSelectPlatform: (platformId: number) => void;
  onSelectSortOrder: (sortOrder: string) => void;
  onSearchGame: (searchQuery: string) => void;
}

const useGameQueryStore = create<GameQueryStore & GameQueryAction>((set) => ({
  gameQuery: {},
  onSelectGenre: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  onSelectPlatform: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  onSelectSortOrder: (sortOrder) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
  onSearchGame: (searchQuery) => set(() => ({ gameQuery: { searchQuery } })),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("GameQuery Store", useGameQueryStore);
}

export default useGameQueryStore;
