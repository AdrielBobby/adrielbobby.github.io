import { useSyncExternalStore } from 'react';

// "Phone" layout: a narrow window. Scenes switch to simpler, stacked layouts here
// (the same way they already do for reduced motion). Tablets and landscape phones
// above this width keep the desktop layout.
export const PHONE_QUERY = '(max-width: 700px)';
const mq = window.matchMedia(PHONE_QUERY);

export const isPhone = () => mq.matches;

export function subscribePhone(cb) {
  mq.addEventListener('change', cb);
  return () => mq.removeEventListener('change', cb);
}

export function usePhone() {
  return useSyncExternalStore(subscribePhone, isPhone, () => false);
}
