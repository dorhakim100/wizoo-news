export const mobileBreakpoint = +getComputedStyle(document.documentElement)
  .getPropertyValue('--narrow-screen-number')
  .trim()
