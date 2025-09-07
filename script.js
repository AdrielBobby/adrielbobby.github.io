// Mobile html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Adriel Bobby • Portfolio</title>
    <meta name="description" content="Portfolio and resume of Adriel Bobby — Cybersecurity and Computer Science.">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header class="site-header">
        <nav class="nav">
            <a class="brand" href="#home">Adriel Bobby</a>
            <button class="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">☰</button>
            <ul class="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#experience">Certifications</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#leadership">Leadership</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a class="btn" href="#resume">Resume</a></li>
            </ul>
        </nav>
    </header>

    <main id="home" class="hero">
        <div class="hero-inner">
            <h1 class="hero-heading">
                <span class="line-1">Breaking into cybersecurity</span>
                <span class="line-2 glimmer">one packet at a time</span>
            </h1>
            <p>I'm Adriel Bobby — a Computer Science student with a growing passion for cybersecurity and digital systems.</p>
            <div class="hero-cta">
                <a class="btn primary" href="#projects">Explore My Work</a>
                <a class="btn" href="#contact">Get in Touch</a>
            </div>
            <div class="meta">
                <span>2024–27</span>
                <span>RSET, Kochi</span>
            </div>
        </div>
    </main>

    <section id="about" class="section">
        <h2>About</h2>
        <div class="about-grid">
            <div class="about-story">
                <p>I'm a Computer Science Engineering student with a passion for cybersecurity, digital communication, and social media management. Aspiring cybersecurity specialist with strong interests in ethical hacking and cyber‑threat analysis.</p>
                <p>What started as curiosity about how things break turned into a drive to understand how to protect them. From penetration testing labs to hosting websites, I enjoy learning through doing. I believe in clear communication, continuous learning, and building with intention.</p>
                <ul class="contact-inline">
                    <li><a href="mailto:adrielbobby3@gmail.com">adrielbobby3@gmail.com</a></li>
                    <li><a href="https://linkedin.com/in/AdrielBobby" target="_blank" rel="noreferrer">LinkedIn</a></li>
                    <li><a href="https://github.com/AdrielBobby" target="_blank" rel="noreferrer">GitHub</a></li>
                </ul>
            </div>
            <aside class="quick-box purple-glow">
                <h3>Technical Skills</h3>
                <p><strong>Languages:</strong> C, Python, C++, Java</p>
                <p><strong>Tools:</strong> MySQL, Linux, Nmap, Gobuster, WPSCan, Joomscan, SQLMap, Metasploit, Searchsploit, Hydra, John the Ripper, Hashcat, Netcat, Tor, Burp Suite, Steghide, Stegseek</p>
                <p><strong>Domains:</strong> Cybersecurity, Web Application Security, Network Security, Social Media Management</p>
            </aside>
        </div>
    </section>

    <section id="education" class="section">
        <h2>Education</h2>
        <div class="cards">
            <article class="card purple-hover">
                <h3>B.Tech., Computer Science Engineering</h3>
                <p>Rajagiri School of Engineering and Technology, Kochi</p>
                <p><strong>Year:</strong> 2024–28 &nbsp; <strong>CGPA:</strong> 7.9</p>
            </article>
            <article class="card purple-hover">
                <h3>Class 12, CBSE</h3>
                <p>Rajagiri Public School, Kalamassery</p>
                <p><strong>Year:</strong> 2022–24 &nbsp; <strong>CGPA:</strong> 8.9</p>
            </article>
            <article class="card purple-hover">
                <h3>Class 10, CBSE</h3>
                <p>The Charter School, Pukattupady</p>
                <p><strong>Year:</strong> 2021–22 &nbsp; <strong>CGPA:</strong> 8.9</p>
            </article>
        </div>
    </section>

    <section id="experience" class="section">
        <h2>Certifications</h2>
        <div class="list">
            <div class="list-item purple-hover">
                <h3>Certified Penetration Tester — RedTeam Academy</h3>
                <p class="meta">May '25 – Aug '25</p>
                <ul>
                    <li>Hands-on ethical hacking, vulnerability scanning, and system exploitation.</li>
                    <li>Used Nmap, Burp Suite, Metasploit; privilege escalation and post‑exploitation labs.</li>
                    <li>Structured documentation and reporting of penetration test findings.</li>
                </ul>
            </div>
        </div>
    </section>

    <section id="projects" class="section">
        <h2>Projects</h2>
        <p class="legend">Completed: <span class="dot green"></span> · Ongoing: <span class="dot yellow"></span></p>
        <div class="cards">
            <article class="card glow-green">
                <h3>Vaccine Dispatch Tracker</h3>
                <ul>
                    <li>System to manage vaccine inventory and distribution; order placement and reporting.</li>
                    <li>Integrated stock updates and visualization for sales and dispatch.</li>
                    <li><strong>Tech:</strong> Python, MySQL</li>
                </ul>
            </article>
            <article class="card glow-yellow">
                <h3>ESP32 Marauder (Wi‑Fi & Bluetooth Pentesting Tool)</h3>
                <ul>
                    <li>Setup/customization for wireless auditing: deauth, sniffing, scanning.</li>
                    <li><strong>Tech:</strong> ESP32, Arduino IDE, Marauder Firmware, Wireshark</li>
                </ul>
            </article>
            <article class="card glow-yellow">
                <h3>Homelab for Cybersecurity</h3>
                <ul>
                    <li>Self‑hosted lab with VMs and vulnerable boxes for pentest practice.</li>
                    <li>Workflow with Nmap, Metasploit, Burp Suite, and SIEMs.</li>
                    <li><strong>Tech:</strong> VirtualBox, Ubuntu Server, Kali Linux, pfSense, Docker</li>
                </ul>
            </article>
        </div>
    </section>

    <section id="leadership" class="section">
        <h2>Leadership & Communities</h2>
        <div class="list">
            <div class="list-item purple-hover">
                <h3>Electronic Communications Coordinator — IEEE RSET SB</h3>
                <p class="meta">Mar 2025 – Present</p>
            </div>
        </div>
    </section>

    <section id="contact" class="section">
        <h2>Contact</h2>
        <form class="contact-form" name="contact" netlify>
            <label>
                <span>Name</span>
                <input type="text" name="name" required>
            </label>
            <label>
                <span>Email</span>
                <input type="email" name="email" required>
            </label>
            <label class="full">
                <span>Message</span>
                <textarea name="message" rows="5" required></textarea>
            </label>
            <button class="btn primary" type="submit">Send</button>
        </form>
    </section>

    <section id="resume" class="section">
        <h2>Resume</h2>
        <p>
        <a class="btn" href="Resume.pdf" target="_blank" rel="noreferrer">Download Resume</a>
    </section>

    <footer class="footer">
        <p>© <span id="year"></span> Adriel Bobby</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
```## **styles.css**
```css
:root {
  --bg: #0a0a0a;
  --panel: #111213;
  --text: #e6e6e6;
  --muted: #aeb0b4;
  --primary: #7c93ff;
  --primary-700: #5b6fe6;
  --ring: #2a2d35;
}

* { box-sizing: border-box; }
html, body { height: 100%; }
body {
  margin: 0;
  font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  background: radial-gradient(1200px 600px at 80% -10%, #1a1b1f 0%, rgba(10,10,10,0) 60%), var(--bg);
  color: var(--text);
  line-height: 1.6;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(10,10,10,0.6);
  backdrop-filter: saturate(140%) blur(10px);
  border-bottom: 1px solid var(--ring);
}
.nav { max-width: 1100px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; padding: 12px 20px; }
.brand { color: var(--text); text-decoration: none; font-weight: 700; letter-spacing: 0.3px; }
.nav-toggle { display:none; font-size: 22px; background:none; border:0; color:var(--text); }
.nav-links { list-style: none; margin: 0; padding: 0; display: flex; gap: 18px; align-items: center; }
.nav-links a { color: var(--muted); text-decoration: none; padding: 8px 10px; border-radius: 8px; }
.nav-links a:hover { color: var(--text); background: var(--ring); }
.nav-links .btn { border: 1px solid var(--ring); color: var(--text); }

.hero { padding: 72px 20px 24px; }
.hero-inner { max-width: 1100px; margin: 0 auto; padding: 24px; background: linear-gradient(180deg, rgba(124,147,255,0.08), rgba(124,147,255,0.0)); border: 1px solid var(--ring); border-radius: 16px; }
.hero-heading { margin: 0 0 12px; font-size: 52px; line-height: 1.05; letter-spacing: -0.5px; }
.hero-heading .line-1 { display: block; font-weight: 800; }
.hero-heading .line-2 { display: block; font-weight: 900; color: #cfc7ff; }
.glimmer { position: relative; background: linear-gradient(90deg, #cfc7ff, #8da1ff, #cfc7ff); -webkit-background-clip: text; background-clip: text; color: transparent; overflow: hidden; }
.glimmer::after { content: ""; position: absolute; inset: 0; background: linear-gradient(120deg, transparent 0%, rgba(255,255,255,.25) 15%, transparent 30%); transform: translateX(-120%); animation: shimmer 3s infinite; }
@keyframes shimmer { 0% { transform: translateX(-120%);} 60% { transform: translateX(120%);} 100% { transform: translateX(120%);} }
.hero h1 { margin: 0 0 12px; font-size: 32px; line-height: 1.2; }
.hero p { margin: 0 0 16px; color: var(--muted); }
.hero-cta { display:flex; gap:12px; margin: 12px 0 8px; }
.meta { color: var(--muted); display: flex; gap: 16px; font-size: 14px; }

.section { max-width: 1100px; margin: 28px auto; padding: 0 20px; }
.section h2 { font-size: 22px; margin: 0 0 14px; }

/* About layout */
.about-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
@media(min-width: 900px){ .about-grid { grid-template-columns: 2fr 1fr; } }
.about-story p { margin: 0 0 12px; }
.quick-box { padding: 16px; border: 1px solid var(--ring); border-radius: 14px; background: var(--panel); position: relative; }

/* Color shifting animation for Technical Skills box */
@keyframes colorShift {
  0% { box-shadow: 0 -12px 40px -10px rgba(139, 92, 246, 0.6); } /* Purple */
  33% { box-shadow: 0 -12px 40px -10px rgba(59, 130, 246, 0.6); } /* Blue */
  66% { box-shadow: 0 -12px 40px -10px rgba(124, 58, 237, 0.6); } /* Violet */
  100% { box-shadow: 0 -12px 40px -10px rgba(139, 92, 246, 0.6); } /* Back to Purple */
}

.purple-glow { 
  box-shadow: 0 -12px 40px -10px rgba(139, 92, 246, 0.6);
  animation: colorShift 4.5s ease-in-out infinite;
}

.purple-glow:hover { 
  box-shadow: 0 -12px 40px -10px rgba(139, 92, 246, 0.6);
  animation-play-state: paused;
}

.cards { display: grid; grid-template-columns: repeat(12, 1fr); gap: 16px; }
.card { grid-column: span 12; padding: 16px; border: 1px solid var(--ring); background: var(--panel); border-radius: 12px; }
@media(min-width: 700px){ .card { grid-column: span 4; } }
.card h3 { margin: 0 0 8px; font-size: 18px; }
.card p { margin: 0 0 6px; color: var(--muted); }
.card ul { margin: 0; padding-left: 18px; }

/* Project legend and colored card underglows with pulsating animation */
.legend { color: var(--muted); margin: 6px 0 14px; }
.legend .dot { display:inline-block; width:10px; height:10px; border-radius:50%; margin-right:6px; vertical-align: middle; }
.legend .green { background:#26c281; }
.legend .yellow { background:#f0b84b; }

/* Pulsating animations for project cards */
@keyframes pulsateGreen {
  0%, 100% { box-shadow: 0 -16px 50px -12px rgba(38,194,129,.5); }
  50% { box-shadow: 0 -20px 60px -10px rgba(38,194,129,.8); }
}

@keyframes pulsateYellow {
  0%, 100% { box-shadow: 0 -16px 50px -12px rgba(240,184,75,.5); }
  50% { box-shadow: 0 -20px 60px -10px rgba(240,184,75,.8); }
}

.glow-green { 
  box-shadow: 0 -16px 50px -12px rgba(38,194,129,.5);
  animation: pulsateGreen 3s ease-in-out infinite;
}

.glow-yellow { 
  box-shadow: 0 -16px 50px -12px rgba(240,184,75,.5);
  animation: pulsateYellow 3s ease-in-out infinite;
}

.list .list-item { padding: 16px; border: 1px solid var(--ring); border-radius: 12px; background: var(--panel); }
.list .meta { margin-top: 4px; }
.purple-hover { transition: box-shadow .25s ease; }
.purple-hover:hover { box-shadow: 0 -12px 40px -10px rgba(139, 92, 246, 0.6); }

.contact-inline { list-style: none; display:flex; flex-wrap: wrap; gap: 12px; padding: 0; margin: 10px 0 0; }
.contact-inline a { color: var(--primary); text-decoration: none; }
.contact-inline a:hover { color: var(--primary-700); }

.contact-form { display: grid; grid-template-columns: 1fr; gap: 12px; padding: 16px; border: 1px solid var(--ring); background: var(--panel); border-radius: 12px; }
.contact-form label { display:flex; flex-direction: column; gap: 6px; }
.contact-form .full { grid-column: 1/-1; }
.contact-form input, .contact-form textarea { background: #0d0f12; color: var(--text); border: 1px solid var(--ring); border-radius: 8px; padding: 10px 12px; font: inherit; }
.contact-form input:focus, .contact-form textarea:focus { outline: 2px solid var(--primary-700); outline-offset: 0; }

.btn { display:inline-block; padding: 10px 14px; border-radius: 10px; text-decoration:none; color: var(--text); background: #0f1115; border: 1px solid var(--ring); }
.btn.primary { background: linear-gradient(180deg, var(--primary), var(--primary-700)); border: 0; color: #fff; }
.btn[aria-disabled="true"] { opacity: 0.6; pointer-events: none; }

.footer { max-width: 1100px; margin: 32px auto; padding: 20px; color: var(--muted); border-top: 1px solid var(--ring); }

/* Mobile nav */
@media(max-width: 760px){
  .nav-toggle { display:block; }
  .nav-links { position: absolute; right: 20px; top: 54px; background: rgba(10,10,10,0.9); border: 1px solid var(--ring); border-radius: 12px; padding: 8px; display: none; flex-direction: column; width: 220px; }
  .nav-links.show { display: flex; }
}
```## **script.js**
```javascript
// Mobile nav toggle
const toggle nav toggle
const toggler('.nav-toggle = document.querySelector('.nav-toggleor('.nav-links');
if (toggle && links) { = document.querySelector('.nav-links');
if (toggle && links) {nks.classList.toggle('show
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('shownded', Stringeks-page linksddEventListener
document.addEventListener) => {
  constrget; target = e.target;nceof
  if (target instanceofagName === ' && target.tagName === ') {
    const href =href'); target.getAttribute('href');ith
    if (href && href.startsWith'#')) {
      e.preventDefaultuerySelector(href); = document.querySelector(href);llIntoView({ behavior
        el.scrollIntoView({ behavior 'start' });      }
    }
  }
// Yearnst year footer
const yearlementByI = document.getElementByIear');
if (yearEl= StringEl.textContent = String());(new Date().getFullYear());
