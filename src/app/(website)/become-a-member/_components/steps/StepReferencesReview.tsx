"use client";

import { Input } from "@/components/ui/input";
import { Info } from "lucide-react";
import SignatureInput from "@/components/ui/signature-input";
import { Field } from "../Field";
import type { ApplicationFormState } from "../types";

export function StepReferencesReview({
  form,
  updateField,
  handleSignatureChange,
}: {
  form: ApplicationFormState;
  updateField: <K extends keyof ApplicationFormState>(
    key: K,
    value: ApplicationFormState[K],
  ) => void;
  handleSignatureChange: (signature: string | null) => void;
}) {
  return (
    <div className="space-y-5">
      <div className="space-y-3">
        <h3 className="font-serif text-base sm:text-lg text-[#032a0d]">
          Character references
        </h3>
        <p className="text-xs sm:text-sm text-[#032a0d]/70">
          Please provide at least one person who can vouch for your character
          and ministry.
        </p>
        <div className="space-y-3">
          {form.characterReferences.map((ref, index) => (
            <div
              key={index}
              className="grid gap-3 sm:grid-cols-3 rounded-lg border border-dashed border-[#032a0d]/20 px-3 py-3"
            >
              <Field label={`Name #${index + 1}`}>
                <Input
                  value={ref.name}
                  onChange={(e) => {
                    const copy = [...form.characterReferences];
                    copy[index] = { ...copy[index], name: e.target.value };
                    updateField("characterReferences", copy);
                  }}
                  placeholder="Full name"
                />
              </Field>
              <Field label="Position / relationship">
                <Input
                  value={ref.position}
                  onChange={(e) => {
                    const copy = [...form.characterReferences];
                    copy[index] = { ...copy[index], position: e.target.value };
                    updateField("characterReferences", copy);
                  }}
                  placeholder="e.g. Senior Pastor"
                />
              </Field>
              <Field label="Contact number">
                <Input
                  value={ref.contactNumber}
                  onChange={(e) => {
                    const copy = [...form.characterReferences];
                    copy[index] = {
                      ...copy[index],
                      contactNumber: e.target.value,
                    };
                    updateField("characterReferences", copy);
                  }}
                  placeholder="e.g. 09XX XXX XXXX"
                />
              </Field>
            </div>
          ))}
        </div>

        <Field
          label="Applicant's signature"
          hint="Use your mouse, trackpad, or finger to sign inside the box."
        >
          <div className="mt-1">
            <SignatureInput onSignatureChange={handleSignatureChange} />
            {form.signatureUrl && (
              <p className="mt-1 text-[10px] sm:text-xs text-[#032a0d]/70">
                Signature captured. You may clear and redraw if needed.
              </p>
            )}
          </div>
        </Field>
      </div>

      <div className="rounded-lg border border-[#032a0d]/15 bg-[#032a0d]/3 px-4 py-3 text-xs sm:text-sm text-[#032a0d]/80 flex gap-3">
        <Info className="mt-0.5 size-4 shrink-0 text-[#032a0d]" />
        <p>
          By submitting this form, you affirm that the information provided is
          true and correct to the best of your knowledge. Final endorsement and
          membership approval will be communicated to you by the leadership.
        </p>
      </div>
    </div>
  );
}

