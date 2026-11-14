// A scene whose colour changes while it sits under the nav pill (the opening
// goes dark, green, then pale) can tell the nav which colours to wear.
// 'dark' or 'light' overrides the nav's own reading; null hands control back.
let current = null;
const listeners = new Set();

export function setNavTheme(theme) {
  if (theme === current) return;
  current = theme;
  listeners.forEach((fn) => fn(theme));
}

export function onNavTheme(fn) {
  listeners.add(fn);
  fn(current);
  return () => listeners.delete(fn);
}
