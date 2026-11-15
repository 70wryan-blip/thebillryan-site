// Static site generator for thebillryan.com. No dependencies.
// Usage: node build.mjs  ->  writes dist/
import { mkdirSync, writeFileSync, cpSync, rmSync } from "node:fs";
import * as D from "./data.mjs";

const OUT = "dist";
rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });

const esc = (s = "") => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const fmtDate = (iso) => {
  const [y, m, d] = iso.split("-").map(Number);
  return `${["January","February","March","April","May","June","July","August","September","October","November","December"][m - 1]} ${d}, ${y}`;
};

const NAV = [
  ["index.html", "Home"],
  ["writing.html", "Writing"],
  ["books.html", "Books"],
  ["book-club.html", "Book Club"],
  ["speaking.html", "Speaking"],
  ["letter.html", "The Letter"],
  ["shop.html", "Shop"],
  ["app.html", "The App"],
  ["about.html", "About"],
];

function page({ file, title, description, body }) {
  const nav = NAV.map(([href, label]) =>
    `<a href="${href}"${href === file ? ' aria-current="page"' : ""}>${label}</a>`).join("");
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="site-head">
  <div class="wrap head-row">
    <a class="wordmark" href="index.html">Bill Ryan</a>
    <button class="menu-btn" id="menu-btn" aria-expanded="false" aria-controls="site-nav">Menu</button>
    <nav class="site-nav" id="site-nav" aria-label="Site">${nav}</nav>
  </div>
</header>
<main id="main">
${body}
</main>
<footer class="site-foot">
  <div class="wrap foot-grid">
    <div>
      <p class="foot-mark"><a href="index.html">Bill Ryan</a></p>
      <p class="foot-line">What are we building. And what is it doing to us?</p>
    </div>
    <nav aria-label="Footer">
      <a href="${D.SUBSTACK}">Substack</a>
      <a href="${D.LINKEDIN}">LinkedIn</a>
      <a href="letter.html">The Letter</a>
      <a href="speaking.html#inquiry">Book Bill to speak</a>
    </nav>
  </div>
  <div class="wrap foot-small">&copy; 2026 Bill Ryan &middot; LiveForward Publishing</div>
</footer>
<script src="site.js"></script>
</body>
</html>`;
}

const scaleBar = (label) => `<p class="eyebrow">${label}</p>`;

const bookCover = (b, size = "") => {
  if (b.forthcoming) {
    return `<div class="cover ghost ${size}" aria-hidden="true"><span class="cover-title">${esc(b.title)}</span><span class="cover-author">Forthcoming</span></div>`;
  }
  if (b.cover) return `<img class="cover-img ${size}" src="${b.cover}" alt="Cover of ${esc(b.title)}" width="480" height="720" loading="lazy">`;
  return `<div class="cover ${size}" style="--book:${b.color}" aria-hidden="true"><span class="cover-title">${esc(b.title)}${size === "large" && b.sub ? `<span class="cover-sub">${esc(b.sub)}</span>` : ""}</span><span class="cover-author">Bill Ryan</span></div>`;
};

const bookCard = (b) => {
  const link = b.forthcoming ? `<span class="muted">In progress</span>`
    : `<a class="text-link" href="${b.url}">${b.linkLabel || "Paperback on Amazon"}</a>`;
  const more = b.page ? ` <a class="text-link" href="${b.page}">The book page and club questions</a>` : "";
  return `<article class="book">
  ${b.page ? `<a href="${b.page}" class="cover-link">${bookCover(b)}</a>` : bookCover(b)}
  <div class="book-body">
    <h3>${b.page ? `<a href="${b.page}">${esc(b.title)}</a>` : esc(b.title)}${b.isNew ? ' <span class="tag">New</span>' : ""}</h3>
    <p class="book-sub">${esc(b.sub)}${b.year ? ` &middot; ${b.year}` : ""}</p>
    <p>${esc(b.line)}</p>
    <p class="book-links">${link}${more}</p>
  </div>
</article>`;
};

const pieceRow = (p) => `<li class="piece">
  <time datetime="${p.date}">${fmtDate(p.date)}</time>
  <div><a href="${p.url}" class="piece-title">${esc(p.title)}</a>${p.dek ? `<p>${esc(p.dek)}</p>` : ""}</div>
  ${p.lens ? `<span class="lens-chip">${esc(p.lens)}</span>` : ""}
</li>`;

const form = ({ id, kind, heading, intro, fields, button }) => `<section class="panel" id="${id}">
  <h2>${heading}</h2>
  ${intro ? `<p>${intro}</p>` : ""}
  <form class="contact-form" data-kind="${kind}" novalidate>
    ${fields.map((f) => {
      const fid = `${id}-${f.name}`;
      const req = f.required ? " required" : "";
      let control;
      if (f.type === "textarea") control = `<textarea id="${fid}" name="${f.name}" rows="4"${req}></textarea>`;
      else if (f.type === "select") control = `<select id="${fid}" name="${f.name}"${req}>${f.options.map((o) => `<option>${esc(o)}</option>`).join("")}</select>`;
      else control = `<input id="${fid}" name="${f.name}" type="${f.type || "text"}"${req}${f.type === "email" ? ' autocomplete="email"' : ""}>`;
      return `<div class="field${f.wide ? " wide" : ""}"><label for="${fid}">${f.label}${f.required ? "" : ' <span class="opt">optional</span>'}</label>${control}</div>`;
    }).join("\n    ")}
    <div class="hp" aria-hidden="true"><label for="${id}-website">Leave this empty</label><input id="${id}-website" name="website" tabindex="-1" autocomplete="off"></div>
    <div class="field wide"><button type="submit" class="btn">${button}</button><p class="form-status" role="status"></p></div>
  </form>
</section>`;

const tqs = D.bookGroups[0].books[0];
const pages = [];

// ---------- Home
pages.push({
  file: "index.html",
  title: "Bill Ryan",
  description: "Bill Ryan writes, speaks and builds. Books, essays, talks and a weekly letter on what we are building, and what it is doing to us.",
  body: `<section class="hero wrap">
  <div class="hero-text">
    ${scaleBar("Author &middot; Speaker &middot; Builder")}
    <h1>What are we building. And what is it doing to us?</h1>
    <p class="lede">I grew up in a homebuilding family in Chicago and have spent a career building homes. Now I write every day about the ideas that connect the built world to the lived one, at every scale: the person, the home, the street and the country.</p>
    <p class="hero-actions"><a class="btn" href="letter.html">Get the Sunday letter</a><a class="btn ghost-btn" href="speaking.html">Book Bill to speak</a></p>
  </div>
  <a class="hero-book" href="the-quiet-suit.html">
    ${bookCover(tqs, "large")}
    <span class="hero-book-note"><span class="tag">New</span> The Quiet Suit, a Christmas novel. Book club questions are ready.</span>
  </a>
</section>
<section class="wrap doors" aria-label="Where to go">
  <a class="door" href="writing.html"><span class="door-k">Read</span><span class="door-h">The writing</span><span class="door-p">Essays in four lenses, from the interior life to the Republic.</span></a>
  <a class="door" href="books.html"><span class="door-k">Own</span><span class="door-h">The books</span><span class="door-p">Ten books in print, with a third Why book on the way.</span></a>
  <a class="door" href="speaking.html"><span class="door-k">Invite</span><span class="door-h">Speaking</span><span class="door-p">Keynotes, workshops and retreat cohorts for teams.</span></a>
  <a class="door" href="book-club.html"><span class="door-k">Gather</span><span class="door-h">Book Club</span><span class="door-p">Questions for your club, and a visit from Bill.</span></a>
</section>
<section class="wrap section">
  <div class="section-head"><h2>Recent essays</h2><a class="text-link" href="writing.html">All the writing</a></div>
  <ul class="pieces">${D.pieces.slice(0, 4).map(pieceRow).join("")}</ul>
</section>`,
});

// ---------- Writing
pages.push({
  file: "writing.html",
  title: "Writing | Bill Ryan",
  description: "Essays by Bill Ryan in four lenses: The Interior, The Room, The Street and The Republic.",
  body: `<section class="wrap page-head">
  ${scaleBar("Writing")}
  <h1>The question does not change. The altitude does.</h1>
  <p class="lede">I publish on Substack, often more than once a day. The writing is arranged by height. Housing at the scale of a room is a design question. At the scale of a street it is a governance question. At the scale of a country it is a moral one.</p>
</section>
<section class="wrap ladder" aria-label="The four lenses">
  ${[...D.lenses].reverse().map((l, i) => `<a class="rung" href="${l.url}" style="--rung:${4 - i}">
    <span class="rung-scale">${esc(l.scale)}</span>
    <span class="rung-name">${esc(l.name)}</span>
    <span class="rung-text">${esc(l.text)}</span>
  </a>`).join("")}
  <p class="ladder-note">Four heights. One question. Start at the altitude you are standing on.</p>
</section>
<section class="wrap section">
  <div class="section-head"><h2>Recent essays</h2><a class="text-link" href="${D.SUBSTACK}">Everything on Substack</a></div>
  <ul class="pieces">${D.pieces.map(pieceRow).join("")}</ul>
</section>`,
});

// ---------- Books
pages.push({
  file: "books.html",
  title: "Books | Bill Ryan",
  description: "Books by Bill Ryan: fiction, purpose and the interior life, and the built world.",
  body: `<section class="wrap page-head">
  ${scaleBar("Books")}
  <h1>For thirty years, I wanted to write a book.</h1>
  <p class="lede">Ten are now in print. Some began on Substack and became books. Others began as books and unfolded there in public.</p>
</section>
${D.bookGroups.map((g) => `<section class="wrap section">
  <h2 class="group-h">${esc(g.name)}</h2>
  <div class="books">${g.books.map(bookCard).join("")}</div>
</section>`).join("")}`,
});

// ---------- The Quiet Suit
pages.push({
  file: "the-quiet-suit.html",
  title: "The Quiet Suit | Bill Ryan",
  description: "The Quiet Suit: A Christmas Story. A widower finds an old Santa suit in a thrift store and quietly changes how a town cares for its own. Questions for your book club.",
  body: `<section class="wrap book-hero">
  ${bookCover(tqs, "large")}
  <div>
    ${scaleBar("A Christmas novel &middot; 2026")}
    <h1>The Quiet Suit <span class="h-sub">A Christmas Story</span></h1>
    <p class="lede">A widower finds an old Santa suit in a thrift store and quietly changes how a town cares for its own.</p>
    <p>The story follows a man who finds an unlikely suit and acts on an impulse he does not fully understand. What begins with small acts of kindness soon becomes something larger. Strangers begin giving to strangers. A stone wall becomes a place of quiet generosity. And the man at the center of it all discovers that sometimes the most meaningful thing we can do is step aside.</p>
    <p>The Quiet Suit is a tender, contemplative holiday story about generosity, belonging, and the wonder we risk losing as we grow older.</p>
    <p>The novel unfolds in twenty-four short chapters, inspired by the Advent calendar and the anticipation of Christmas.</p>
    <p class="hero-actions"><a class="btn" href="${tqs.url}">Buy the paperback on Amazon</a><span class="muted">Also on Kindle</span></p>
    <dl class="facts">
      <div><dt>Form</dt><dd>A prologue, 24 chapters and an Author's Reflection</dd></div>
      <div><dt>Length</dt><dd>About 17,000 words; one or two evenings</dd></div>
      <div><dt>Dedication</dt><dd>For Stacy</dd></div>
      <div><dt>Published</dt><dd>November 10, 2026</dd></div>
    </dl>
  </div>
</section>
<section class="wrap section club" id="club">
  ${scaleBar("For your book club")}
  <h2>Questions for your club</h2>
  <details class="spoiler">
    <summary><span class="spoiler-k">Spoiler alert</span> These questions discuss the whole book, ending included. Finish it before your meeting. <span class="spoiler-open">Show the questions</span></summary>
    <ol class="questions">${D.tqsQuestions.map(([h, q]) => `<li><strong>${esc(h)}</strong> ${esc(q)}</li>`).join("")}</ol>
  </details>
  <p><button class="btn ghost-btn" type="button" data-print>Print the one-page guide</button></p>
</section>
<div class="wrap">${form({
    id: "visit", kind: "Book club visit (The Quiet Suit)",
    heading: "Bring Bill to your club",
    intro: "Reading The Quiet Suit with your club? Bill visits book clubs in person in Palm Beach County, and by video anywhere.",
    fields: [
      { name: "name", label: "Your name", required: true },
      { name: "email", label: "Email", type: "email", required: true },
      { name: "club", label: "Club name and where you meet", required: true, wide: true },
      { name: "mode", label: "In person or by video", type: "select", options: ["By video", "In person"] },
      { name: "members", label: "How many members" },
      { name: "dates", label: "A date or two that work", wide: true },
      { name: "message", label: "Anything we should know", type: "textarea", wide: true },
    ],
    button: "Ask for a visit",
  })}</div>`,
});

// ---------- Book Club
pages.push({
  file: "book-club.html",
  title: "Book Club | Bill Ryan",
  description: "Discussion questions for book clubs reading Bill Ryan's books, a printable guide, and visits in person or by video.",
  body: `<section class="wrap page-head">
  ${scaleBar("Book Club")}
  <h1>Ten questions for every book, and a seat for Bill if you want one.</h1>
  <p class="lede">Each book gets ten questions in the order a meeting runs, free to use and print. For the novels, eight are about the story and two are about your own life. Bill visits clubs in person in Palm Beach County, and by video anywhere.</p>
</section>
<section class="wrap section">
  <h2>The books</h2>
  <ul class="club-list">${D.clubOrder.map((c) => `<li>${c.page ? `<a href="${c.page}">${esc(c.title)}</a>` : `<span>${esc(c.title)}</span>`}<span class="${c.page ? "tag" : "muted"}">${esc(c.status)}${c.page ? " · spoiler alert" : ""}</span></li>`).join("")}</ul>
  <p class="muted">In the app, coming in 2027, each book has its own room where readers post answers and Bill replies.</p>
</section>
<div class="wrap">${form({
    id: "club-visit", kind: "Book club visit",
    heading: "Bring Bill to your club",
    fields: [
      { name: "name", label: "Your name", required: true },
      { name: "email", label: "Email", type: "email", required: true },
      { name: "book", label: "Which book", type: "select", options: ["The Quiet Suit", "Quiet Power", "The Fulfillment Curve", "Fix Your Why", "Building the Rich Life", "Another book"] },
      { name: "mode", label: "In person or by video", type: "select", options: ["By video", "In person"] },
      { name: "club", label: "Club name and where you meet", required: true, wide: true },
      { name: "dates", label: "A date or two that work", wide: true },
      { name: "message", label: "Anything we should know", type: "textarea", wide: true },
    ],
    button: "Ask for a visit",
  })}</div>`,
});

// ---------- Speaking
pages.push({
  file: "speaking.html",
  title: "Speaking | Bill Ryan",
  description: "Bill Ryan speaks to companies, executive teams and retreats. Keynotes, workshops and retreat cohorts.",
  body: `<section class="wrap person-head">
  <div class="page-head">
    ${scaleBar("Speaking")}
    <h1>The builder who thinks at every scale.</h1>
    <p class="lede">I speak to companies, executive teams and retreats about purpose, leadership, housing and civic design, and what it takes to build a life that holds under pressure. From the half-second before a decision to the architecture of a nation's housing.</p>
    <p class="hero-actions"><a class="btn" href="#inquiry">Book Bill to speak</a></p>
  </div>
  <img class="portrait square" src="photos/bill-headshot.jpg" alt="Bill Ryan" width="602" height="640">
</section>
<section class="wrap section">
  <article class="signature">
    ${scaleBar("The signature talk")}
    <h2>${esc(D.signatureTalk.title)}</h2>
    <p class="lede">${esc(D.signatureTalk.line)}</p>
    <p class="meta">${esc(D.signatureTalk.formats)} &middot; For ${esc(D.signatureTalk.audience.toLowerCase())}</p>
  </article>
</section>
<section class="wrap section">
  <h2>More talks</h2>
  <div class="talks">${D.talks.map((t) => `<article class="talk"><h3>${esc(t.title)}</h3><p>${esc(t.line)}</p><p class="meta">${esc(t.formats)} &middot; For ${esc(t.audience.charAt(0).toLowerCase() + t.audience.slice(1))}</p></article>`).join("")}</div>
</section>
<section class="wrap section">
  <div class="cohort">
    ${scaleBar("The retreat cohort")}
    <h2>A talk, then thirty days.</h2>
    <p>For companies that want the idea to last past the room: the talk, followed by thirty days of daily practice for every attendee, invoiced as part of the speaking fee.</p>
  </div>
</section>
<div class="wrap">${form({
    id: "inquiry", kind: "Speaking inquiry",
    heading: "Book Bill to speak",
    intro: "Tell us about the room. Bill replies personally.",
    fields: [
      { name: "name", label: "Your name", required: true },
      { name: "email", label: "Email", type: "email", required: true },
      { name: "org", label: "Organization", required: true },
      { name: "event", label: "Event and date", required: true },
      { name: "audience", label: "Audience and size", wide: true },
      { name: "talk", label: "Talk you have in mind", type: "select", wide: true, options: ["Not sure yet", D.signatureTalk.title, ...D.talks.map((t) => t.title)] },
      { name: "message", label: "Anything else", type: "textarea", wide: true },
    ],
    button: "Send the inquiry",
  })}</div>`,
});

// ---------- The Letter (Dave Brown's shape, pointed at the Sunday Digest)
pages.push({
  file: "letter.html",
  title: "The Bill Ryan Digest | Bill Ryan",
  description: "The Bill Ryan Digest: the week's essays in one place, every Sunday. Free.",
  body: `<section class="wrap letter-head">
  ${scaleBar("Free &middot; Every Sunday")}
  <h1>The Bill Ryan Digest</h1>
  <p class="lede">The week's essays in one place, with a note on what they add up to. Short enough to read with your Sunday coffee.</p>
  <div class="promises">
    <div><h3>The week, gathered</h3><p>Every essay from the past seven days, in one letter.</p></div>
    <div><h3>A few minutes</h3><p>Read the whole week, or pick the one that speaks to you.</p></div>
    <div><h3>From the builder who writes</h3><p>Homes, cities, work and the interior life, asked as one question.</p></div>
    <div><h3>Free, always</h3><p>No paywall on the letter. One click to leave if it is not for you.</p></div>
  </div>
  <div class="signup">
    <form class="substack-form" action="${D.SUBSTACK}/api/v1/free?nojs=true" method="post">
      <label for="sub-email">Your email</label>
      <div class="signup-row"><input id="sub-email" type="email" name="email" placeholder="you@example.com" required autocomplete="email"><button class="btn" type="submit">Subscribe</button></div>
      <p class="muted">You will be subscribed through Substack. Or <a class="text-link" href="${D.SUBSTACK}/subscribe">subscribe on Substack directly</a>.</p>
    </form>
  </div>
</section>
<section class="wrap section">
  <div class="section-head"><h2>Recent letters</h2><span class="muted">Read a few before you decide.</span></div>
  <ul class="pieces">${D.digests.map(pieceRow).join("")}</ul>
</section>`,
});

// ---------- Shop
pages.push({
  file: "shop.html",
  title: "Shop | Bill Ryan",
  description: "Pamphlets and books by Bill Ryan.",
  body: `<section class="wrap page-head">
  ${scaleBar("Shop")}
  <h1>Pamphlets</h1>
  <p class="lede">Short, printed, numbered. Each pamphlet makes one case from a series, in a form you can hold, keep and hand to someone else.</p>
</section>
<section class="wrap section">
  <div class="pamphlets">${D.pamphlets.map((p) => `<article class="pamphlet">
    <div class="p-cover" style="--book:${p.color}" aria-hidden="true"><span class="p-no">No. ${p.no}</span><span class="cover-title">${esc(p.title)}</span></div>
    <div><h3>No. ${p.no} &middot; ${esc(p.title)}</h3><p class="book-sub">${esc(p.sub)}</p><p><span class="tag quiet">${esc(p.status)}</span></p></div>
  </article>`).join("")}</div>
  <p>Pamphlets go on sale here when the first one is printed. <a class="text-link" href="letter.html">Get the Sunday letter</a> to hear when.</p>
</section>
<section class="wrap section">
  <h2>Books</h2>
  <p>Every book is available as a paperback on Amazon. <a class="text-link" href="books.html">See all ten</a>.</p>
</section>`,
});

// ---------- The App
pages.push({
  file: "app.html",
  title: "The App | Bill Ryan",
  description: "A daily practice from Building the Rich Life, with the whole body of Bill Ryan's work around it. Coming in 2027.",
  body: `<section class="wrap page-head">
  ${scaleBar("Coming in 2027")}
  <h1>A daily practice, with the whole body of work around it.</h1>
  <p class="lede">Each morning: a meditation from Building the Rich Life, a prompt, your own private answer, and then Bill's. Around it, every book, essay and series, a Book Club room for each book, and a way to talk back.</p>
</section>
<section class="wrap section">
  <div class="rooms">
    <div><h3>Today</h3><p>The day's meditation and prompt. Write your answer privately, then read Bill's.</p></div>
    <div><h3>My year</h3><p>Every answer you have written, by month and by season.</p></div>
    <div><h3>The Shelf</h3><p>The lines and pieces that stayed with you.</p></div>
    <div><h3>The catalog</h3><p>Everything Bill has written, with a Personal and a Business view, and his voice-overs.</p></div>
    <div><h3>Book Club</h3><p>A room for each book. Post your answers; Bill replies.</p></div>
    <div><h3>Cohorts</h3><p>For companies: the talk, then thirty days of practice together.</p></div>
  </div>
  <p class="muted">Paid Substack subscribers will get the app included for as long as their subscription runs.</p>
</section>
<div class="wrap">${form({
    id: "beta", kind: "App beta request",
    heading: "Ask to join the beta",
    intro: "A small group will use the app free before it launches, and tell us what to fix.",
    fields: [
      { name: "name", label: "Your name", required: true },
      { name: "email", label: "Email", type: "email", required: true },
      { name: "message", label: "How do you read Bill's work today?", type: "textarea", wide: true },
    ],
    button: "Ask to join",
  })}</div>`,
});

// ---------- About
pages.push({
  file: "about.html",
  title: "About | Bill Ryan",
  description: "Bill Ryan grew up in a homebuilding family in Chicago, has built and sold more than 10,000 residences, and writes daily about the built world and the lived one.",
  body: `<section class="wrap person-head">
  <div class="page-head">
    ${scaleBar("About")}
    <h1>Before I could drive, I understood foundations.</h1>
    <p class="lede">Builder, author and speaker. The principles that build a better home build a better life.</p>
  </div>
  <img class="portrait" src="photos/bill-portrait.jpg" alt="Bill Ryan" width="800" height="1199">
</section>
<section class="wrap prose">
  <p>I grew up in a homebuilding family in Chicago. Before I could drive, I understood foundations. How they are poured. What they bear. What happens when they fail.</p>
  <p>Over the course of my career I have designed hundreds of homes and built and sold more than 10,000 residences. As President of Town &amp; Country Homes I tripled sales in three years and built the first production homes in Disney's new town of Celebration. I have been named to Crain's Chicago Business "40 Under 40" and recognized as a Legend in Residential Marketing by the National Association of Home Builders.</p>
  <p>Today I lead The High-Performance Home, a systems integrator for residential construction, advise buyers and sellers in Palm Beach County with Compass, and write daily about the ideas that connect the built world to the lived one.</p>
  <p>I am a Notre Dame graduate, a father, and a practitioner of the Stoic philosophy I write about. I do not study these ideas. I operate from them.</p>
  <h2>What I believe</h2>
  <ul class="beliefs"><li>Cities reveal who we are.</li><li>Homes shape behavior more than we admit.</li><li>Leadership is quieter than it looks.</li><li>Meaning does not announce itself. It accumulates.</li></ul>
  <p>Writing is how I examine these beliefs, refine them, and test them against reality. Sometimes it is how I find out I was wrong.</p>
  <p class="hero-actions"><a class="btn" href="speaking.html#inquiry">Book Bill to speak</a><a class="btn ghost-btn" href="${D.LINKEDIN}">LinkedIn</a></p>
</section>`,
});

// Links that leave the site open in a new tab (Bill, 11/15).
const newTab = (html) => html.replace(/<a ((?:(?!target=)[^>])*?)href="(https?:\/\/(?!(?:www\.)?thebillryan\.com)[^"]+)"/g, '<a $1href="$2" target="_blank" rel="noopener"');
for (const p of pages) writeFileSync(`${OUT}/${p.file}`, newTab(page(p)));
cpSync("assets", OUT, { recursive: true });
console.log(`Built ${pages.length} pages into ${OUT}/`);
