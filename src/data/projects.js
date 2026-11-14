// The four featured projects, in the order they appear on the home page.
// Their case-file copy lives in docs/case-files.md until step 6 of the build.
export const projects = [
  { slug: 'thaalam', name: 'Thaalam' },
  { slug: 'calm-cockpit', name: 'Calm Cockpit' },
  { slug: 'medledger', name: 'MedLedger' },
  { slug: 'thangan', name: 'Thangan' },
];

export const findProject = (slug) => projects.find((p) => p.slug === slug);
