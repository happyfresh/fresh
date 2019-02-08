export const base = {
  familySansSerif: 'BlinkMacSystemFont, -apple-system, "Helvetica Neue", "Helvetica", "Arial", sans-serif',
  familyMonospace: 'monospace',
  weightLight: 300,
  weightNormal: 400,
  weightMedium: 500,
  weightSemibold: 600,
  weightBold: 700
};

export const derived = {
  familyPrimary: base.familySansSerif,
  familySecondary: base.familySansSerif
};

export default {
  ...base,
  ...derived
};
