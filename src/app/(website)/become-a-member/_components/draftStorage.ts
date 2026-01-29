"use client";

import { emptyFormState } from "./constants";
import type { ApplicationFormState, StepIndex } from "./types";

const STORAGE_KEY = "pearl-member-application-draft";

type StoredDraft = {
  form: Partial<ApplicationFormState>;
  step: number;
};

function mergeForm(partial: Partial<ApplicationFormState>): ApplicationFormState {
  const form: ApplicationFormState = { ...emptyFormState };
  for (const key of Object.keys(emptyFormState) as (keyof ApplicationFormState)[]) {
    const value = partial[key];
    if (value === undefined) continue;
    if (Array.isArray(value)) {
      (form as Record<string, unknown>)[key] = value;
    } else if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      (form as Record<string, unknown>)[key] = value;
    } else {
      (form as Record<string, unknown>)[key] = value;
    }
  }
  return form;
}

export function loadDraft(): {
  form: ApplicationFormState;
  step: StepIndex;
} {
  if (typeof window === "undefined") {
    return { form: emptyFormState, step: 0 };
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { form: emptyFormState, step: 0 };
    const parsed = JSON.parse(raw) as StoredDraft;
    const step = Number(parsed.step);
    const stepIndex: StepIndex =
      step >= 0 && step <= 3 ? (step as StepIndex) : 0;
    const form = mergeForm(parsed.form ?? {});
    return { form, step: stepIndex };
  } catch {
    return { form: emptyFormState, step: 0 };
  }
}

export function saveDraft(
  form: ApplicationFormState,
  step: StepIndex,
): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ form, step }));
  } catch {
    // ignore quota or parse errors
  }
}
