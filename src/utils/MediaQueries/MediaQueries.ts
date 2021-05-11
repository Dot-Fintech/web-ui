export const breakpoints = {
  sm: 600,
  md: 960,
  lg: 1280,
};

export const MediaQueries = {
  up: (breakpoint: keyof typeof breakpoints): string =>
    `@media (min-width: ${breakpoints[breakpoint]}px)`,
  down: (breakpoint: keyof typeof breakpoints): string =>
    `@media (max-width: ${breakpoints[breakpoint]}px)`,
};
