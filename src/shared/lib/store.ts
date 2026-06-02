"use client";

import { create } from "zustand";
import { Artwork, TimelineEvent } from "../types";

// ============================================
// STORE STATE
// ============================================

interface StoreState {
  // Artwork state
  currentArtwork: Artwork | null;
  selectedArtwork: Artwork | null;
  
  // Timeline state
  selectedTimelineEvent: TimelineEvent | null;
  
  // Scroll state
  scrollProgress: number;
  scrollY: number;
  
  // Loading state
  loadingState: "idle" | "loading" | "success" | "error";
  errorMessage: string | null;
  
  // UI state
  isMenuOpen: boolean;
  isDarkMode: boolean;
}

// ============================================
// STORE ACTIONS
// ============================================

interface StoreActions {
  // Artwork actions
  setCurrentArtwork: (artwork: Artwork | null) => void;
  setSelectedArtwork: (artwork: Artwork | null) => void;
  
  // Timeline actions
  setSelectedTimelineEvent: (event: TimelineEvent | null) => void;
  
  // Scroll actions
  setScrollProgress: (progress: number) => void;
  setScrollY: (y: number) => void;
  
  // Loading actions
  setLoading: () => void;
  setSuccess: () => void;
  setError: (message: string) => void;
  resetLoading: () => void;
  
  // UI actions
  toggleMenu: () => void;
  closeMenu: () => void;
  openMenu: () => void;
  toggleDarkMode: () => void;
  setDarkMode: (isDark: boolean) => void;
}

// ============================================
// STORE TYPE
// ============================================

export type DaVinciStore = StoreState & StoreActions;

// ============================================
// STORE CREATION
// ============================================

export const useDaVinciStore = create<DaVinciStore>((set) => ({
  // Initial state
  currentArtwork: null,
  selectedArtwork: null,
  selectedTimelineEvent: null,
  scrollProgress: 0,
  scrollY: 0,
  loadingState: "idle",
  errorMessage: null,
  isMenuOpen: false,
  isDarkMode: false,

  // Artwork actions
  setCurrentArtwork: (artwork) => set({ currentArtwork: artwork }),
  setSelectedArtwork: (artwork) => set({ selectedArtwork: artwork }),

  // Timeline actions
  setSelectedTimelineEvent: (event) => set({ selectedTimelineEvent: event }),

  // Scroll actions
  setScrollProgress: (progress) => set({ scrollProgress: progress }),
  setScrollY: (y) => set({ scrollY: y }),

  // Loading actions
  setLoading: () => set({ loadingState: "loading", errorMessage: null }),
  setSuccess: () => set({ loadingState: "success", errorMessage: null }),
  setError: (message) => set({ loadingState: "error", errorMessage: message }),
  resetLoading: () => set({ loadingState: "idle", errorMessage: null }),

  // UI actions
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  closeMenu: () => set({ isMenuOpen: false }),
  openMenu: () => set({ isMenuOpen: true }),
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
  setDarkMode: (isDark) => set({ isDarkMode: isDark }),
}));

// ============================================
// SELECTORS (for optimized re-renders)
// ============================================

export const selectCurrentArtwork = (state: DaVinciStore) => state.currentArtwork;
export const selectSelectedArtwork = (state: DaVinciStore) => state.selectedArtwork;
export const selectSelectedTimelineEvent = (state: DaVinciStore) => state.selectedTimelineEvent;
export const selectScrollProgress = (state: DaVinciStore) => state.scrollProgress;
export const selectScrollY = (state: DaVinciStore) => state.scrollY;
export const selectLoadingState = (state: DaVinciStore) => state.loadingState;
export const selectErrorMessage = (state: DaVinciStore) => state.errorMessage;
export const selectIsMenuOpen = (state: DaVinciStore) => state.isMenuOpen;
export const selectIsDarkMode = (state: DaVinciStore) => state.isDarkMode;