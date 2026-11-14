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
  { date: "2026-11-12", title: "Bitchin' & Moanin'", dek: "A wave is a verdict, not a vision.", lens: "The Republic", url: `${SUBSTACK}/p/bitchin-and-moanin` },
  { date: "2026-11-11", title: "The Eleventh Hour", dek: "What Veterans Day was for, and what it asks of those of us who never served.", lens: "The Republic", url: `${SUBSTACK}/p/the-eleventh-hour` },
  { date: "2026-11-10", title: "The Quiet Suit: A Christmas Story", dek: "A new Christmas novel, released on Stacy's birthday.", lens: "The Interior", url: `${SUBSTACK}/p/the-quiet-suit-a-christmas-story` },
  { date: "2026-11-05", title: "One Small, Brave Thing", dek: "Nothing worth building stands on fiction.", lens: "The Interior", url: `${SUBSTACK}/p/one-small-brave-thing` },
  { date: "2026-11-02", title: "Reverence Is Mindfulness", dek: "The ordinary does not need to become extraordinary.", lens: "The Interior", url: `${SUBSTACK}/p/reverence-is-mindfulness` },
  { date: "2026-10-30", title: "Too Much Courage", dek: "We celebrate courage. Most of it was spent where something should have been built.", lens: "The Interior", url: `${SUBSTACK}/p/too-much-courage` },
  { date: "2026-10-29", title: "Spin Dumpster", dek: "", lens: "The Republic", url: `${SUBSTACK}/p/spin-dumpster` },
];

export const digests = [
  { date: "2026-11-08", title: "The Bill Ryan Digest (11-08-2026)", dek: "Reverence Is Mindfulness and One Small, Brave Thing. Most of what we get wrong, we get wrong by not looking twice.", url: `${SUBSTACK}/p/the-bill-ryan-digest-11-08-2026` },
  { date: "2026-11-01", title: "The Bill Ryan Digest (11-01-2026)", dek: "Spin Dumpster and Too Much Courage. What we do not build, someone ends up carrying.", url: `${SUBSTACK}/p/the-bill-ryan-digest-11-01-2026` },
];

// Groups and one-liners from the About rebuild draft; links per the 7/27 paperback rule.
export const bookGroups = [
  {
    name: "Fiction",
    books: [
      { slug: "the-quiet-suit", title: "The Quiet Suit", sub: "A Christmas Story", year: 2026, color: "#7E1F2B", line: "A widower finds an old Santa suit in a thrift store and quietly changes how a town cares for its own.", url: amazon("B0HQFKVR3Z"), page: "the-quiet-suit.html", isNew: true },
      { title: "Quiet Power", sub: "A novel", year: 2026, color: "#1F232D", line: "A candidate who refuses to perform certainty.", url: amazon("B0H7YTZV3H") },
      { title: "Joey's Angel", sub: "A novel", year: 2026, color: "#8A5A6B", line: "A novel about legacy, fatherhood, and the quiet forces that shape a life.", url: amazon("B0GKXJSFK7") },
    ],
  },
  {
    name: "Purpose and the interior life",
    books: [
      { title: "The Architecture of Why", sub: "Forthcoming", year: null, color: null, line: "The third book of the Why trilogy: protecting your why with architecture.", forthcoming: true },
      { title: "The Fulfillment Curve", sub: "Reclaiming Peace in a World That Wants More", year: 2025, color: "#2C5D59", line: "Moving past achievement into alignment.", url: amazon("B0GJ5932C5") },
      { title: "Building the Rich Life", sub: "Daily Meditations for a Year of Meaning", year: 2025, color: "#787A42", line: "365 daily meditations on stillness, discernment, and intentional choice.", url: amazon("B0G4QLVD9X") },
      { title: "Fix Your Why", sub: "Creating Worthy Goals to Align Your Purpose", year: 2023, color: "#D1531F", line: "The first one. A systems approach to purpose, discipline, and aligned execution.", url: amazon("1961074079") },
    ],
  },
  {
    name: "The built world",
    books: [
      { title: "Seeking Monopoly", sub: "How Greed Is Hijacking the American Dream", year: 2026, color: "#6B2A2A", line: "How unchecked consolidation outran its guardrails, and what rebuilding them would take.", url: amazon("B0GSVQTW89") },
      { title: "The Housing Affordability Crisis in America", sub: "Second Edition", year: 2026, color: "#2D4556", line: "A civic and economic account of the breakdown, and the structural path out.", url: amazon("B0GKXXKQ79") },
      { title: "When Price Outgrows Product", sub: "A Treatise on Housing Alignment in the Post-Affordability Era", year: 2025, color: "#A8742E", line: "How housing markets drift from product reality, and what correction actually requires.", url: amazon("B0GQLRFQ1R") },
      { title: "A Treatise on Modern Architecture", sub: "Ten essays", year: 2025, color: "#30353A", line: "Ten essays from ancient Egypt to the Bauhaus to Palm Beach County production housing, ending at the High-Performance Home.", url: `${SUBSTACK}/p/a-treatise-on-modern-architecture-b7e`, linkLabel: "Read on Substack" },
    ],
  },
];

export const clubOrder = [
  { title: "The Quiet Suit", status: "Questions ready", page: "the-quiet-suit.html#club" },
  { title: "Quiet Power", status: "Coming in January" },
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
