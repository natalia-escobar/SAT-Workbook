"use client";

// lib/useClassSession.js
// One shared copy of "is a class running, and who's in it" for the whole app, so the
// Start class button on the home page and the floating End class bar always agree.

import { useSyncExternalStore } from "react";
import { getClassState } from "@/lib/classSession";

const EMPTY = {
  loaded: false,
  canTeach: false,
  session: null,
  roster: { groups: [], students: [] },
  picker: null, // null | "start" | "edit"
};
let state = EMPTY;
// Bumped on every reset, so an answer that was already on its way for the previous
// account is thrown away instead of being applied to whoever signs in next.
let generation = 0;
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
  const mine = generation;
  try {
    const next = await getClassState();
    if (mine !== generation) return;
    set({ ...next, loaded: true });
  } catch (e) {
    console.error("refreshClassState:", e);
  }
}

/**
 * Forget everything. Called when the tutor's class bar goes away (sign-out), so the next
 * person to sign in on this browser starts from "not a tutor, no class".
 */
export function resetClassState() {
  generation += 1;
  set(EMPTY);
}

export const openClassPicker = (mode = "start") => set({ picker: mode });
export const closeClassPicker = () => set({ picker: null });

export default function useClassSession() {
  return useSyncExternalStore(subscribe, () => state, () => state);
}