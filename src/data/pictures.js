// Project pictures from Adriel, cropped and converted to WebP
// (crops remove a browser tab bar and a personal to-do list).
import thaalamGlove from '../assets/projects/thaalam-glove.webp';
import thaalamDashboard from '../assets/projects/thaalam-dashboard.webp';
import calmOverview from '../assets/projects/calm-cockpit-overview.webp';
import calmAcademics from '../assets/projects/calm-cockpit-academics.webp';
import medOverview from '../assets/projects/medledger-overview.webp';
import medExpiry from '../assets/projects/medledger-expiry.webp';
import thanganTerminal from '../assets/projects/thangan-terminal.webp';
import thanganAsk from '../assets/projects/thangan-ask.webp';
import thanganDiscord from '../assets/projects/thangan-discord.webp';

// src, width, height (height keeps the space reserved, so nothing jumps as they load)
export const pics = {
  thaalamGlove: { src: thaalamGlove, w: 1600, h: 900, alt: 'The Thaalam glove: a white glove wired with LEDs, buzzers and a motion sensor, in front of a laptop running the dashboard.' },
  thaalamDashboard: { src: thaalamDashboard, w: 1280, h: 805, alt: 'The Thaalam dashboard: tempo controls on the left and a 3D chenda with coloured finger targets.' },
  calmOverview: { src: calmOverview, w: 1600, h: 822, alt: 'Calm Cockpit overview: today’s timetable, an attendance snapshot per subject and a grades snapshot.' },
  calmAcademics: { src: calmAcademics, w: 1600, h: 1000, alt: 'Calm Cockpit academics page: an SGPA trend chart and a semester table.' },
  medOverview: { src: medOverview, w: 1600, h: 1000, alt: 'MedLedger overview: units on hand, inventory value, expiry alerts, low stock, an expiry watchlist and recent sales.' },
  medExpiry: { src: medExpiry, w: 1600, h: 611, alt: 'MedLedger expiry centre: batches with days left and one expired batch.' },
  thanganTerminal: { src: thanganTerminal, w: 1467, h: 820, alt: 'Thangan in the terminal: the Thangan banner and an attendance chart against an 80% line.' },
  thanganAsk: { src: thanganAsk, w: 1600, h: 519, alt: 'Thangan answering “which subject has my lowest attendance” and the follow-up “and the third lowest?”.' },
  thanganDiscord: { src: thanganDiscord, w: 1326, h: 712, alt: 'An attendance chart sent by the Thangan Discord bot.' },
};
