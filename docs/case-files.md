# Case file copy (drafts in Adriel's voice)

Working text for the four featured case files. Facts come from the READMEs and repos; "my part" lines come from Adriel's own answers, lightly edited. Nothing here is invented beyond that. Anything marked ❓ needs Adriel.

## 01 Thaalam
Written and approved, in `casefile-sketch.html` ("My part" section).

## 02 Calm Cockpit
**One line:** A personal dashboard for my own student life, built because my college portal wouldn't show me my attendance percentage.

**File card**
- Status: in use, still growing (single-page version 1, multipage version 2)
- Built for: myself
- Stack: Flask, Jinja, SQLite, vanilla JS and CSS, Chart.js
- Credit: the end-sem (ESE) calculator is Ryyan Safar's code from his repo help-me-survive-college, used with his permission
- Links: GitHub (both versions)

**The problem**
My college student login doesn't show me my attendance percentage. That is what started it. Then I realised the whole college website's UI was bad, so I decided to make a dashboard for myself.

**What it does**
Heavily inspired by Notion. Attendance and timetable, grades and the end-sem calculator, an assignments tracker, a gym record, a scrapbook for marking ideas, and a project log. The assignments tracker exists because assignments live on Google Classroom, not on the college website, so everything now sits in one place. (A Torn view is in progress; left out for now, Adriel's call.)

**My part**
Every feature came from my own ideas, apart from the end-sem grades tracker, which is Ryyan's. I decided what it should do and how it should look and feel.

*Wording rule (Adriel's call): no "built it all from scratch myself" or "wrote every line" claims, on any case file. Talk about ideas, design and decisions, and credit others where their code is used. Adriel is ready to say how it was made if asked.*

**Key decisions**
1. **Build it instead of putting up with the portal.** The decision to make it at all is the one Adriel is proudest of.
2. **Borrow the best part, with permission and credit.** The end-sem tracker is Ryyan Safar's code. Adriel asked, got a yes, and put it into Calm Cockpit. The case file says so plainly.
3. **Keep it personal.** Adriel could make it multi-user so everyone gets their own copy, but it is tuned to his own life and he doesn't think anyone else would use it the same way. So it stays single-user on purpose.

**Honest limits**
Single user, tuned for one person. The first version is a single page; the multipage version splits grades, finance and gym.

**Not written:** a "hardest part" section. Adriel said nothing was especially annoying, so there is nothing to invent.

## 03 MedLedger
**One line:** A DBMS class microproject that grew into a full pharmacy stock system: batch-by-batch stock, sales that always use the earliest-expiring batch first, and a database that refuses to sell expired or missing stock.

**File card**
- Status: complete
- Context: DBMS microproject (college coursework)
- Stack: Oracle Database 23ai (Free, in Docker), Node.js, Express, React, TypeScript, Vite
- Links: GitHub (`pharma-batch-tracker`)

**Outcome first**
- 10 normalised tables (to 3NF), 4 reporting views, 4 triggers, a stored procedure and a stored function (from the README)
- Concurrency handled with `SELECT … FOR UPDATE` while allocating stock

**The problem**
A pharmacy has to sell the batch that expires first, never sell expired stock, and never sell stock it doesn't have. The aim was a database that enforces those rules itself, not an app that merely hopes to.

**What it does**
Receives supplier stock batch by batch. Records each sale with FEFO (first expired, first out). Blocks expired or insufficient stock. Tracks expiry risk. Purchase and sale history can't be edited through the normal UI, so there is an audit trail.

**My part**
It started as a microproject for DBMS and turned into a pretty big project. ❓ Adriel to confirm which parts he did (database design, API, dashboard) if he wants them listed.

**The hardest part**
The database. I couldn't work out how to install Oracle on my machine.

**Key decisions**
1. **Run Oracle in a container instead of installing it.** I couldn't get a normal Oracle install working, so I used the Oracle 23ai container. It's the decision I'm proudest of: one `docker compose up` gives anyone the same database, with no install fight.
2. **Put the rules in the database.** Triggers, constraints and row locks enforce FEFO and block bad sales, so the rules hold no matter which client calls the API. (README: triggers, constraints, `FOR UPDATE`.)

**What I'd change:** nothing. I'm happy with it as it is.

**Honest note:** the repo's old description said MySQL/PostgreSQL; the README and the project are Oracle 23ai.

## 04 Thangan
Private project: writing only, no repo link, marked in progress.

**One line:** A local AI "second brain" that answers questions about my college life in plain English, running entirely on my own machine and strictly read-only.

**File card**
- Status: in progress (private)
- Reads: Calm Cockpit (classes, attendance, grades, projects, goals) and an Obsidian vault (notes)
- Interfaces: a terminal app and a private Discord bot
- Stack: Python, Ollama, Llama 3.1 8B, discord.py, Rich, Pillow, pytest

**The problem**
My data was split between two places: Calm Cockpit for classes, attendance and grades, and Obsidian for notes. I wanted one place to ask "what's my lowest attendance?", "when is my AAD exam?" or "what's due this week?". The model runs through Ollama on my own machine, so my grades and notes don't go to an AI service.

**Read-only by design**
It can look at everything and change nothing. Only GET requests to a fixed list of endpoints are allowed, a test (`StaticSafetyTests`) scans the source for forbidden constructs, and a request like "mark this as done" is refused before the model sees it.

**The hardest part**
The small local model. An 8B model reads a single value fine, but it falls apart on sorting, filtering or counting ("third lowest attendance", "which subjects are below 80%"). It would confidently drop rows or invent numbers.
- My first guess was the context window. I tested it by running 115 real questions against my own data. The biggest prompt used 5,718 of 8,192 tokens, so that wasn't it. (Verified in the project's master plan.)
- A bigger 14B model only improved from about 70% to about 77% and made the same attendance mistakes. (Verified.)
- My own answer checker marked correct answers wrong, matching "5" inside a date and "1" inside "81.8". I ended up reading every answer by hand to trust the results.

**The decision I'm proudest of**
Do the maths in code and let the model do the talking. After the test, I moved sorting, counting and comparing into plain Python (`exact.py`): rankings, thresholds, best and worst, marks and exam dates, with ties ("a tie at 87.5%"), follow-ups ("and the third lowest?") and date parsing ("5 Nov"). The model only handles open-ended questions, and it gets the exact data. I found the real cause by measuring first, then fixed that instead of reaching for a bigger model. (The move to `exact.py` is in the repo notes.)
Results on my own test set, as Adriel reports them:
- Correct answers rose from about 81 of 115 to 114 of 115 ❓
- 91 of the 115 are now answered without calling the model ❓
- Median reply time is about 0.1 seconds ❓
❓ These three numbers are not in the repo's notes. Keep them only if Adriel can point to the evaluation output or re-run it. Until then, publish the verified figures only.

The read-only design was the other decision made early.

**What I'd change**
- Design the Obsidian vault first. It's the "second" half of the second brain and still the least developed part.
- Replace the name-matching router with tool-calling over a small set of read-only tools. The current router spots project, subject and semester names, which is brittle (abbreviations like "WP" and mixed-topic questions trip it up).
- Run live checks and the 115-question evaluation earlier, instead of leaning on unit tests.
- Add a per-user allowlist to the Discord bot. It relies on the server being private, a risk accepted in the project's decision log (D-033).

**Honest limits (must stay on the page)**
- Discord is the transport, so replies that contain grades or notes pass through Discord's servers. The terminal app is fully local; Discord is used only when working remotely (decision D-035). So "my data never leaves my machine" is true for the terminal and the model, not for the Discord bot's replies.
- No per-user allowlist in the bot (D-033).
