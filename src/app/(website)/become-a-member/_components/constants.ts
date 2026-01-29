import type { ApplicationFormState } from "./types";

export const emptyFormState: ApplicationFormState = {
  firstName: "",
  lastName: "",
  emailAddress: "",
  address: "",
  phoneNumber: "",
  civilStatus: "",
  gender: "",
  nationality: "",
  birthday: "",
  age: "",
  churchOrganizationAffiliation: "",
  churchAddress: "",
  regionProvince: "",
  position: "",
  positionOthers: "",
  height: "",
  weight: "",
  bloodType: "",
  colorOfEyes: "",
  colorOfSkin: "",
  sssNumber: "",
  tinNumber: "",
  emergencyName: "",
  emergencyCellphone: "",
  elementarySchool: "",
  secondarySchool: "",
  tertiarySchool: "",
  postGraduateStudies: "",
  ministerialWorkExperience: [
    { jobDescription: "", years: "" },
    { jobDescription: "", years: "" },
    { jobDescription: "", years: "" },
  ],
  skillsTalents: "",
  branchOfService: [],
  branchOfServiceOthers: "",
  characterReferences: [
    { name: "", position: "", contactNumber: "" },
    { name: "", position: "", contactNumber: "" },
    { name: "", position: "", contactNumber: "" },
  ],
  photoUrl: "",
  signatureUrl: "",
};

export const steps = [
  {
    id: 1,
    title: "Personal details",
    description: "Basic identity and contact information.",
  },
  {
    id: 2,
    title: "Church & background",
    description: "Ministry role, church affiliation, and service.",
  },
  {
    id: 3,
    title: "Education & ministry",
    description: "Educational history and ministry experience.",
  },
  {
    id: 4,
    title: "References & review",
    description: "Character references and final confirmation.",
  },
] as const;

