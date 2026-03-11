"use client";

import { useWebHaptics } from "web-haptics/react";

export function useHaptics() {
  const { trigger } = useWebHaptics();
  return { trigger };
}
