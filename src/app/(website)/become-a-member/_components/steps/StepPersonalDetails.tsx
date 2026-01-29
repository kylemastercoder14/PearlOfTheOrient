"use client";

import type { ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Field } from "../Field";
import type { ApplicationFormState } from "../types";

export function StepPersonalDetails({
  form,
  updateField,
  handlePhotoChange,
}: {
  form: ApplicationFormState;
  updateField: <K extends keyof ApplicationFormState>(
    key: K,
    value: ApplicationFormState[K],
  ) => void;
  handlePhotoChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="First name" required>
          <Input
            value={form.firstName}
            onChange={(e) => updateField("firstName", e.target.value)}
            placeholder="e.g. Juan"
          />
        </Field>
        <Field label="Last name" required>
          <Input
            value={form.lastName}
            onChange={(e) => updateField("lastName", e.target.value)}
            placeholder="e.g. Dela Cruz"
          />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Email address" required>
          <Input
            type="email"
            value={form.emailAddress}
            onChange={(e) => updateField("emailAddress", e.target.value)}
            placeholder="you@example.com"
          />
        </Field>
        <Field label="Mobile / phone number" required>
          <Input
            value={form.phoneNumber}
            onChange={(e) => updateField("phoneNumber", e.target.value)}
            placeholder="e.g. 09XX XXX XXXX"
          />
        </Field>
      </div>

      <Field label="Home address" required>
        <Input
          value={form.address}
          onChange={(e) => updateField("address", e.target.value)}
          placeholder="House no., street, barangay, city / municipality"
        />
      </Field>

      <div className="grid gap-4 sm:grid-cols-3">
        <Field label="Civil status" required>
          <Select
            value={form.civilStatus}
            onValueChange={(value) =>
              updateField(
                "civilStatus",
                value as ApplicationFormState["civilStatus"],
              )
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Single">Single</SelectItem>
              <SelectItem value="Married">Married</SelectItem>
              <SelectItem value="Widowed">Widowed</SelectItem>
              <SelectItem value="Separated">Separated</SelectItem>
            </SelectContent>
          </Select>
        </Field>

        <Field label="Gender" required>
          <Select
            value={form.gender}
            onValueChange={(value) =>
              updateField("gender", value as ApplicationFormState["gender"])
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Male">Male</SelectItem>
              <SelectItem value="Female">Female</SelectItem>
            </SelectContent>
          </Select>
        </Field>

        <Field label="Nationality" required>
          <Input
            value={form.nationality}
            onChange={(e) => updateField("nationality", e.target.value)}
            placeholder="e.g. Filipino"
          />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <Field label="Date of birth" required>
          <Input
            type="date"
            value={form.birthday}
            onChange={(e) => updateField("birthday", e.target.value)}
          />
        </Field>
        <Field label="Age" required>
          <Input
            type="number"
            min={0}
            max={150}
            value={form.age}
            onChange={(e) => updateField("age", e.target.value)}
          />
        </Field>
        <Field label="Region / Province" required>
          <Input
            value={form.regionProvince}
            onChange={(e) => updateField("regionProvince", e.target.value)}
            placeholder="e.g. Region IV-A, Cavite"
          />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Emergency contact name" required>
          <Input
            value={form.emergencyName}
            onChange={(e) => updateField("emergencyName", e.target.value)}
            placeholder="Full name of emergency contact"
          />
        </Field>
        <Field label="Emergency contact mobile" required>
          <Input
            value={form.emergencyCellphone}
            onChange={(e) => updateField("emergencyCellphone", e.target.value)}
            placeholder="e.g. 09XX XXX XXXX"
          />
        </Field>
      </div>

      <Field
        label="Recent ID photo"
        hint="A clear 2x2 or profile photo. This will appear on your membership record."
      >
        <div className="flex items-center gap-4">
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className="text-xs sm:text-sm"
          />
          {form.photoUrl && (
            <div className="h-16 w-16 rounded-md border border-[#032a0d]/20 overflow-hidden bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={form.photoUrl}
                alt="Applicant photo preview"
                className="h-full w-full object-cover"
              />
            </div>
          )}
        </div>
      </Field>
    </div>
  );
}

