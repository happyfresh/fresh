export const base = {
  black: 'hsl(0, 0%, 4%)',
  blackBis: 'hsl(0, 0%, 7%)',
  blackTer: 'hsl(0, 0%, 14%)',
  greyDarker: 'hsl(0, 0%, 21%)',
  greyDark: 'hsl(0, 0%, 29%)',
  grey: 'hsl(0, 0%, 48%)',
  greyLight: 'hsl(0, 0%, 71%)',
  greyLighter: 'hsl(0, 0%, 86%)',
  whiteTer: 'hsl(0, 0%, 96%)',
  whiteBis: 'hsl(0, 0%, 98%)',
  white: 'hsl(0, 0%, 100%)',
  orange: 'hsl(14, 100%, 53%)',
  yellow: 'hsl(48, 100%, 67%)',
  green: 'hsl(141, 71%, 48%)',
  turquoise: 'hsl(171, 100%, 41%)',
  cyan: 'hsl(204, 86%, 53%)',
  blue: 'hsl(217, 71%, 53%)',
  purple: 'hsl(271, 100%, 71%)',
  red: 'hsl(348, 100%, 61%)',
};

export const derived = {
  primary: base.turquoise,
  info: base.cyan,
  success: base.green,
  warning: base.yellow,
  danger: base.red,
  light: base.whiteTer,
  dark: base.greyDarker,
  background: base.whiteTer,
  border: base.greyLighter,
  borderHover: base.greyLight,
  text: base.greyDark,
  link: base.blue,
  linkVisited: base.purple,
  linkFocus: base.greyDarker,
  linkFocusBorder: base.blue,
  linkActive: base.greyDarker,
  linkActiveBorder: base.greyDark
};

export default {
  ...base,
  ...derived
};
