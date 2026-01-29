"use client";

import type { ChangeEvent } from "react";
import { useEffect, useMemo, useState } from "react";
import { ChevronRight, ExpandIcon, XIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import { GuidancePanel } from "./GuidancePanel";
import { MembershipPreview } from "./MembershipPreview";
import { emptyFormState, steps } from "./constants";
import { loadDraft, saveDraft } from "./draftStorage";
import type { ApplicationFormState, StepIndex } from "./types";

import { StepPersonalDetails } from "./steps/StepPersonalDetails";
import { StepChurchBackground } from "./steps/StepChurchBackground";
import { StepEducationMinistry } from "./steps/StepEducationMinistry";
import { StepReferencesReview } from "./steps/StepReferencesReview";

const DRAFT_SAVE_DEBOUNCE_MS = 500;

export function BecomeMemberWizard() {
  const [step, setStep] = useState<StepIndex>(() => loadDraft().step);
  const [form, setForm] = useState<ApplicationFormState>(
    () => loadDraft().form,
  );
  const [isPreview, setIsPreview] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => saveDraft(form, step), DRAFT_SAVE_DEBOUNCE_MS);
    return () => clearTimeout(id);
  }, [form, step]);

  const currentStep = steps[step];
  const progress = useMemo(() => ((step + 1) / steps.length) * 100, [step]);

  const updateField = <K extends keyof ApplicationFormState>(
    key: K,
    value: ApplicationFormState[K],
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep((prev) => (prev + 1) as StepIndex);
    }
  };

  const prevStep = () => {
    if (step > 0) {
      setStep((prev) => (prev - 1) as StepIndex);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      // TODO: wire this up to your Convex mutation.
      console.log("Membership application draft:", form);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePhotoChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === "string") {
        updateField("photoUrl", reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSignatureChange = (signature: string | null) => {
    updateField("signatureUrl", signature ?? "");
  };

  const FormCard = ({ isFullscreenView }: { isFullscreenView: boolean }) => (
    <div
      className={
        isFullscreenView
          ? "h-full w-full"
          : "rounded-2xl border border-[#032a0d]/15 bg-white shadow-sm p-5 sm:p-6 lg:p-7"
      }
    >
      <div
        className={
          isFullscreenView
            ? "sticky top-0 z-10 bg-white border-b border-[#032a0d]/10 px-5 sm:px-6 lg:px-7 pt-5 sm:pt-6 lg:pt-7 pb-4"
            : "mb-6"
        }
      >
        <div className="flex items-center justify-between mb-2 gap-3">
          <p className="text-xs sm:text-sm uppercase text-[#032a0d]/70">
            Step {step + 1} of {steps.length}
          </p>
          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setIsFullscreen((prev) => !prev)}
              className="border-[#032a0d]/30 text-[#032a0d] hover:bg-[#032a0d]/5"
            >
              {isFullscreen ? (
                <>
                  <XIcon className="size-3.5" />
                  Exit
                </>
              ) : (
                <>
                  <ExpandIcon className="size-3.5" />
                  Full screen
                </>
              )}
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-serif text-lg sm:text-xl text-[#032a0d]">
            {currentStep.title}
          </h2>
          <span className="text-[11px] sm:text-xs text-[#032a0d]/70">
            {currentStep.description}
          </span>
        </div>

        <div className="h-1.5 w-full rounded-full bg-neutral-200 overflow-hidden">
          <div
            className="h-full rounded-full bg-[#032a0d] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className={isFullscreenView ? "px-5 sm:px-6 mt-5 lg:px-7 pb-7" : ""}>
        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          {step === 0 && (
            <StepPersonalDetails
              form={form}
              updateField={updateField}
              handlePhotoChange={handlePhotoChange}
            />
          )}
          {step === 1 && (
            <StepChurchBackground form={form} updateField={updateField} />
          )}
          {step === 2 && (
            <StepEducationMinistry form={form} updateField={updateField} />
          )}
          {step === 3 && (
            <StepReferencesReview
              form={form}
              updateField={updateField}
              handleSignatureChange={handleSignatureChange}
            />
          )}

          <div className="flex items-center justify-between pt-2">
            <Button
              type="button"
              variant="outline"
              disabled={step === 0}
              onClick={prevStep}
              className="border-[#032a0d]/40 text-[#032a0d] hover:bg-[#032a0d]/5"
            >
              Back
            </Button>

            {step < steps.length - 1 ? (
              <Button
                type="button"
                onClick={nextStep}
                className="bg-[#032a0d] hover:bg-[#032a0d]/90"
              >
                Next
                <ChevronRight className="size-4" />
              </Button>
            ) : (
              <Button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="bg-[#032a0d] hover:bg-[#032a0d]/90"
              >
                {isSubmitting ? "Saving..." : "Save application draft"}
                <ChevronRight className="size-4" />
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <section className="py-10 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.1fr)] items-start">
        <GuidancePanel
          isPreview={isPreview}
          onTogglePreviewAction={() => setIsPreview((prev) => !prev)}
        />

        {!isPreview ? (
          <>
            <div className={isFullscreen ? "hidden" : "block"}>
              <FormCard isFullscreenView={false} />
            </div>

            <Dialog open={isFullscreen} onOpenChange={setIsFullscreen}>
              <DialogContent className="max-w-none! w-screen h-dvh p-0 gap-0">
                <div className="h-full w-full bg-white overflow-y-auto">
                  <FormCard isFullscreenView />
                </div>
              </DialogContent>
            </Dialog>
          </>
        ) : (
          <MembershipPreview form={form} />
        )}
      </div>
    </section>
  );
}

