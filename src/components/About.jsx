// About.jsx — The "whoami" section with terminal blink-in effect
// and an interactive expandable skills tree.

// useState lets us track which tree folders are open or closed.
// useEffect runs code after the component renders (used for the terminal typing).
// useRef creates a reference to a DOM element.
import { useState, useEffect, useRef } from 'react';

// useInView from framer-motion watches when the section enters the viewport.
import { useInView } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';

// The skills data for the terminal tree.
// Each category has a name and a list of items inside it.
const skillTree = [
  {
    category: 'languages',    // folder label
    items: ['C', 'Python', 'C++', 'Java', 'JavaScript'],
  },
  {
    category: 'tools',
    items: [
      'MySQL', 'Linux', 'Nmap', 'Gobuster', 'WPScan', 'Joomscan',
      'SQLMap', 'Metasploit', 'Searchsploit', 'Hydra', 'John the Ripper',
      'Hashcat', 'Netcat', 'Tor', 'Burp Suite', 'Steghide', 'Stegseek',
    ],
  },
  {
    category: 'domains',
    items: ['Cybersecurity', 'Web Application Security', 'Network Security', 'Social Media Management'],
  },
];

// The bio lines that "type in" one by one like a terminal.
const bioLines = [
  "CS Engineering student @ RSET",
  "Passionate about ethical hacking & cyber-threat analysis",
  "Curiosity about how things break drives me to protect them",
  "I enjoy setting up labs, hosting websites, exploring vulnerabilities",
  "I value clear communication, continuous learning, hands-on experimentation",
];

export default function About() {

  // 'openFolders' tracks which skill category folders are expanded.
  // It's an object like { languages: true, tools: false, domains: false }
  const [openFolders, setOpenFolders] = useState({});

  // 'typedLines' holds the fully typed out bio lines so far.
  const [typedLines, setTypedLines] = useState([]);

  // 'currentLineText' holds the partial string of the line currently being typed.
  const [currentLineText, setCurrentLineText] = useState('');

  // 'isTyping' tracks if the typewriter effect is still actively running.
  const [isTyping, setIsTyping] = useState(false);

  // 'cursor' controls whether the blinking cursor is visible.
  const [cursor, setCursor] = useState(true);

  const ref = useRef(null);

  // Watch when the About section enters the screen.
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  // This effect runs when isInView becomes true — types out bio lines character by character.
  useEffect(() => {
    if (!isInView) return; // don't start until the section is visible

    let isCancelled = false; // prevents state updates if component unmounts
    let timeoutId;
    let lineIndex = 0; // which line we're currently "typing"
    let charIndex = 0; // which character in the line we're at

    setIsTyping(true); // reveal the cursor and start typing

    const typeNext = () => {
      if (isCancelled) return;

      if (lineIndex < bioLines.length) {
        const currentFullLine = bioLines[lineIndex];

        // If we haven't typed the full line yet...
        if (charIndex < currentFullLine.length) {
          // Slice the string up to the current character and update state
          setCurrentLineText(currentFullLine.substring(0, charIndex + 1));
          charIndex++;
          timeoutId = setTimeout(typeNext, 30); // 30ms per character for a fast typewriter effect
        } else {
          // The line is fully typed! Move it to typedLines and reset partial state
          setTypedLines(prev => [...prev, currentFullLine]);
          setCurrentLineText('');
          lineIndex++;
          charIndex = 0;
          timeoutId = setTimeout(typeNext, 400); // 400ms pause before starting the next line
        }
      } else {
        // All lines are finished, stop typing and hide the cursor permanently.
        setIsTyping(false);
      }
    };

    timeoutId = setTimeout(typeNext, 500); // 500ms initial delay before typing begins

    return () => {
      isCancelled = true;
      clearTimeout(timeoutId);
    };
  }, [isInView]);

  // This effect makes the cursor blink by toggling 'cursor' every 500ms.
  useEffect(() => {
    const blink = setInterval(() => {
      setCursor(prev => !prev); // toggle: true → false → true → ...
    }, 500);
    return () => clearInterval(blink); // cleanup on unmount
  }, []);

  // toggleFolder opens a folder if it's closed, closes it if it's open.
  function toggleFolder(category) {
    setOpenFolders(prev => ({
      ...prev, // keep existing folder states
      [category]: !prev[category], // flip the clicked one
    }));
  }

  return (
    // id="about" is the scroll target for the Navbar "About" link.
    <section id="about" ref={ref}>
      <div className="container">

        {/* Section heading styled like a terminal command */}
        <h2 className="section-title">
          {/* The prompt prefix in purple to mimic a terminal */}
          <span style={{ color: 'var(--color-primary)' }}>$ </span>whoami
        </h2>

        {/* Terminal window wrapper */}
        <div className="terminal-box">

          {/* Decorative terminal top bar with three dots (like macOS/Linux terminal) */}
          <div className="terminal-topbar">
            {/* Red, yellow, green dots — purely decorative */}
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>

          {/* Terminal body — where the lines type in */}
          <div className="terminal-body">

            {/* First line: the whoami command itself */}
            <p className="terminal-line">
              <span style={{ color: 'var(--color-primary)' }}>adriel@portfolio</span>
              <span style={{ color: 'var(--color-text)' }}>:~$ </span>
              <span style={{ color: 'var(--color-green)' }}>whoami</span>
            </p>

            {/* Map over fully typed lines */}
            {typedLines.map((line, i) => (
              line ? (
                <p key={i} className="terminal-line terminal-output">
                  {/* Dash prefix mimics shell output */}
                  <span style={{ color: 'var(--color-primary)' }}>→ </span>{line}
                </p>
              ) : null
            ))}

            {/* Render the line currently being typed, with the cursor following the text! */}
            {isTyping && (
              <p className="terminal-line terminal-output">
                <span style={{ color: 'var(--color-primary)' }}>→ </span>
                {currentLineText}
                <span className="terminal-cursor" style={{ opacity: cursor ? 1 : 0 }}>█</span>
              </p>
            )}

          </div>
        </div>

        {/* ===== Skills Tree ===== */}
        {/* Wrap the whole tree in a terminal-box so it gets the same macOS-style window */}
        <div className="terminal-box">

          {/* Same decorative top bar as the bio terminal */}
          <div className="terminal-topbar">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>

          {/* Tree content goes inside terminal-body for consistent padding */}
          <div className="terminal-body">

            <p className="terminal-line" style={{ marginBottom: '0.75rem' }}>
              <span style={{ color: 'var(--color-primary)' }}>adriel@portfolio</span>
              <span style={{ color: 'var(--color-text)' }}>:~$ </span>
              <span style={{ color: 'var(--color-green)' }}>ls skills/</span>
            </p>

            {/* The tree root node */}
            <div className="tree-root">
              <span className="tree-icon">📁</span>
              <span className="tree-label">skills</span>
            </div>

            {/* Loop over skillTree categories */}
            {skillTree.map((branch, i) => {
              // Is this the last category? Affects which tree connector to draw.
              const isLast = i === skillTree.length - 1;

              // Is this folder currently open?
              const isOpen = openFolders[branch.category];

              return (
                <div key={branch.category} className="tree-branch">

                  {/* The folder row — clickable to expand/collapse */}
                  <div
                    className="tree-folder"
                    onClick={() => toggleFolder(branch.category)}
                    // role="button" and tabIndex make it keyboard-accessible.
                    role="button"
                    tabIndex={0}
                    // Also allow keyboard users to toggle with Enter or Space.
                    onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && toggleFolder(branch.category)}
                  >
                    {/* Tree connector: └── for last item, ├── for others */}
                    <span className="tree-connector">{isLast ? '└── ' : '├── '}</span>

                    {/* Folder icon changes when open/closed */}
                    <span className="tree-icon">{isOpen ? '📂' : '📁'}</span>

                    {/* Category name */}
                    <span className="tree-category-label">{branch.category}</span>

                    {/* Arrow indicator rotates when open */}
                    <span
                      className="tree-arrow"
                      style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
                    >
                      ▶
                    </span>
                  </div>

                  {/* The items inside the folder — only shown when isOpen is true */}
                  {isOpen && (
                    <div className="tree-items">
                      {branch.items.map((item, j) => {
                        const isLastItem = j === branch.items.length - 1;
                        return (
                          <div key={item} className="tree-item">
                            {/* Indentation connector for nested items */}
                            <span className="tree-indent">
                              {isLast ? '    ' : '│   '}
                            </span>
                            <span className="tree-connector">
                              {isLastItem ? '└── ' : '├── '}
                            </span>
                            {/* File icon for leaf items */}
                            <span className="tree-icon">▸</span>
                            {/* The actual skill name */}
                            <span className="tree-item-label">{item}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}

                </div>
              );
            })}
          </div>
        </div>

        {/* ===== GitHub Contributions Calendar ===== */}
        <div className="github-cal-card base-card">
          <div className="github-cal-header">
            <span className="github-cal-title">GitHub Contributions</span>
            <span className="github-cal-sub">Last 12 months</span>
          </div>
          <div className="github-cal-body">
            <GitHubCalendar
              username="AdrielBobby"
              colorScheme="dark"
              theme={{
                light: ['#eee8f4', '#c4b5fd', '#8b5cf6', '#5b2d8e', '#2d1b4e'],
                dark:  ['#07080d', '#2d1b4e', '#5b2d8e', '#8b5cf6', '#c4b5fd'],
              }}
              blockSize={13}
              blockMargin={4}
              fontSize={12}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
