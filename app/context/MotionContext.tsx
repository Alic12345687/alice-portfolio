"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

interface MotionContextType {
  motionEnabled: boolean;
  shouldAnimate: boolean;
  toggleMotion: () => void;
}

const MotionContext = createContext<MotionContextType | undefined>(undefined);

export function MotionProvider({ children }: { children: ReactNode }) {
  const [motionEnabled, setMotionEnabled] = useState(true);
  const [tabVisible, setTabVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncReducedMotion = () => setReducedMotion(media.matches);
    syncReducedMotion();
    media.addEventListener("change", syncReducedMotion);
    return () => media.removeEventListener("change", syncReducedMotion);
  }, []);

  useEffect(() => {
    const syncVisibility = () => setTabVisible(!document.hidden);
    syncVisibility();
    document.addEventListener("visibilitychange", syncVisibility);
    return () => document.removeEventListener("visibilitychange", syncVisibility);
  }, []);

  const shouldAnimate = motionEnabled && tabVisible && !reducedMotion;

  useEffect(() => {
    document.body.classList.toggle("motion-paused", !shouldAnimate);
  }, [shouldAnimate]);

  const value = useMemo(
    () => ({
      motionEnabled,
      shouldAnimate,
      toggleMotion: () => setMotionEnabled((enabled) => !enabled),
    }),
    [motionEnabled, shouldAnimate]
  );

  return (
    <MotionContext.Provider value={value}>{children}</MotionContext.Provider>
  );
}

export function useMotionPreferences() {
  const context = useContext(MotionContext);
  if (!context) {
    throw new Error("useMotionPreferences must be used within a MotionProvider");
  }
  return context;
}
