// Content for thebillryan.com. Lens lines are the live lens pages' own descriptions (checked 11/14).
// Edit here, then run `node build.mjs`.
// Sources: About page rebuild draft (7/20), the catalog of record (7/27),
// The Writing House Chronicle and Podium snapshots (11/14), and
// "The Quiet Suit: Book Page and Club Questions" (11/14).

export const SUBSTACK = "https://thebillryan.substack.com";
export const LINKEDIN = "https://www.linkedin.com/in/thebillryan/";
const amazon = (asin) => `https://www.amazon.com/dp/${asin}/`;

export const lenses = [
  {
    name: "The Interior",
    scale: "The person",
    url: `${SUBSTACK}/p/lens-the-interior`,
    text: "The only altitude where the one who decides and the one who lives with it are the same.",
  },
  {
    name: "The Room",
    scale: "The dwelling",
    url: `${SUBSTACK}/p/lens-the-room`,
    text: "Where someone draws a life and someone else has to live in it.",
  },
  {
    name: "The Street",
    scale: "The shared",
    url: `${SUBSTACK}/p/lens-the-street`,
    text: "Where private decisions become public consequences.",
  },
  {
    name: "The Republic",
    scale: "The rules",
    url: `${SUBSTACK}/p/lens-the-republic`,
    text: "Where the thing that shapes your life was built by people you will never meet.",
  },
];

// Newest first. From the Chronicle; Digests are listed on the Letter page.
export const pieces = [
  { date: "2026-11-24", title: "A Home for the Work", dek: "thebillryan.com is rebuilt. Here is what you will find there.", lens: "", url: `${SUBSTACK}/p/a-home-for-the-work` },
  { date: "2026-11-20", title: "When No One Is Around", dek: "The hardest audience for grace is the one no one else hears.", lens: "The Interior", url: `${SUBSTACK}/p/when-no-one-is-around` },
  { date: "2026-11-18", title: "The Strength to Extend Grace", dek: "Grace is not the soft response. It is the one that asks the most of us.", lens: "The Interior", url: `${SUBSTACK}/p/the-strength-to-extend-grace` },
  { date: "2026-11-12", title: "Bitchin' & Moanin'", dek: "A wave is a verdict, not a vision.", lens: "The Republic", url: `${SUBSTACK}/p/bitchin-and-moanin` },
  { date: "2026-11-11", title: "The Eleventh Hour", dek: "What Veterans Day was for, and what it asks of those of us who never served.", lens: "The Republic", url: `${SUBSTACK}/p/the-eleventh-hour` },
  { date: "2026-11-10", title: "The Quiet Suit: A Christmas Story", dek: "A new Christmas novel, released on Stacy's birthday.", lens: "The Interior", url: `${SUBSTACK}/p/the-quiet-suit-a-christmas-story` },
  { date: "2026-11-05", title: "One Small, Brave Thing", dek: "Nothing worth building stands on fiction.", lens: "The Interior", url: `${SUBSTACK}/p/one-small-brave-thing` },
  { date: "2026-11-02", title: "Reverence Is Mindfulness", dek: "The ordinary does not need to become extraordinary.", lens: "The Interior", url: `${SUBSTACK}/p/reverence-is-mindfulness` },
  { date: "2026-10-30", title: "Too Much Courage", dek: "We celebrate courage. Most of it was spent where something should have been built.", lens: "The Interior", url: `${SUBSTACK}/p/too-much-courage` },
  { date: "2026-10-29", title: "Spin Dumpster", dek: "", lens: "The Republic", url: `${SUBSTACK}/p/spin-dumpster` },
];

export const digests = [
  { date: "2026-11-22", title: "The Bill Ryan Digest (11-22-2026)", dek: "The Strength to Extend Grace and When No One Is Around: grace given to others, and grace given to ourselves, with both meanings of the word at the Thanksgiving table.", url: `${SUBSTACK}/p/the-bill-ryan-digest-11-22-2026` },
  { date: "2026-11-15", title: "The Bill Ryan Digest (11-15-2026)", dek: "The Quiet Suit, The Eleventh Hour and Bitchin' & Moanin', with Quiet Power and the new site. Make one small change before next Sunday.", url: `${SUBSTACK}/p/the-bill-ryan-digest-11-15-2026` },
  { date: "2026-11-08", title: "The Bill Ryan Digest (11-08-2026)", dek: "Reverence Is Mindfulness and One Small, Brave Thing. Most of what we get wrong, we get wrong by not looking twice.", url: `${SUBSTACK}/p/the-bill-ryan-digest-11-08-2026` },
  { date: "2026-11-01", title: "The Bill Ryan Digest (11-01-2026)", dek: "Spin Dumpster and Too Much Courage. What we do not build, someone ends up carrying.", url: `${SUBSTACK}/p/the-bill-ryan-digest-11-01-2026` },
];

// Groups and one-liners from the About rebuild draft; links per the 7/27 paperback rule.
export const bookGroups = [
  {
    name: "Fiction",
    books: [
      { slug: "the-quiet-suit", cover: "covers/the-quiet-suit.jpg", title: "The Quiet Suit", sub: "A Santa Story", year: 2026, color: "#7E1F2B", line: "A widower finds an old Santa suit in a thrift store and quietly changes how a town cares for its own.", url: amazon("B0HQFKVR3Z"), page: "the-quiet-suit.html", isNew: true },
      { cover: "covers/quiet-power.jpg", title: "Quiet Power", sub: "A novel", year: 2026, color: "#1F232D", line: "A candidate who refuses to perform certainty.", url: amazon("B0H7YTZV3H"), page: "book-club.html#quiet-power" },
      { cover: "covers/joeys-angel.jpg", title: "Joey's Angel", sub: "A novel", year: 2026, color: "#8A5A6B", line: "A novel about legacy, fatherhood, and the quiet forces that shape a life.", url: amazon("B0GKXJSFK7"), page: "book-club.html#joeys-angel" },
    ],
  },
  {
    name: "Purpose and the interior life",
    books: [
      { title: "The Architecture of Why", sub: "Forthcoming", year: null, color: null, line: "The third book of the Why trilogy: protecting your why with architecture.", forthcoming: true },
      { cover: "covers/the-fulfillment-curve.jpg", title: "The Fulfillment Curve", sub: "Reclaiming Peace in a World That Wants More", year: 2025, color: "#2C5D59", line: "Moving past achievement into alignment.", url: amazon("B0GJ5932C5") },
      { cover: "covers/building-the-rich-life.jpg", title: "Building the Rich Life", sub: "Daily Meditations for a Year of Meaning", year: 2025, color: "#787A42", line: "365 daily meditations on stillness, discernment, and intentional choice.", url: amazon("B0G4QLVD9X") },
      { cover: "covers/fix-your-why.jpg", title: "Fix Your Why", sub: "Creating Worthy Goals to Align Your Purpose", year: 2023, color: "#D1531F", line: "The first one. A systems approach to purpose, discipline, and aligned execution.", url: amazon("1961074079") },
    ],
  },
  {
    name: "The built world",
    books: [
      { cover: "covers/seeking-monopoly.jpg", title: "Seeking Monopoly", sub: "How Greed Is Hijacking the American Dream", year: 2026, color: "#6B2A2A", line: "How unchecked consolidation outran its guardrails, and what rebuilding them would take.", url: amazon("B0GSVQTW89") },
      { cover: "covers/housing-affordability-crisis.jpg", title: "The Housing Affordability Crisis in America", sub: "From Crisis to Opportunity: Rethinking Housing for a Thriving Society (Second Edition)", year: 2026, color: "#2D4556", line: "A civic and economic account of the breakdown, and the structural path out.", url: amazon("B0GKXXKQ79") },
      { cover: "covers/when-price-outgrows-product.jpg", title: "When Price Outgrows Product", sub: "A Treatise on Housing Alignment in the Post-Affordability Era", year: 2025, color: "#A8742E", line: "How housing markets drift from product reality, and what correction actually requires.", url: amazon("B0GQLRFQ1R") },
      { cover: "covers/a-treatise-on-modern-architecture.jpg", title: "A Treatise on Modern Architecture", sub: "Ten essays", year: 2025, color: "#30353A", line: "Ten essays from ancient Egypt to the Bauhaus to Palm Beach County production housing, ending at the High-Performance Home.", url: `${SUBSTACK}/p/a-treatise-on-modern-architecture-b7e`, linkLabel: "Read on Substack" },
    ],
  },
];

export const clubOrder = [
  { title: "The Quiet Suit", status: "Questions ready", page: "book-club.html#the-quiet-suit" },
  { title: "Joey's Angel", status: "Questions ready", page: "book-club.html#joeys-angel" },
  { title: "Quiet Power", status: "Questions ready", page: "book-club.html#quiet-power" },
  { title: "The Fulfillment Curve", status: "Coming" },
  { title: "Fix Your Why", status: "Coming" },
  { title: "Building the Rich Life", status: "A year-long club, one theme a month" },
];

export const tqsQuestions = [
  ["The empty chair.", "The book opens at a graveside, six months before the story begins, and his wife appears only a few times after that: her photograph, a memory of her smile. How does her absence shape what he does with the suit? Would he have bought it if she were alive?"],
  ["Quiet is not rest.", "He expected retirement to feel like rest, and finds a quiet that “asked nothing, but offered nothing in return.” Later he wonders whether his famous composure was ever stillness at all, or “something adjacent to it.” What is the difference the book is drawing?"],
  ["The bell.", "In Chapter 5 he walks into a donation shop with nothing to give, and the bell rings louder than he expects. The woman tells him, “You came in. That’s something.” Why does the book begin his change with a moment in which he gives nothing?"],
  ["The rules.", "No one writes them down, but they arrive one by one: no speaking, no explaining, no defending, no credit, no performance. Which would be hardest for you to keep? Why does the book insist that credit changes a gesture?"],
  ["The reasonable people.", "In “Reasonable Objections,” the concerned neighbors are not villains, and he agrees with much of what they say. He tells them the discomfort is that “no one’s in charge of it.” Were they wrong to worry? Whose side were you on?"],
  ["“Are you really Santa?”", "He answers, “I don’t know,” and it is the girl, not the man, who explains why he must not answer. Why does the book give her the wisdom? What does she understand about belief that the adults in the plaza do not?"],
  ["The quiet suit.", "In Chapter 23 we learn what the title means: not the red suit, but “the weight of being needed.” Did that surprise you? Why might stepping away be the most generous thing he does?"],
  ["The man across the street.", "The last chapter is told by someone we have barely met: a man who once stood across the street, holding a bag he could not bring himself to leave. Why end the book with him and not with the man in the suit?"],
  ["Your bench.", "In Chapter 3 he chooses the bench at the edge of the playground, close enough to see and far enough to stay out of it. Where in your life do you watch from a safe distance? What would it take to step in?"],
  ["Who showed you?", "The book ends by saying kindness moves “through one person watching another choose to pay attention.” Who did that for you? And who might be watching you now?"],
];

// From the Podium (11/12). Bill picks the signature three (BC-0367).
export const signatureTalk = {
  title: "Why Your Why Isn't Working, and What to Build Instead",
  formats: "Keynote, workshop, or retreat cohort",
  audience: "Company and executive retreats",
  line: "Purpose fails without architecture to protect it. The room leaves with the four walls to build around its own.",
};
export const talks = [
  { title: "Too Much Courage", formats: "Keynote, workshop, retreat cohort", audience: "Leadership teams and founders", line: "Most courage is spent where something should have been built. Find where your team is spending it." },
  { title: "Incentives Are the Real Values", formats: "Keynote, workshop, retreat cohort", audience: "Executive teams, culture and HR leaders", line: "What you reward is what you believe, whatever the wall says." },
  { title: "The Half-Second", formats: "Keynote, workshop, retreat cohort", audience: "Teams under pressure, sales and service", line: "The gap between what happens and what you do next is where leadership lives." },
  { title: "Quiet Power: Leading Without Performing Certainty", formats: "Keynote", audience: "Leadership programs and civic groups", line: "You do not have to fake certainty to lead. You have to stay recognizable." },
  { title: "The Fulfillment Curve", formats: "Keynote, workshop", audience: "Entrepreneurs (YPO, EO, Vistage)", line: "Achievement and fulfillment run on different curves. Build for the second." },
  { title: "When Price Outgrows Product", formats: "Keynote", audience: "Business owners, real estate and sales", line: "When price climbs faster than what the buyer gets, the market turns. Know the signs." },
  { title: "America Built Its Housing Crisis, and Can Build Its Way Out", formats: "Keynote", audience: "The housing industry, builders and civic leaders", line: "The crisis was built one reasonable choice at a time. Here is an instrument that starts with the ground." },
  { title: "Reading a City", formats: "Keynote, workshop", audience: "Planners, city managers, CNU", line: "How to see what a place is actually doing, and what it could become." },
  { title: "What Are We Building, and What Is It Doing to Us?", formats: "Keynote", audience: "Builders, design and development", line: "The principles that build a better home build a better life, and a better town." },
];

export const pamphlets = [
  { no: "01", title: "Stillness & Strength", sub: "Building a Life That Holds Under Pressure", status: "Printing now", color: "#4A5A3A" },
  { no: "02", title: "The Program", sub: "From the Republic series", status: "In preparation", color: "#2D4556" },
];

// Joey's Angel: Book Club Discussion Guide (Bill Ryan, 2026; cleaned 6/25/2026). Used at two club visits.
export const jaGuide = {
  intro: "These questions are designed to build, from accessible entry points to deeper territory. You don't need to cover all of them. Follow the room. The best conversations often begin with a simple question and go somewhere no one planned.",
  parts: [
    { title: "Part One: First Impressions", lede: "Use these questions to open the room and get everyone talking. No wrong answers here.", qs: [
      ["The book opens with Logan and Joey on a basketball court. What did that scene establish for you about who these two people were to each other?"],
      ["The chapter called \u2018How Logan Loved\u2019 describes a father's quiet, non-performative love. Did you recognize anyone in that portrait, someone who loved you that way, or someone you have loved that way?"],
      ["The Last Normal Morning is one of the most carefully constructed chapters in the book. What details stuck with you? What did you notice on re-reading that you didn't notice the first time?"],
      ["When you first crossed into Logan's realm after his death, what was your response to the premise? Did the supernatural framework draw you in or hold you at a distance?"],
    ]},
    { title: "Part Two: The Characters", lede: "These questions focus on who the characters are and what they carry.", qs: [
      ["Logan's arc in the unseen realm is not about Joey; it's about Logan learning something. What does he have to learn? And why is it so hard for him?"],
      ["Lena arrives without being asked, carrying food and company. She doesn't try to fix anything. She simply stays. What did her presence mean to Joey, and what did it mean to you as a reader?"],
      ["Coach Ramirez tells Joey: \u2018You don't earn adulthood by doing it alone. You step into it by admitting when you can't.\u2019 How does his own loss, his father's death, make him credible in that moment?"],
      ["The Presence in Logan's realm responds to his grief with truth rather than comfort. It doesn't tell Logan what he wants to hear. What do you make of that choice? Would comfort have served Logan better?", "These are not lessons Logan learns so he can do better next time; there is no next time. The Presence is trying to help him see. Pain has no place in Logan's existence; only growth serves."],
      ["Joey's mother is largely seen through Joey's eyes, as someone who \u2018held it together\u2019 after Logan's death. When she becomes the one who needs care, how does that shift the story's weight?"],
    ]},
    { title: "Part Three: The Big Ideas", lede: "These questions go deeper into theme. Use them when the room is ready.", qs: [
      ["The book argues that \u2018influence travels forward,\u2019 that the people who shaped us continue shaping the world through us. Do you believe that? And what does it ask of us, if true?"],
      ["Logan spends most of the novel believing love is measured by how much you can carry for someone. The Presence calls this an illusion. What is the alternative the book offers, and is it convincing?"],
      ["The breath count appears at key moments throughout the novel, first as something Logan teaches, then as something Joey reaches for alone in a hospital hallway, without thinking. What does that moment mean?"],
      ["The book says that a childhood ends \u2018when a person chooses to stay in the room of someone else's suffering without needing to be told.\u2019 Does that resonate with your own experience of becoming an adult?", "The meaning of adulthood is different for each of us; some are forced to grow up sooner than they are ready."],
      ["By the end, Logan is no longer watching Joey; he is \u2018within what Joey has become.\u2019 What does the book mean by that? Is that a satisfying ending for Logan's arc, or does something in you resist it?"],
    ]},
    { title: "Part Four: The Personal Territory", lede: "These questions invite the room toward its own stories. Use them when the conversation wants to go somewhere real.", qs: [
      ["Is there someone in your life, living or gone, whose influence you can still feel? What did they leave behind that you carry?"],
      ["Logan had to learn that love is not control, not rescue; it is participation. Is there a relationship in your life where you have had to learn the same thing?"],
      ["The Note to Parents at the end of the book says: \u2018Perfection does not exist. Presence and intention are the memories that stick on our children.\u2019 What do you hope your own presence and intention have left behind?"],
    ]},
    { title: "Closing Question", lede: "One question to end every conversation with.", qs: [
      ["The book ends with the line: \u2018And nothing that mattered was ever lost.\u2019 Do you believe that? And what would it mean for your own life if it were true?"],
    ]},
  ],
  authorNote: ["This story began thirty years ago and waited patiently while I caught up to it.", "Thank you for spending time with Joey and Logan.", "I hope it gave you something to sit with."],
};

// Quiet Power: ten questions, built 11/15/2026 from the published text (Atticus, Quiet Power v 7.1). Quotes checked against it.
export const qpQuestions = [
  ["The line they would quote.", "The book opens near its end: David at a podium he will not touch, telling the press, \u201cI won\u2019t perform certainty for you.\u201d The narrator warns that this is the line they will quote later, \u201cstripped of context.\u201d Why begin with a sentence the world is about to misuse? What did it mean to you by the last chapter?"],
  ["You stayed on pitch.", "After the school recital his mother claps twice and says, \u201cYou stayed on pitch. That matters.\u201d David goes to his room wondering whether he did enough to \u201cdeserve neutrality.\u201d How much of the candidate is already in that boy? Is his restraint his strength, his wound, or both?"],
  ["Two lines in the notebook.", "At nineteen he writes, \u201cIf I don\u2019t hold it together, do I disappear?\u201d Years later, the night he decides to run, he writes, \u201cI am not choosing power. I am choosing to stand where my silence can no longer be mistaken.\u201d What changed between those two sentences?"],
  ["Delay some of your truths.", "Julian Sinclair\u2019s offer is gentle: \u201cYou won\u2019t have to do anything dishonest. You\u2019ll just have to delay some of your truths.\u201d Is delay a kind of dishonesty? Julian believes he was trying to protect David. Do you believe him?"],
  ["Westward Street.", "David is not scheduled to speak at the forum. He goes because Marlene asks, and tells her, \u201cIt\u2019s going to get loud. Ugly is a choice.\u201d Clara, watching from the wall, writes three words: \u201cNot running. Dangerous.\u201d Why does the story turn in a community hall instead of on a stage? And why dangerous?"],
  ["What Clara writes down.", "Alone in her hotel room, Clara fears \u201cnot that he would bend, but that he would harden,\u201d and ends her entry, \u201cThe system is not his mother.\u201d What does she see in David that he cannot see in himself? Is she right?"],
  ["Langston or nothing.", "A sign reading LANGSTON OR NOTHING bothers David more than Julian\u2019s realism ever had. Adoration, he decides, is \u201cprojection,\u201d \u201ca form of blindness with warmth,\u201d and he writes, \u201cIf they elevate me beyond proportion, I must lower myself deliberately.\u201d Why is being worshipped more dangerous to him than being attacked?"],
  ["I can\u2019t promise that.", "In a high school gym, Kevin the plumber asks what promise David can make that life will get better. David answers, \u201cI can\u2019t promise that,\u201d and Kevin replies, \u201cThat\u2019s about what I figured.\u201d Why does the room applaud? Would you vote for a candidate who said it? Julian\u2019s verdict on election night: \u201cIt appears they wanted the harder kind.\u201d"],
  ["What do citizens owe the future?", "Watching the campaign from her kitchen in Dayton, Ms. Kline changes Wednesday\u2019s lesson to one question: \u201cWhat do citizens owe the future?\u201d On election day a man in line says he votes \u201cbecause it\u2019s still ours.\u201d How would you answer her question for yourself?"],
  ["Your ceiling.", "All his life David is praised as mature and careful, until one night the word careful \u201cfelt like a ceiling.\u201d Has a compliment ever become a ceiling for you? What would it take to step past it?"],
];
