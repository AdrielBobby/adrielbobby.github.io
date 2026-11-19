// Saves the last year of GitHub contributions (weekly totals plus a few numbers) to
// src/data/contributions.json, using the GitHub CLI you are already signed in with.
// Runs before every deploy (npm run predeploy). If it fails (offline, signed out) the
// existing file is kept, so a deploy never breaks because of this.
import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const LOGIN = 'AdrielBobby';
const OUT = fileURLToPath(new URL('../src/data/contributions.json', import.meta.url));
const QUERY = `query { user(login: "${LOGIN}") { contributionsCollection { contributionCalendar {
  totalContributions weeks { firstDay contributionDays { date contributionCount } } } } } }`;

try {
  const raw = execFileSync('gh', ['api', 'graphql', '-f', `query=${QUERY}`], { encoding: 'utf8' });
  const cal = JSON.parse(raw).data.user.contributionsCollection.contributionCalendar;
  const days = cal.weeks.flatMap((w) => w.contributionDays);
  let streak = 0;
  let longest = 0;
  for (const d of days) {
    streak = d.contributionCount > 0 ? streak + 1 : 0;
    if (streak > longest) longest = streak;
  }
  const weeks = cal.weeks.map((w) => ({ start: w.firstDay, count: w.contributionDays.reduce((a, d) => a + d.contributionCount, 0) }));
  const busiest = weeks.reduce((a, b) => (b.count > a.count ? b : a), weeks[0]);
  const data = {
    total: cal.totalContributions,
    activeDays: days.filter((d) => d.contributionCount > 0).length,
    longestStreak: longest,
    busiestWeek: busiest,
    weeks,
    updated: new Date().toISOString().slice(0, 10),
  };
  writeFileSync(OUT, JSON.stringify(data, null, 1) + '\n');
  console.log(`contributions: ${data.total} in the last year, saved to src/data/contributions.json`);
} catch (e) {
  console.warn(`contributions: could not fetch (${String(e.message).split('\n')[0]}); keeping the saved numbers`);
}
