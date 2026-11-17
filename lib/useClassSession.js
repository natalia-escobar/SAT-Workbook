"use client";

// lib/useClassSession.js
// One shared copy of "is a class running, and who's in it" for the whole app, so the
// Start class button on the home page and the floating End class bar always agree.

import { useSyncExternalStore } from "react";
import { getClassState } from "@/lib/classSession";

let state = {
  loaded: false,
  canTeach: false,
  session: null,
  roster: { groups: [], students: [] },
  picker: null, // null | "start" | "edit"
};
const listeners = new Set();
const set = (patch) => {
  state = { ...state, ...patch };
  listeners.forEach((fn) => fn());
};
const subscribe = (fn) => {
  listeners.add(fn);
  return () => listeners.delete(fn);
};

/** Re-read the class state from the server. */
export async function refreshClassState() {
  try {
    const next = await getClassState();
    set({ ...next, loaded: true });
  } catch (e) {
    console.error("refreshClassState:", e);
  }
}

export const openClassPicker = (mode = "start") => set({ picker: mode });
export const closeClassPicker = () => set({ picker: null });

export default function useClassSession() {
  return useSyncExternalStore(subscribe, () => state, () => state);
}