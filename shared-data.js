"use strict";

// shared-data.jsx — Critter Crimes content (real abilities + food/resource icons)

var NAV_LINKS = [{
  label: 'Critter Crimes',
  href: '#',
  active: true
}, {
  label: 'Home',
  href: '#'
}, {
  label: 'Fame & Fortune',
  href: '#'
}, {
  label: 'Leaflets & Legends',
  href: '#'
}, {
  label: 'About',
  href: '#'
}, {
  label: 'Services',
  href: '#'
}];
var PITCH = "Cute critters hit hard times. In this asymmetric board game for 2\u20135 players, you'll grow your criminal critter syndicate and vie for control of 1930s Central Park \u2014 New York City's up-and-coming 6th Burrow. Collect food dice, pull off daring crimes, stash your loot, and play dirty for powerful bonuses. But don't get too greedy. Your rivals might plant dirt on you\u2026 or sic the Bark Ranger on your tail.";

// Food + resource icons (food = dice, resources = burrow-building)
var FOODS = [{
  id: 'acorn',
  name: 'Acorns',
  icon: 'assets/icon-acorn.png'
}, {
  id: 'blueberry',
  name: 'Blueberries',
  icon: 'assets/icon-blueberry.png'
}, {
  id: 'cricket',
  name: 'Crickets',
  icon: 'assets/icon-beetle.png'
}, {
  id: 'dandelion',
  name: 'Dandelions',
  icon: 'assets/icon-dandelion.png'
}, {
  id: 'egg',
  name: 'Eggs',
  icon: 'assets/icon-eggs.png'
}];
var RESOURCES = [{
  id: 'bark',
  name: 'Bark',
  icon: 'assets/icon-bark.png'
}, {
  id: 'grass',
  name: 'Grass',
  icon: 'assets/icon-grass.png'
}, {
  id: 'leaf',
  name: 'Leaves',
  icon: 'assets/icon-leaf.png'
}, {
  id: 'mud',
  name: 'Mud',
  icon: 'assets/icon-mud.png'
}, {
  id: 'twig',
  name: 'Twigs',
  icon: 'assets/icon-twigs.png'
}];
var FOOD_BY_ID = Object.fromEntries(FOODS.map(function (f) {
  return [f.id, f];
}));
var RES_BY_ID = Object.fromEntries(RESOURCES.map(function (r) {
  return [r.id, r];
}));
var ICON_DAY = 'assets/icon-day.png';
var ICON_NIGHT = 'assets/icon-night.png';

// The four crime types — bottlecaps represent action chips in-game
var ACTIONS = [{
  id: 'explore',
  name: 'Explore',
  phase: 'day',
  tagline: 'casé the joint.',
  desc: 'Explore a beautifully renovated 1930s Central Park for resources.',
  cap: 'assets/cap-turtle.png',
  accent: '#4a5230',
  card: 'assets/card-wild-goose-chase.png',
  cardName: 'Wild Goose Chase'
}, {
  id: 'harvest',
  name: 'Harvest',
  phase: 'day',
  tagline: 'a good day to gather.',
  desc: 'Gather as many food dice as you can get your grubby paws on.',
  cap: 'assets/cap-owl.png',
  accent: '#3a4a6c',
  card: 'assets/card-beelte-mezcal.png',
  cardName: 'Beelte Mezcal'
}, {
  id: 'launder',
  name: 'Launder',
  phase: 'night',
  tagline: 'clean money. dirty paws.',
  desc: 'Launder your stored food dice for victory points.',
  cap: 'assets/cap-fox.png',
  accent: '#5a3a6c',
  card: 'assets/card-catastrophe.png',
  cardName: 'Catastrophe'
}, {
  id: 'recruit',
  name: 'Recruit',
  phase: 'night',
  tagline: 'every gang needs muscle.',
  desc: 'Scout out more potential crimes for your syndicate to commit.',
  cap: 'assets/cap-feather.png',
  accent: '#a8551c',
  card: 'assets/card-sal-maranzano.png',
  cardName: 'Sal Maranzano'
}];
var ACTIONS_BY_PHASE = {
  day: ACTIONS.filter(function (a) {
    return a.phase === 'day';
  }),
  night: ACTIONS.filter(function (a) {
    return a.phase === 'night';
  })
};
var PHASES = [{
  id: 'day',
  name: 'Day',
  icon: ICON_DAY,
  intro: 'By day, the Park is wide awake. Scout the grounds, harvest food dice, and case your next job.',
  pun: 'rise & swindle.'
}, {
  id: 'night',
  name: 'Night',
  icon: ICON_NIGHT,
  intro: 'By night, the gloves come off. Commit crimes from your hand, wash your food, and pray the Ranger’s on his break.',
  pun: 'crime sleeps late.'
}];
var CRITTERS = [{
  "case": 'CASE №01',
  name: 'Owl Capone',
  species: 'Great Horned Owl · The Don',
  ability: 'Eyes Everywhere',
  abilityText: 'At the start of your Day phase, you may gain 1 resource from the Conservatory Garden.',
  food: 'acorn',
  resource: 'bark',
  rap: 'Tax evasion. Smuggling pellets. Allegedly runs everything.',
  img: 'assets/Owl_Capone_crop.jpg',
  accent: '#3a4a6c'
}, {
  "case": 'CASE №02',
  name: 'Tommy Lucheese',
  species: 'Pack Rat · The Squealer',
  ability: 'Trash Cache',
  abilityText: 'At the start of your Day phase, you may take 1 random die from the trash.',
  food: 'blueberry',
  resource: 'twig',
  rap: 'Cheese theft × 47. Squealing. Excessive whiskering.',
  img: 'assets/Tommy_Lucheese_Crop.jpg',
  accent: '#2c3f5a'
}, {
  "case": 'CASE №03',
  name: 'Tony Shellprano',
  species: 'Snapping Turtle · Mob Muscle',
  ability: 'Shell Game',
  abilityText: 'At the start of your Day phase, you may swap any die or resource you control with another that shares its type.',
  food: 'cricket',
  resource: 'mud',
  rap: 'Extortion. Shell-game fraud. Loitering on lily pads.',
  img: 'assets/Tony_Shellprano_Crop.jpg',
  accent: '#4a5230'
}, {
  "case": 'CASE №04',
  name: 'Vixcent Mangano',
  species: 'Red Fox · Fox and the Pound',
  ability: 'Fox and the Pound',
  abilityText: 'At the start of your Day phase, you may charge any die by 3.',
  food: 'egg',
  resource: 'grass',
  rap: 'Art theft. Identity theft. Theft theft.',
  img: 'assets/Vixcent_Mangano_Crop.jpg',
  accent: '#8c3a1f'
}, {
  "case": 'CASE №05',
  name: 'Lucy Goosiano',
  species: 'Flapper Goose · Lady Luck',
  ability: 'Distracting Honk',
  abilityText: 'At the start of your Day phase, you may draw a card.',
  food: null,
  resource: null,
  rap: 'Honking with intent. Loan-feathering. Allegedly armed.',
  img: 'assets/Lucy_Goosiano_Crop.jpg',
  accent: '#a87420'
}];
var BARK_RANGER = {
  name: 'Bark Ranger',
  title: 'Central Park Precinct, K-9 Division',
  blurb: "He is always out on patrol. Get caught with dirty paws and sacrifice a crime card — plus one shred of dignity. Some say he's incorruptible, others say he has a price.",
  img: 'assets/Bark_Ranger_Crop.jpg'
};
var HOW_TO_PLAY = [{
  step: '01',
  title: 'Explore',
  pun: 'It\'s a small heist after all.',
  body: 'Each Day, roll your food dice. Forage Central Park — scrounge resources, fortify your burrow, and case the joint for tomorrow\'s job.',
  icon: ICON_DAY,
  iconLabel: 'DAY'
}, {
  step: '02',
  title: 'Pull the Job',
  pun: 'Crime pays. In acorns.',
  body: 'Spend food dice to commit crimes — heist art from the Met, run a bottlecap racket, or plant dirt on a rival. Each crime has a minor and a major effect.',
  icon: ICON_DAY,
  iconLabel: 'DAY'
}, {
  step: '03',
  title: 'Stash or Splash',
  pun: 'Don\'t get caught with your paws full.',
  body: 'Tuck food in your burrow to trigger major effects… or flash it around. But mind the Bark Ranger — he patrols every Night phase, sniffing for crumbs.',
  icon: ICON_NIGHT,
  iconLabel: 'NIGHT'
}];
var BOX_CONTENTS = [{
  qty: '1',
  item: 'Central Park game board',
  tag: 'oversized'
}, {
  qty: '5',
  item: 'Asymmetric Critter player boards',
  tag: 'dual-layer'
}, {
  qty: '5',
  item: 'Player Reference Cards',
  tag: ''
}, {
  qty: '30',
  item: 'Food dice',
  tag: 'five varieties'
}, {
  qty: '60',
  item: 'Crime Cards (Minor & Major effects)',
  tag: 'linen finish'
}, {
  qty: '70',
  item: 'Cardboard tokens — Resources and Capos',
  tag: ''
}, {
  qty: '1',
  item: 'Bark Ranger Meeple',
  tag: 'meeple'
}, {
  qty: '1',
  item: 'Rulebook + Crime Sheet reference',
  tag: '24pp'
}];
var STATS = [{
  value: '2–5',
  label: 'Players'
}, {
  value: '60–90',
  label: 'Minutes'
}, {
  value: '13+',
  label: 'Ages'
}, {
  value: 'Medium',
  label: 'Weight'
}];
var stripeBg = function stripeBg(c1, c2) {
  var angle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 45;
  return "repeating-linear-gradient(".concat(angle, "deg, ").concat(c1, " 0 14px, ").concat(c2, " 14px 28px)");
};
Object.assign(window, {
  NAV_LINKS: NAV_LINKS,
  PITCH: PITCH,
  CRITTERS: CRITTERS,
  BARK_RANGER: BARK_RANGER,
  HOW_TO_PLAY: HOW_TO_PLAY,
  BOX_CONTENTS: BOX_CONTENTS,
  STATS: STATS,
  FOODS: FOODS,
  RESOURCES: RESOURCES,
  FOOD_BY_ID: FOOD_BY_ID,
  RES_BY_ID: RES_BY_ID,
  ICON_DAY: ICON_DAY,
  ICON_NIGHT: ICON_NIGHT,
  ACTIONS: ACTIONS,
  ACTIONS_BY_PHASE: ACTIONS_BY_PHASE,
  PHASES: PHASES,
  stripeBg: stripeBg
});

// ===== Resource lookup (used by the standalone bundle build) =====
// If window.__resources is populated by the bundler, swap every 'assets/...'
// path on these objects to its inlined blob URL. No-op for the regular build.
(function rewriteAssetsFromBundler() {
  if (typeof window === 'undefined' || !window.__resources) return;
  var r = window.__resources;
  var fix = function fix(p) {
    if (typeof p !== 'string') return p;
    var key = p.replace(/^assets\//, '');
    return r[key] || p;
  };
  FOODS.forEach(function (f) {
    f.icon = fix(f.icon);
  });
  RESOURCES.forEach(function (o) {
    o.icon = fix(o.icon);
  });
  ACTIONS.forEach(function (a) {
    a.cap = fix(a.cap);
  });
  CRITTERS.forEach(function (c) {
    c.img = fix(c.img);
  });
  BARK_RANGER.img = fix(BARK_RANGER.img);
  PHASES.forEach(function (p) {
    p.icon = fix(p.icon);
  });
})();