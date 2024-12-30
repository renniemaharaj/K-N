import { Field, FormStepMeta } from "../Signup/types";

// Used to override the individual field groups when collapsed
export const overrideGroups = "Signup";

// The initial and default title of the form, can be overridden by the formStepMetas
export const initialFormTitle = "Request a free quote";

// Desired Service
// Weekly Maid Service
// Bi-Weekly Maid Service
// Monthly Maid Service
// One Time Cleaning
// Move In/Out Cleaning
// Office Cleaning
// Disinfecting Service

// Form states and their display messages, omit any or all to have initialFormTitle used
export const formStepMetas: FormStepMeta[] = [
  {
    displayMessage: "Your Information",
    state: "You",
  },
  {
    displayMessage: "Contact",
    state: "Contact",
  },
  {
    displayMessage: "Security",
    state: "Security",
  },
  {
    displayMessage: "Quote",
    state: "Quote",
  },
];

// The fields of the form
export const formFields: Field[] = [
  {
    label: "First Name",
    name: "firstName",
    type: "text",
    placeholder: "First Name",
    group: "You",
  },
  {
    label: "Last Name",
    name: "lastName",
    type: "text",
    placeholder: "Last Name",
    group: "You",
  },
  {
    label: "Email",
    name: "emailAddress",
    type: "email",
    placeholder: "Email",
    group: "Contact",
  },
  {
    label: "Phone",
    name: "phoneNumber",
    type: "number",
    placeholder: "Phone Number",
    group: "Contact",
  },
  {
    label: "Desired Service",
    name: "desiredService",
    type: "select",
    options: [
      "Weekly Maid Service",
      "Bi-Weekly Maid Service",
      "Monthly Maid Service",
      "One Time Cleaning",
      "Move In/Out Cleaning",
      "Office Cleaning",
      "Disinfecting Service",
    ],
    placeholder: "Weekly Maid Service",
    group: "Quote",
  },
  {
    label: "How did you hear about us?",
    name: "referedByWhatMeans",
    type: "select",
    options: [
      "Facebook",
      "Social Media",
      "A friend",
      "Work",
      "Overhearing",
      "Other",
    ],
    placeholder: "Other",
    group: "Quote",
  },
];
