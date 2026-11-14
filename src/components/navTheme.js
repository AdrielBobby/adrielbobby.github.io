// A scene whose colour changes while it sits under the nav pill (the opening
// goes dark, green, then pale; Contact dissolves to black) can tell the nav
// which colours to wear: 'dark' or 'light'.
// Each scene reports under its own name, so one scene handing control back
// (null) never undoes another's.
const sources = new Map();
const listeners = new Set();
let current = null;

export function setNavTheme(theme, source = 'default') {
  if (theme == null) sources.delete(source);
  else sources.set(source, theme);
  const next = [...sources.values()].pop() ?? null;
  if (next === current) return;
  current = next;
  listeners.forEach((fn) => fn(next));
}

export function onNavTheme(fn) {
  listeners.add(fn);
  fn(current);
  return () => listeners.delete(fn);
}
