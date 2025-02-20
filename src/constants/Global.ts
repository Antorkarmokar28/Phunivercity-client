export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const gender = ["Male", "Female", "Other"];

export const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export const designation = ["Student", "Faculty", "Admin"];

export const monthOptions = monthNames.map((item) => ({
  value: item,
  label: item,
}));

export const genderOptions = gender.map((item) => ({
  value: item.toLowerCase(),
  label: item,
}));

export const bloodGroupsOptions = bloodGroups.map((item) => ({
  value: item,
  label: item,
}));

export const designationOptions = designation.map((item) => ({
  value: item.toLowerCase(),
  label: item,
}));
