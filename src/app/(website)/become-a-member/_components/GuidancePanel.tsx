"use client";

import { Info } from "lucide-react";
import { PreviewToggleButton } from "@/components/membership/PreviewToggleButton";

export function GuidancePanel({
  isPreview,
  onTogglePreviewAction,
}: {
  isPreview: boolean;
  onTogglePreviewAction: () => void;
}) {
  return (
    <div className="space-y-6">
      <PreviewToggleButton
        isPreview={isPreview}
        onToggle={onTogglePreviewAction}
      />

      <div className="rounded-2xl border border-[#032a0d]/15 bg-white/80 px-5 py-6 shadow-sm backdrop-blur">
        <h2 className="font-serif text-xl sm:text-2xl text-[#032a0d] mb-3">
          How the application works
        </h2>
        <p className="text-sm text-[#032a0d]/80 leading-relaxed mb-4">
          The membership form is divided into clear steps. Your information will
          help us know you better and place you in the right chaplaincy context.
        </p>
        <ol className="space-y-3 text-sm sm:text-base text-[#032a0d]/85">
          <li className="flex gap-3">
            <span className="mt-0.5 inline-flex size-6 items-center justify-center rounded-full bg-[#032a0d]/10 text-xs font-semibold text-[#032a0d]">
              1
            </span>
            <div>
              <p className="font-semibold">Provide your personal details</p>
              <p className="text-xs sm:text-sm text-[#032a0d]/70">
                Basic contact information and civil status.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="mt-0.5 inline-flex size-6 items-center justify-center rounded-full bg-[#032a0d]/10 text-xs font-semibold text-[#032a0d]">
              2
            </span>
            <div>
              <p className="font-semibold">
                Share your church and ministry background
              </p>
              <p className="text-xs sm:text-sm text-[#032a0d]/70">
                Current role, affiliation, and service areas.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="mt-0.5 inline-flex size-6 items-center justify-center rounded-full bg-[#032a0d]/10 text-xs font-semibold text-[#032a0d]">
              3
            </span>
            <div>
              <p className="font-semibold">
                Add education, experience, and references
              </p>
              <p className="text-xs sm:text-sm text-[#032a0d]/70">
                Your formation, skills, and character references.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="mt-0.5 inline-flex size-6 items-center justify-center rounded-full bg-[#032a0d]/10 text-xs font-semibold text-[#032a0d]">
              4
            </span>
            <div>
              <p className="font-semibold">Review and submit</p>
              <p className="text-xs sm:text-sm text-[#032a0d]/70">
                Confirm that all details are correct before submission.
              </p>
            </div>
          </li>
        </ol>
      </div>

      <div className="rounded-2xl border border-dashed border-[#032a0d]/25 bg-[#032a0d]/3 px-5 py-4 text-xs sm:text-sm text-[#032a0d]/80 flex gap-3">
        <Info className="mt-0.5 size-4 shrink-0 text-[#032a0d]" />
        <p>
          Your progress is automatically saved as a draft. If you refresh or
          leave this page, you can continue right where you left off when you
          come back.
        </p>
      </div>
    </div>
  );
}
