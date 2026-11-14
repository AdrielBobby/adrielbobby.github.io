// The contact.sh terminal, ported from docs/contact-sketch.html. It types an
// intro once, then takes commands. The message command posts to Formspree,
// the same form the previous site used. Lines are built as DOM nodes, never
// from HTML strings, so whatever a visitor types is only ever shown as text.

export const EMAIL = 'adrielbobby3@gmail.com';
const GITHUB = 'github.com/AdrielBobby';
const LINKEDIN = 'linkedin.com/in/adrielbobby';
const TINKER = '@adriel_bobby';
const FORMSPREE = 'https://formspree.io/f/mdavbvzg';
const RESUME = '/Resume.pdf';
const CASE_FILES = ['thaalam', 'calm-cockpit', 'medledger', 'thangan'];
const HELP = [
  'help      this list',
  'email     my address',
  'github    my github',
  'linkedin  my linkedin',
  'resume    my resume (PDF)',
  'projects  the four case files',
  'message   write to me from here',
  'clear     clear the screen',
];

// A line is a list of parts: plain strings, or small objects.
const span = (text, cls) => ({ text, cls });
const link = (text, href) => ({ text, href });
const route = (text, to) => ({ text, to }); // a page inside the site
const mail = link(EMAIL, `mailto:${EMAIL}`);
const github = link(GITHUB, `https://${GITHUB}`);
const linkedin = link(LINKEDIN, `https://${LINKEDIN}`);
const tinker = link(TINKER, `https://tinkerhub.org/${TINKER}`);

export function createTerminal({ body, onReady, navigate, reduce }) {
  let flow = null; // which step of the message flow we are in
  let data = {};

  // the live input line
  const inputRow = document.createElement('div');
  inputRow.className = 'ct-input';
  const label = document.createElement('label');
  label.htmlFor = 'ct-inp';
  label.textContent = '> ';
  const input = document.createElement('input');
  input.id = 'ct-inp';
  input.autocomplete = 'off';
  input.autocapitalize = 'off';
  input.spellcheck = false;
  input.setAttribute('aria-label', 'Terminal input. Type help for commands.');
  inputRow.append(label, input);
  body.replaceChildren(inputRow);

  function node(part) {
    if (typeof part === 'string') return document.createTextNode(part);
    if (part.href) {
      const a = document.createElement('a');
      a.href = part.href;
      a.textContent = part.text;
      if (!part.href.startsWith('mailto:')) { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
      return a;
    }
    if (part.to) {
      const a = document.createElement('a');
      a.href = part.to;
      a.textContent = part.text;
      a.addEventListener('click', (e) => { e.preventDefault(); navigate(part.to); });
      return a;
    }
    const s = document.createElement('span');
    s.className = part.cls;
    s.textContent = part.text;
    return s;
  }
  function line(parts, cls) {
    const p = document.createElement('p');
    if (cls) p.className = cls;
    p.append(...[].concat(parts).map(node));
    body.insertBefore(p, inputRow);
    body.scrollTop = body.scrollHeight;
    return p;
  }
  const wait = (ms) => new Promise((r) => setTimeout(r, reduce ? 0 : ms));
  // types the plain text, then swaps in the real line (so links work)
  function typeLine(parts, text, speed) {
    return new Promise((res) => {
      if (reduce) { line(parts); res(); return; }
      const p = line('');
      let i = 0;
      const t = setInterval(() => {
        p.textContent = text.slice(0, ++i);
        if (i >= text.length) { clearInterval(t); p.replaceChildren(...[].concat(parts).map(node)); res(); }
      }, speed);
    });
  }
  const setPrompt = (t) => { label.textContent = t; };
  const hideInput = (hidden) => { inputRow.style.visibility = hidden ? 'hidden' : ''; };

  async function intro() {
    hideInput(true);
    await typeLine([span('>', 'ct-pr'), ' ping adriel'], '> ping adriel', 35);
    await wait(150);
    line([span('>', 'ct-pr'), ' status: ', span('online ●', 'ct-ok')]);
    await wait(120);
    for (const [key, value] of [['email', mail], ['github', github], ['linkedin', linkedin], ['tinkerhub', tinker]]) {
      line([span(key, 'ct-key'), ': ', value]);
      await wait(110);
    }
    line('type help for commands, or message to write to me.', 'ct-mu');
    hideInput(false);
    onReady();
  }

  async function send() {
    hideInput(true);
    line('sending...', 'ct-mu');
    try {
      const res = await fetch(FORMSPREE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        // Formspree rejects an email field that is not a valid address, so leave it out when none was given.
        body: JSON.stringify(data.email ? { name: data.name, email: data.email, message: data.message } : { name: data.name, message: data.message }),
      });
      if (!res.ok) throw new Error(String(res.status));
      line('message delivered ✓', 'ct-ok');
      line('connection closed.', 'ct-ok');
    } catch {
      line(['could not send. please email me instead: ', mail], 'ct-er');
    }
    hideInput(false);
    input.focus({ preventScroll: true });
  }

  function flowStep(v) {
    if (v.toLowerCase() === 'cancel') { flow = null; setPrompt('> '); line('cancelled.', 'ct-mu'); return; }
    if (flow === 'name') {
      if (!v) return;
      data.name = v; flow = 'email'; setPrompt('> enter your email (optional): ');
    } else if (flow === 'email') {
      if (v && !/^\S+@\S+\.\S+$/.test(v)) { line('that does not look like an email. try again, or press enter to skip.', 'ct-er'); return; }
      data.email = v; flow = 'message'; setPrompt('> enter your message: ');
    } else if (flow === 'message') {
      if (!v) return;
      data.message = v; flow = null; setPrompt('> ');
      send();
    }
  }

  function run(raw) {
    const cmd = raw.trim();
    line([span(label.textContent, 'ct-pr'), raw]);
    if (flow) { flowStep(cmd); return; }
    const c = cmd.toLowerCase();
    if (!c) return;
    if (c === 'help') HELP.forEach((t) => line('  ' + t, 'ct-mu'));
    else if (c === 'email') line(mail);
    else if (c === 'github') line(github);
    else if (c === 'linkedin') line(linkedin);
    else if (c === 'tinkerhub') line(tinker);
    else if (c === 'resume') line([link('Resume.pdf', RESUME), span(' (opens in a new tab)', 'ct-mu')]);
    else if (c === 'projects') CASE_FILES.forEach((n) => line(route(`/projects/${n}`, `/projects/${n}`)));
    else if (c === 'message' || c === 'contact' || c === 'start') {
      flow = 'name'; data = {};
      line('initializing secure channel... (type cancel to stop)', 'ct-mu');
      setPrompt('> enter your name: ');
    } else if (c === 'clear') body.querySelectorAll('p').forEach((p) => p.remove());
    else if (c === 'sudo hire adriel') {
      line('[sudo] password for recruiter: ', 'ct-mu');
      line('permission granted.', 'ct-ok');
      line(['no paperwork needed. just ', link('send me an email', `mailto:${EMAIL}`), '.']);
    } else line([`command not found: ${cmd}. type `, span('help', 'ct-ok'), '.'], 'ct-er');
  }

  const onKey = (e) => {
    if (e.key !== 'Enter') return;
    const v = input.value;
    input.value = '';
    run(v);
  };
  const onClick = (e) => { if (!e.target.closest('a')) input.focus({ preventScroll: true }); };
  input.addEventListener('keydown', onKey);
  body.addEventListener('click', onClick);

  return {
    intro,
    focus: () => input.focus({ preventScroll: true }),
    destroy: () => { input.removeEventListener('keydown', onKey); body.removeEventListener('click', onClick); },
  };
}
