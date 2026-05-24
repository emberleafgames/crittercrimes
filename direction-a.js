"use strict";

// direction-a.jsx — "THE RAP SHEET"
// 1930s wanted-poster pulp · kraft paper · ink + evidence red + mustard

var rapStyles = {
  // Palette
  paper: '#e8dcc4',
  paperDark: '#d8c8ac',
  ink: '#1a1612',
  red: '#a52a2a',
  redDark: '#7a1f1f',
  mustard: '#c89020',
  forest: '#2d3b2e',
  rust: '#8c4a2a',
  fontDisplay: '"Alfa Slab One", "Rye", "Playfair Display", Georgia, serif',
  fontType: '"Special Elite", "Courier Prime", "Courier New", monospace',
  fontBody: '"DM Sans", -apple-system, BlinkMacSystemFont, sans-serif'
};

// Subtle paper noise via two layered gradients
var paperBg = "\n  radial-gradient(at 18% 22%, rgba(140,74,42,0.10), transparent 38%),\n  radial-gradient(at 82% 78%, rgba(26,22,18,0.08), transparent 42%),\n  radial-gradient(at 50% 50%, rgba(200,144,32,0.06), transparent 60%),\n  #e8dcc4\n";

// ============================ NAV ============================
function RapNav() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: rapStyles.ink,
      color: rapStyles.paper,
      borderBottom: "3px double ".concat(rapStyles.mustard),
      fontFamily: rapStyles.fontBody,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1140,
      margin: '0 auto',
      padding: '14px 32px',
      display: 'flex',
      alignItems: 'center',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: '50%',
      background: rapStyles.mustard,
      color: rapStyles.ink,
      display: 'grid',
      placeItems: 'center',
      fontFamily: rapStyles.fontDisplay,
      fontSize: 14,
      border: "1.5px solid ".concat(rapStyles.paper)
    }
  }, "EL"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: rapStyles.fontDisplay,
      fontSize: 15,
      letterSpacing: 0.5
    }
  }, "EMBER\xA0LEAF\xA0GAMES"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 22,
      fontSize: 12.5,
      letterSpacing: 1.2,
      textTransform: 'uppercase'
    }
  }, NAV_LINKS.map(function (l) {
    return /*#__PURE__*/React.createElement("a", {
      key: l.label,
      href: l.href,
      style: {
        color: l.active ? rapStyles.mustard : rapStyles.paper,
        textDecoration: 'none',
        borderBottom: l.active ? "2px solid ".concat(rapStyles.mustard) : '2px solid transparent',
        paddingBottom: 2
      }
    }, l.label);
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.5
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.7
    }
  }, "Cart (0)"))));
}

// =========================== HERO ===========================
function RapHero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: paperBg,
      borderBottom: "2px solid ".concat(rapStyles.ink),
      padding: '64px 32px 72px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 28,
      right: 40,
      transform: 'rotate(8deg)',
      border: "3px solid ".concat(rapStyles.red),
      color: rapStyles.red,
      padding: '6px 14px',
      fontFamily: rapStyles.fontDisplay,
      fontSize: 14,
      letterSpacing: 2,
      opacity: 0.85
    }
  }, "CONFIDENTIAL"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 96,
      right: 56,
      transform: 'rotate(-4deg)',
      fontFamily: rapStyles.fontType,
      fontSize: 11,
      color: rapStyles.ink,
      opacity: 0.6
    }
  }, "Filed: 06 / 12 / 1932"), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1140,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-block',
      background: rapStyles.ink,
      color: rapStyles.mustard,
      padding: '6px 12px',
      fontFamily: rapStyles.fontType,
      fontSize: 11,
      letterSpacing: 3,
      marginBottom: 22
    }
  }, "\u2605 \xA0NYPD \u2014 CENTRAL PARK PRECINCT\xA0 \u2605"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: rapStyles.fontType,
      fontSize: 13,
      color: rapStyles.redDark,
      letterSpacing: 4,
      marginBottom: 6
    }
  }, "\u2014 WANTED \u2014"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: rapStyles.fontDisplay,
      fontSize: 96,
      lineHeight: 0.92,
      color: rapStyles.ink,
      margin: '0 0 18px',
      letterSpacing: -1,
      textShadow: "2px 2px 0 ".concat(rapStyles.red, "33")
    }
  }, "CRITTER", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: rapStyles.red
    }
  }, "CRIMES")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: rapStyles.fontType,
      fontSize: 18,
      color: rapStyles.ink,
      lineHeight: 1.4,
      borderTop: "1.5px solid ".concat(rapStyles.ink),
      borderBottom: "1.5px solid ".concat(rapStyles.ink),
      padding: '14px 0',
      marginBottom: 24,
      maxWidth: 480
    }
  }, "A board game of ", /*#__PURE__*/React.createElement("em", null, "cute"), " & ", /*#__PURE__*/React.createElement("em", null, "cunning"), ".", /*#__PURE__*/React.createElement("br", null), "2\u20135 players. 1930s Central Park. Zero scruples."), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 480
    }
  }, /*#__PURE__*/React.createElement(EmailSignup, {
    source: "critter-crimes-A",
    theme: rapHeroSignupTheme
  }), /*#__PURE__*/React.createElement("a", {
    href: "#how",
    style: {
      display: 'inline-block',
      marginTop: 14,
      fontFamily: rapStyles.fontType,
      fontSize: 13,
      color: rapStyles.ink,
      textDecoration: 'underline',
      textUnderlineOffset: 4,
      opacity: 0.75
    }
  }, "Read the rap sheet \u2193")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      marginTop: 36
    }
  }, STATS.map(function (s) {
    return /*#__PURE__*/React.createElement("div", {
      key: s.label
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: rapStyles.fontDisplay,
        fontSize: 28,
        color: rapStyles.ink
      }
    }, s.value), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: rapStyles.fontType,
        fontSize: 11,
        color: rapStyles.rust,
        letterSpacing: 1.5,
        textTransform: 'uppercase'
      }
    }, s.label));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#e6dcc4',
      border: "3px solid ".concat(rapStyles.ink),
      boxShadow: "12px 12px 0 ".concat(rapStyles.ink, ", 12px 12px 0 4px ").concat(rapStyles.red),
      aspectRatio: '5 / 7',
      position: 'relative',
      overflow: 'hidden',
      transform: 'rotate(-1.2deg)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: CRITTERS[0].img,
    alt: "Owl Capone",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: '50% 35%',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -14,
      left: -14,
      background: rapStyles.mustard,
      color: rapStyles.ink,
      fontFamily: rapStyles.fontDisplay,
      fontSize: 11,
      padding: '6px 10px',
      letterSpacing: 1.5,
      border: "2px solid ".concat(rapStyles.ink),
      transform: 'rotate(-6deg)'
    }
  }, "EXHIBIT A"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 10,
      right: 10,
      background: 'rgba(26,22,18,0.88)',
      color: rapStyles.paper,
      fontFamily: rapStyles.fontType,
      fontSize: 10,
      padding: '4px 10px',
      letterSpacing: 2,
      border: "1px solid ".concat(rapStyles.paper, "66")
    }
  }, "SUBJECT: O. CAPONE \xB7 RUNS THE 6TH BURROW")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -28,
      right: 10,
      fontFamily: rapStyles.fontType,
      fontSize: 11,
      color: rapStyles.ink,
      opacity: 0.6,
      transform: 'rotate(-2deg)'
    }
  }, "// evidence locker \xB7 do not remove"))));
}

// ============================ MAP ============================
function RapMap() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: rapStyles.ink,
      padding: '32px 0 36px',
      borderTop: "4px double ".concat(rapStyles.mustard),
      borderBottom: "4px double ".concat(rapStyles.mustard)
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1140,
      margin: '0 auto',
      padding: '0 32px 22px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: rapStyles.fontType,
      fontSize: 12,
      color: rapStyles.mustard,
      letterSpacing: 4
    }
  }, "// CONFISCATED EVIDENCE"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      borderTop: "1.5px dashed ".concat(rapStyles.mustard, "66")
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: rapStyles.fontType,
      fontSize: 11,
      color: rapStyles.paper,
      opacity: 0.7,
      letterSpacing: 2
    }
  }, "NYPD-K9 \xB7 MAP \u211601")), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: rapStyles.fontDisplay,
      fontSize: 42,
      lineHeight: 1,
      color: rapStyles.paper,
      margin: '8px 0 0',
      letterSpacing: -0.5
    }
  }, "The Park. The Whole Park."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: rapStyles.fontBody,
      fontSize: 15,
      lineHeight: 1.5,
      color: '#d8c8ac',
      margin: '6px 0 0',
      maxWidth: 720
    }
  }, "Every job goes down somewhere on this beauty \u2014 a hand-illustrated 1930s Central Park, end to end.")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/central-park-map.png",
    alt: "Central Park game board \u2014 a hand-illustrated panoramic map of 1930s Central Park, from West Side to East Side",
    style: {
      width: '100%',
      height: 'auto',
      display: 'block'
    }
  })));
}

// =========================== PITCH ===========================
function RapPitch() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: rapStyles.ink,
      color: rapStyles.paper,
      padding: '68px 32px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: stripeBg('rgba(232,220,196,0.03)', 'transparent', 90),
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 980,
      margin: '0 auto',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: rapStyles.fontType,
      fontSize: 12,
      color: rapStyles.mustard,
      letterSpacing: 4,
      marginBottom: 18
    }
  }, "// THE OFFICIAL STATEMENT"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: rapStyles.fontDisplay,
      fontSize: 34,
      lineHeight: 1.25,
      margin: 0,
      textWrap: 'pretty',
      color: rapStyles.paper,
      fontWeight: 400
    }
  }, "The Park is yours. ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: rapStyles.mustard
    }
  }, "Take it.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: rapStyles.fontBody,
      fontSize: 17,
      lineHeight: 1.65,
      marginTop: 22,
      color: '#d8c8ac',
      maxWidth: 760
    }
  }, PITCH), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: rapStyles.fontType,
      fontSize: 13,
      color: rapStyles.mustard,
      marginTop: 18,
      letterSpacing: 1
    }
  }, "Signed, O. Capone \u2014 though he denies everything.")));
}

// ========================= CRITTERS =========================
function MugShot(_ref) {
  var critter = _ref.critter,
    idx = _ref.idx;
  var food = critter.food && FOOD_BY_ID[critter.food];
  var res = critter.resource && RES_BY_ID[critter.resource];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: rapStyles.paper,
      border: "2px solid ".concat(rapStyles.ink),
      boxShadow: "6px 6px 0 ".concat(rapStyles.ink),
      transform: "rotate(".concat(idx % 2 === 0 ? -0.6 : 0.8, "deg)"),
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#e6dcc4',
      aspectRatio: '5 / 7',
      position: 'relative',
      borderBottom: "2px solid ".concat(rapStyles.ink),
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: critter.img,
    alt: critter.name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: '50% 40%',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 10,
      left: 10,
      background: rapStyles.ink,
      color: rapStyles.paper,
      fontFamily: rapStyles.fontType,
      fontSize: 11,
      padding: '5px 10px',
      letterSpacing: 2,
      border: "1px solid ".concat(rapStyles.paper)
    }
  }, critter["case"]), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 10,
      right: 10,
      border: "2px solid ".concat(rapStyles.red),
      color: rapStyles.red,
      fontFamily: rapStyles.fontDisplay,
      fontSize: 11,
      padding: '4px 8px',
      letterSpacing: 2,
      background: 'rgba(232,220,196,0.85)',
      transform: 'rotate(6deg)'
    }
  }, "WANTED")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 20px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: rapStyles.fontBody,
      fontSize: 13,
      color: rapStyles.rust,
      fontStyle: 'italic',
      marginBottom: 14
    }
  }, critter.species), /*#__PURE__*/React.createElement("div", {
    style: {
      background: rapStyles.paperDark,
      border: "1px solid ".concat(rapStyles.ink, "33"),
      padding: '10px 12px',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: rapStyles.fontType,
      fontSize: 10,
      color: rapStyles.ink,
      letterSpacing: 2,
      marginBottom: 2
    }
  }, "M.O. \u2014 ", critter.ability.toUpperCase()), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: rapStyles.fontBody,
      fontSize: 13,
      color: rapStyles.ink,
      lineHeight: 1.5
    }
  }, critter.abilityText)), (food || res) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      padding: '10px 0 12px',
      borderBottom: "1px dashed ".concat(rapStyles.ink, "55"),
      marginBottom: 12
    }
  }, food && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: food.icon,
    alt: food.name,
    style: {
      width: 36,
      height: 36,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: rapStyles.fontType,
      fontSize: 9,
      color: rapStyles.rust,
      letterSpacing: 1.5
    }
  }, "PREFERS"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: rapStyles.fontDisplay,
      fontSize: 13,
      color: rapStyles.ink,
      lineHeight: 1.1
    }
  }, food.name))), res && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: res.icon,
    alt: res.name,
    style: {
      width: 36,
      height: 36,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: rapStyles.fontType,
      fontSize: 9,
      color: rapStyles.rust,
      letterSpacing: 1.5
    }
  }, "BUILDS WITH"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: rapStyles.fontDisplay,
      fontSize: 13,
      color: rapStyles.ink,
      lineHeight: 1.1
    }
  }, res.name)))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: rapStyles.fontType,
      fontSize: 11,
      color: rapStyles.ink,
      opacity: 0.85,
      lineHeight: 1.4
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: rapStyles.redDark
    }
  }, "RAP:"), " ", critter.rap)));
}
function RapCritters() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: paperBg,
      padding: '80px 32px 90px',
      borderBottom: "2px solid ".concat(rapStyles.ink)
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1140,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "// PRECINCT FILES \xB7 MOST WANTED",
    title: "Meet the Suspects.",
    sub: "Five critters. Five rap sheets. One park, and not enough room for all of them."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 28
    }
  }, CRITTERS.slice(0, 3).map(function (c, i) {
    return /*#__PURE__*/React.createElement(MugShot, {
      key: c["case"],
      critter: c,
      idx: i
    });
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 28,
      marginTop: 32,
      padding: '0 14%'
    }
  }, CRITTERS.slice(3).map(function (c, i) {
    return /*#__PURE__*/React.createElement(MugShot, {
      key: c["case"],
      critter: c,
      idx: i + 1
    });
  }))));
}

// ======================== MEEPLES ========================
function RapMeeples() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: rapStyles.ink,
      color: rapStyles.paper,
      padding: '78px 32px 88px',
      borderTop: "4px double ".concat(rapStyles.mustard),
      borderBottom: "4px double ".concat(rapStyles.mustard)
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1140,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1.35fr',
      gap: 40,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: rapStyles.fontType,
      fontSize: 12,
      color: rapStyles.mustard,
      letterSpacing: 4,
      marginBottom: 10
    }
  }, "// LINEUP \xB7 ON THE RECORD"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: rapStyles.fontDisplay,
      fontSize: 52,
      lineHeight: 0.98,
      color: rapStyles.paper,
      margin: '0 0 14px',
      letterSpacing: -0.5
    }
  }, "The Usual Suspects."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: rapStyles.fontBody,
      fontSize: 17,
      lineHeight: 1.55,
      color: '#d8c8ac',
      margin: '0 0 22px',
      maxWidth: 480
    }
  }, "Every critter \u2014 and the Bark Ranger himself \u2014 is hand-screened on solid hardwood. ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: rapStyles.mustard
    }
  }, "Six chunky meeples"), " with two-color silkscreen art, sized to stand tall on the board."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      gap: 6,
      padding: '14px 18px',
      background: 'rgba(232,220,196,0.06)',
      border: "1.5px dashed ".concat(rapStyles.mustard)
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: rapStyles.fontType,
      fontSize: 11,
      color: rapStyles.mustard,
      letterSpacing: 2.5
    }
  }, "EVIDENCE TAG \u211607"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: rapStyles.fontDisplay,
      fontSize: 18,
      color: rapStyles.paper,
      lineHeight: 1.1
    }
  }, "6 wooden meeples \xB7 2-color screenprint"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: rapStyles.fontBody,
      fontSize: 13,
      color: '#d8c8ac'
    }
  }, "Maple stock \xB7 55mm tall \xB7 stands unaided"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      border: "3px solid ".concat(rapStyles.mustard),
      boxShadow: "8px 8px 0 ".concat(rapStyles.red),
      background: '#0e0a06'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/meeples-group.jpg",
    alt: "The six Critter Crimes wooden meeples lined up in Central Park",
    style: {
      width: '100%',
      height: 'auto',
      display: 'block',
      filter: 'contrast(1.03) saturate(1.05)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -14,
      left: 18,
      background: rapStyles.red,
      color: rapStyles.paper,
      fontFamily: rapStyles.fontType,
      fontSize: 11,
      padding: '4px 10px',
      letterSpacing: 2.5,
      border: "1.5px solid ".concat(rapStyles.ink)
    }
  }, "SURVEILLANCE \xB7 MAY 1932"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 10,
      right: 12,
      fontFamily: rapStyles.fontType,
      fontSize: 10,
      color: rapStyles.paper,
      opacity: 0.75,
      background: 'rgba(26,22,18,0.7)',
      padding: '3px 8px',
      letterSpacing: 1.5
    }
  }, "EXHIBIT A \xB7 NYPD-K9"))));
}

// ======================== FOUR CRIMES ========================
function RapFourCrimes() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: rapStyles.ink,
      color: rapStyles.paper,
      padding: '78px 32px 88px',
      borderTop: "4px double ".concat(rapStyles.mustard)
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1140,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 44,
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: rapStyles.fontType,
      fontSize: 12,
      color: rapStyles.mustard,
      letterSpacing: 4,
      marginBottom: 10
    }
  }, "// PICK YOUR POISON"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: rapStyles.fontDisplay,
      fontSize: 52,
      lineHeight: 0.98,
      color: rapStyles.paper,
      margin: '0 0 14px',
      letterSpacing: -0.5
    }
  }, "The Four Crimes."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: rapStyles.fontBody,
      fontSize: 17,
      lineHeight: 1.55,
      color: '#d8c8ac',
      margin: 0,
      maxWidth: 600
    }
  }, "Every critter has skills they're better at than others. Gain Capos to train in a certain skill to make every decision more meaningful.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 22
    }
  }, ACTIONS.map(function (a, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: a.id,
      style: {
        background: rapStyles.paper,
        color: rapStyles.ink,
        border: "2px solid ".concat(rapStyles.mustard),
        padding: '20px 18px 22px',
        position: 'relative',
        boxShadow: "5px 5px 0 ".concat(rapStyles.mustard),
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: a.cap,
      alt: a.name,
      style: {
        width: 52,
        height: 52,
        filter: "drop-shadow(2px 2px 0 ".concat(rapStyles.ink, "55)"),
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: rapStyles.fontType,
        fontSize: 10,
        color: rapStyles.rust,
        letterSpacing: 2.5,
        marginBottom: 2
      }
    }, "CRIME \u21160", i + 1), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: rapStyles.fontDisplay,
        fontSize: 22,
        color: rapStyles.ink,
        lineHeight: 1
      }
    }, a.name))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 14,
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: a.card,
      alt: "".concat(a.cardName, " card"),
      style: {
        width: '100%',
        height: 'auto',
        display: 'block',
        filter: "drop-shadow(4px 5px 0 ".concat(rapStyles.ink, ") drop-shadow(0 10px 18px ").concat(rapStyles.ink, "55)")
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: rapStyles.fontDisplay,
        fontSize: 15,
        color: rapStyles.redDark,
        lineHeight: 1.1,
        marginBottom: 8
      }
    }, a.cardName), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: rapStyles.fontType,
        fontSize: 11.5,
        color: rapStyles.redDark,
        fontStyle: 'italic',
        marginBottom: 8,
        letterSpacing: 0.5
      }
    }, "\u201C", a.tagline, "\u201D"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: rapStyles.fontBody,
        fontSize: 13,
        lineHeight: 1.5,
        margin: 0,
        color: rapStyles.ink
      }
    }, a.desc));
  }))));
}

// ======================== FORAGE ========================
function RapForage() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: paperBg,
      padding: '80px 32px 90px',
      borderBottom: "2px solid ".concat(rapStyles.ink)
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1140,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "// CENTRAL PARK \xB7 PRODUCE & CONTRABAND",
    title: "Forage the Park.",
    sub: "Five foods to fuel your dice. Five resources to build your burrow. The Park gives \u2014 if you can take it without getting pinched."
  }), /*#__PURE__*/React.createElement("div", {
    className: "cc-forage-stack",
    style: {
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: rapStyles.paper,
      border: "2px solid ".concat(rapStyles.ink),
      padding: '18px 22px 16px',
      marginBottom: 18,
      boxShadow: "5px 5px 0 ".concat(rapStyles.ink),
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: rapStyles.fontDisplay,
      fontSize: 18,
      color: rapStyles.ink,
      letterSpacing: 1
    }
  }, "FOOD DICE"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      borderTop: "1.5px dashed ".concat(rapStyles.ink, "88")
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: rapStyles.fontType,
      fontSize: 10,
      color: rapStyles.rust,
      letterSpacing: 2
    }
  }, "5 VARIETIES")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: 6
    }
  }, FOODS.map(function (f) {
    return /*#__PURE__*/React.createElement("div", {
      key: f.id,
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: f.icon,
      alt: f.name,
      style: {
        width: '100%',
        maxWidth: 72,
        height: 'auto',
        display: 'block',
        margin: '0 auto 4px'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: rapStyles.fontType,
        fontSize: 11,
        color: rapStyles.ink,
        letterSpacing: 1.5,
        textTransform: 'uppercase'
      }
    }, f.name));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: rapStyles.paper,
      border: "2px solid ".concat(rapStyles.ink),
      padding: '18px 22px 16px',
      boxShadow: "5px 5px 0 ".concat(rapStyles.ink)
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: rapStyles.fontDisplay,
      fontSize: 18,
      color: rapStyles.ink,
      letterSpacing: 1
    }
  }, "BURROW RESOURCES"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      borderTop: "1.5px dashed ".concat(rapStyles.ink, "88")
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: rapStyles.fontType,
      fontSize: 10,
      color: rapStyles.rust,
      letterSpacing: 2
    }
  }, "5 TYPES")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: 6
    }
  }, RESOURCES.map(function (r) {
    return /*#__PURE__*/React.createElement("div", {
      key: r.id,
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: r.icon,
      alt: r.name,
      style: {
        width: '100%',
        maxWidth: 72,
        height: 'auto',
        display: 'block',
        margin: '0 auto 4px'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: rapStyles.fontType,
        fontSize: 11,
        color: rapStyles.ink,
        letterSpacing: 1.5,
        textTransform: 'uppercase'
      }
    }, r.name));
  }))))));
}

// ======================= SECTION HEADER =======================
function SectionHeader(_ref2) {
  var eyebrow = _ref2.eyebrow,
    title = _ref2.title,
    sub = _ref2.sub;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 48,
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: rapStyles.fontType,
      fontSize: 12,
      color: rapStyles.red,
      letterSpacing: 4,
      marginBottom: 10
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: rapStyles.fontDisplay,
      fontSize: 52,
      lineHeight: 0.98,
      color: rapStyles.ink,
      margin: '0 0 14px',
      letterSpacing: -0.5
    }
  }, title), sub && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: rapStyles.fontBody,
      fontSize: 17,
      lineHeight: 1.55,
      color: rapStyles.ink,
      opacity: 0.78,
      margin: 0,
      textWrap: 'pretty',
      maxWidth: 580
    }
  }, sub));
}

// ========================= HOW TO PLAY =========================
function RapHowToPlay() {
  return /*#__PURE__*/React.createElement("section", {
    id: "how",
    style: {
      background: rapStyles.ink,
      color: rapStyles.paper,
      padding: '80px 32px 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1140,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 48,
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: rapStyles.fontType,
      fontSize: 12,
      color: rapStyles.mustard,
      letterSpacing: 4,
      marginBottom: 10
    }
  }, "// CASEWORK \xB7 DAY & NIGHT"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: rapStyles.fontDisplay,
      fontSize: 52,
      lineHeight: 0.98,
      color: rapStyles.paper,
      margin: '0 0 14px',
      letterSpacing: -0.5
    }
  }, "How the Caper Goes Down."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: rapStyles.fontBody,
      fontSize: 17,
      lineHeight: 1.55,
      color: '#d8c8ac',
      margin: 0,
      maxWidth: 620
    }
  }, "Each round splits in two. By ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: rapStyles.mustard
    }
  }, "Day"), ", you explore and harvest. By ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: rapStyles.mustard
    }
  }, "Night"), ", you pull recruits in and launder dice for points.")), PHASES.map(function (phase) {
    return /*#__PURE__*/React.createElement("div", {
      key: phase.id,
      style: {
        marginBottom: 32
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 22,
        background: phase.id === 'day' ? rapStyles.mustard : '#2a2520',
        color: phase.id === 'day' ? rapStyles.ink : rapStyles.mustard,
        border: "2px solid ".concat(rapStyles.mustard),
        padding: '18px 26px',
        boxShadow: "4px 4px 0 ".concat(rapStyles.red)
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: phase.icon,
      alt: phase.name,
      style: {
        width: 72,
        height: 72,
        filter: phase.id === 'night' ? 'drop-shadow(0 0 8px rgba(255,255,255,0.3))' : 'none',
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: rapStyles.fontType,
        fontSize: 11,
        letterSpacing: 4,
        opacity: 0.75
      }
    }, phase.id === 'day' ? '☀ DAYTIME' : '☾ NIGHTTIME'), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: rapStyles.fontDisplay,
        fontSize: 38,
        lineHeight: 1,
        margin: '4px 0 4px'
      }
    }, phase.name, " Phase"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: rapStyles.fontBody,
        fontSize: 14,
        lineHeight: 1.45,
        maxWidth: 720,
        opacity: 0.88
      }
    }, phase.intro)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: rapStyles.fontType,
        fontSize: 13,
        fontStyle: 'italic',
        opacity: 0.7,
        flexShrink: 0,
        transform: 'rotate(-2deg)'
      }
    }, "\u201C", phase.pun, "\u201D")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 18,
        marginTop: 16
      }
    }, ACTIONS_BY_PHASE[phase.id].map(function (a) {
      return /*#__PURE__*/React.createElement("div", {
        key: a.id,
        style: {
          background: rapStyles.paper,
          color: rapStyles.ink,
          border: "2px solid ".concat(rapStyles.mustard),
          padding: '22px 24px',
          display: 'grid',
          gridTemplateColumns: '88px 1fr',
          gap: 20,
          alignItems: 'center'
        }
      }, /*#__PURE__*/React.createElement("img", {
        src: a.cap,
        alt: a.name,
        style: {
          width: 88,
          height: 88,
          filter: "drop-shadow(2px 2px 0 ".concat(rapStyles.ink, "55)")
        }
      }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        style: {
          fontFamily: rapStyles.fontDisplay,
          fontSize: 24,
          color: rapStyles.ink,
          lineHeight: 1,
          marginBottom: 4
        }
      }, a.name), /*#__PURE__*/React.createElement("div", {
        style: {
          fontFamily: rapStyles.fontType,
          fontSize: 12,
          color: rapStyles.redDark,
          fontStyle: 'italic',
          marginBottom: 10
        }
      }, "\u201C", a.tagline, "\u201D"), /*#__PURE__*/React.createElement("p", {
        style: {
          fontFamily: rapStyles.fontBody,
          fontSize: 13.5,
          lineHeight: 1.5,
          margin: 0,
          color: rapStyles.ink
        }
      }, a.desc)));
    })));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      display: 'grid',
      gridTemplateColumns: '180px 1fr',
      gap: 24,
      background: rapStyles.redDark,
      color: rapStyles.paper,
      border: "2px dashed ".concat(rapStyles.mustard),
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#e6dcc4',
      borderRight: "2px solid ".concat(rapStyles.mustard),
      position: 'relative',
      overflow: 'hidden',
      minHeight: 220
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: BARK_RANGER.img,
    alt: "Bark Ranger",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: '50% 30%',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 8,
      left: 8,
      background: rapStyles.ink,
      color: rapStyles.mustard,
      fontFamily: rapStyles.fontType,
      fontSize: 9,
      padding: '3px 8px',
      letterSpacing: 2
    }
  }, "K-9 DIVISION")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 26px 24px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: rapStyles.fontDisplay,
      fontSize: 16,
      background: rapStyles.paper,
      color: rapStyles.redDark,
      padding: '6px 12px',
      letterSpacing: 2,
      alignSelf: 'flex-start',
      marginBottom: 12
    }
  }, "\u26A0 BEWARE THE BARK RANGER"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: rapStyles.fontDisplay,
      fontSize: 24,
      marginBottom: 8
    }
  }, "The Law has a Wet Nose."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: rapStyles.fontBody,
      fontSize: 14.5,
      lineHeight: 1.55,
      margin: 0,
      color: rapStyles.paper
    }
  }, BARK_RANGER.blurb)))));
}

// ========================== BOX ==========================
function RapBox() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: paperBg,
      padding: '80px 32px 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1140,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1.1fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      transform: 'rotate(-1.4deg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: stripeBg('#3a3128', '#2a221c', 30),
      border: "3px solid ".concat(rapStyles.ink),
      aspectRatio: '1 / 1',
      boxShadow: "10px 10px 0 ".concat(rapStyles.mustard, ", 10px 10px 0 4px ").concat(rapStyles.ink),
      display: 'grid',
      placeItems: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: rapStyles.paper,
      padding: '14px 22px',
      border: "2px dashed ".concat(rapStyles.ink),
      fontFamily: rapStyles.fontType,
      fontSize: 14,
      color: rapStyles.ink,
      textAlign: 'center',
      lineHeight: 1.7
    }
  }, "[ BOX RENDER \xB7 TOP-DOWN ]", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.65,
      fontSize: 11
    }
  }, "1200 \xD7 1200 \xB7 all components fanned")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 14,
      right: -28,
      background: rapStyles.red,
      color: rapStyles.paper,
      fontFamily: rapStyles.fontDisplay,
      fontSize: 12,
      padding: '8px 16px',
      letterSpacing: 2,
      border: "2px solid ".concat(rapStyles.ink),
      transform: 'rotate(8deg)'
    }
  }, "SEIZED"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "// EVIDENCE LOCKER \xB7 MANIFEST",
    title: "What's in the Stash.",
    sub: "Everything the Precinct confiscated \u2014 and the publisher repackaged as components. Each box is the result of a successful raid."
  }), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      fontFamily: rapStyles.fontBody
    }
  }, BOX_CONTENTS.map(function (b, i) {
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: 'grid',
        gridTemplateColumns: '54px 1fr auto',
        gap: 16,
        alignItems: 'baseline',
        padding: '14px 0',
        borderBottom: "1px dashed ".concat(rapStyles.ink, "44")
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: rapStyles.fontDisplay,
        fontSize: 24,
        color: rapStyles.red
      }
    }, "\xD7", b.qty), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 16,
        color: rapStyles.ink,
        lineHeight: 1.3
      }
    }, b.item), b.tag && /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: rapStyles.fontType,
        fontSize: 10,
        color: rapStyles.rust,
        letterSpacing: 1.5,
        textTransform: 'uppercase'
      }
    }, b.tag));
  })))));
}

// ============================ CTA ============================
function RapCTA() {
  return /*#__PURE__*/React.createElement("section", {
    id: "kickstarter",
    style: {
      background: rapStyles.red,
      color: rapStyles.paper,
      padding: '88px 32px 96px',
      position: 'relative',
      borderTop: "4px double ".concat(rapStyles.mustard),
      borderBottom: "4px double ".concat(rapStyles.mustard)
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: stripeBg('rgba(232,220,196,0.04)', 'transparent', 135),
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 880,
      margin: '0 auto',
      textAlign: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: rapStyles.fontType,
      fontSize: 12,
      color: rapStyles.mustard,
      letterSpacing: 5,
      marginBottom: 16
    }
  }, "\u2605  LAUNCHING ON KICKSTARTER  \u2605"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: rapStyles.fontDisplay,
      fontSize: 72,
      margin: '0 0 18px',
      lineHeight: 0.95,
      letterSpacing: -0.5
    }
  }, "Join the Syndicate."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: rapStyles.fontType,
      fontSize: 18,
      margin: '0 auto 32px',
      maxWidth: 560,
      lineHeight: 1.55
    }
  }, "Get on the list. We'll holler the moment the Kickstarter drops \u2014 with first dibs on the deluxe edition, exclusive critter promos, and the warm feeling of ", /*#__PURE__*/React.createElement("em", null, "aiding and abetting"), "."), /*#__PURE__*/React.createElement(EmailSignup, {
    source: "critter-crimes-A",
    theme: rapSignupTheme
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      fontFamily: rapStyles.fontType,
      fontSize: 12,
      color: rapStyles.paper,
      opacity: 0.75,
      letterSpacing: 2
    }
  }, "NO CRITTERS WERE PROSECUTED IN THE MAKING OF THIS GAME.")));
}

// =========================== FOOTER ===========================
function RapFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: rapStyles.ink,
      color: rapStyles.paper,
      padding: '40px 32px 28px',
      fontFamily: rapStyles.fontBody
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1140,
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: rapStyles.fontDisplay,
      fontSize: 18,
      letterSpacing: 1
    }
  }, "EMBER LEAF GAMES LLC"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 22,
      fontFamily: rapStyles.fontType,
      fontSize: 12,
      letterSpacing: 1.5
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: rapStyles.mustard,
      textDecoration: 'none'
    }
  }, "INSTAGRAM"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: rapStyles.mustard,
      textDecoration: 'none'
    }
  }, "FACEBOOK"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: rapStyles.mustard,
      textDecoration: 'none'
    }
  }, "BGG"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: rapStyles.mustard,
      textDecoration: 'none'
    }
  }, "CONTACT")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: rapStyles.fontType,
      fontSize: 11,
      opacity: 0.65
    }
  }, "\xA9 1932\u2013MMXXVI \xB7 Hand-stamped in Brooklyn.")));
}

// =========================== HERO SIGNUP THEME ===========================
var rapHeroSignupTheme = {
  formWrap: {
    maxWidth: 480
  },
  fieldRow: {
    display: 'flex',
    gap: 0,
    alignItems: 'stretch',
    border: "3px solid ".concat(rapStyles.ink),
    background: rapStyles.paper,
    boxShadow: "4px 4px 0 ".concat(rapStyles.ink)
  },
  input: {
    flex: 1,
    minWidth: 0,
    border: 'none',
    outline: 'none',
    background: 'transparent',
    padding: '14px 16px',
    fontFamily: rapStyles.fontType,
    fontSize: 15,
    color: rapStyles.ink
  },
  button: {
    border: 'none',
    cursor: 'pointer',
    background: rapStyles.red,
    color: rapStyles.paper,
    fontFamily: rapStyles.fontDisplay,
    fontSize: 13,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    padding: '14px 20px',
    borderLeft: "3px solid ".concat(rapStyles.ink),
    whiteSpace: 'nowrap'
  },
  buttonLabel: 'Sign up \u2192',
  submittingLabel: 'Sending\u2026',
  placeholder: 'your.email@hideout.gov',
  error: {
    marginTop: 10,
    fontFamily: rapStyles.fontType,
    fontSize: 12,
    color: rapStyles.paper,
    background: rapStyles.redDark,
    padding: '5px 10px',
    display: 'inline-block',
    letterSpacing: 1
  },
  disclaimer: false,
  successWrap: {
    maxWidth: 480,
    background: rapStyles.paper,
    color: rapStyles.ink,
    border: "3px solid ".concat(rapStyles.ink),
    boxShadow: "4px 4px 0 ".concat(rapStyles.red),
    padding: '20px 24px'
  },
  successTitle: {
    fontFamily: rapStyles.fontDisplay,
    fontSize: 20,
    color: rapStyles.red,
    marginBottom: 6,
    letterSpacing: 0.5
  },
  successBody: {
    fontFamily: rapStyles.fontType,
    fontSize: 13,
    lineHeight: 1.55,
    color: rapStyles.ink
  },
  successTitleText: "YOU'RE ON THE LIST.",
  successBodyText: "Filed under \u201cAccomplices.\u201d We\u2019ll holler before the Kickstarter drops."
};

// =========================== SIGNUP THEME ===========================
var rapSignupTheme = {
  formWrap: {
    maxWidth: 540,
    margin: '0 auto'
  },
  fieldRow: {
    display: 'flex',
    gap: 0,
    alignItems: 'stretch',
    border: "3px solid ".concat(rapStyles.ink),
    background: rapStyles.paper,
    boxShadow: "6px 6px 0 ".concat(rapStyles.ink)
  },
  input: {
    flex: 1,
    minWidth: 0,
    border: 'none',
    outline: 'none',
    background: 'transparent',
    padding: '16px 18px',
    fontFamily: rapStyles.fontType,
    fontSize: 16,
    color: rapStyles.ink
  },
  button: {
    border: 'none',
    cursor: 'pointer',
    background: rapStyles.ink,
    color: rapStyles.mustard,
    fontFamily: rapStyles.fontDisplay,
    fontSize: 14,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    padding: '16px 22px',
    borderLeft: "3px solid ".concat(rapStyles.ink),
    whiteSpace: 'nowrap'
  },
  buttonLabel: 'Sign up →',
  submittingLabel: 'Sending…',
  placeholder: 'your.email@hideout.gov',
  error: {
    marginTop: 12,
    fontFamily: rapStyles.fontType,
    fontSize: 13,
    color: rapStyles.paper,
    background: rapStyles.redDark,
    padding: '6px 12px',
    display: 'inline-block',
    letterSpacing: 1
  },
  disclaimer: false,
  successWrap: {
    maxWidth: 540,
    margin: '0 auto',
    background: rapStyles.paper,
    color: rapStyles.ink,
    border: "3px solid ".concat(rapStyles.ink),
    boxShadow: "6px 6px 0 ".concat(rapStyles.mustard),
    padding: '24px 28px'
  },
  successTitle: {
    fontFamily: rapStyles.fontDisplay,
    fontSize: 24,
    color: rapStyles.red,
    marginBottom: 8,
    letterSpacing: 0.5
  },
  successBody: {
    fontFamily: rapStyles.fontType,
    fontSize: 14,
    lineHeight: 1.55,
    color: rapStyles.ink
  },
  successTitleText: 'YOU\'RE ON THE LIST.',
  successBodyText: "Filed under “Accomplices.” We'll holler before the Kickstarter drops. Don't tell the Bark Ranger."
};

// =========================== ROOT ===========================
function DirectionRapSheet() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: rapStyles.paper,
      fontFamily: rapStyles.fontBody,
      color: rapStyles.ink
    }
  }, /*#__PURE__*/React.createElement(RapHero, null), /*#__PURE__*/React.createElement(RapMap, null), /*#__PURE__*/React.createElement(RapPitch, null), /*#__PURE__*/React.createElement(RapCritters, null), /*#__PURE__*/React.createElement(RapMeeples, null), /*#__PURE__*/React.createElement(RapFourCrimes, null), /*#__PURE__*/React.createElement(RapForage, null), /*#__PURE__*/React.createElement(RapHowToPlay, null), /*#__PURE__*/React.createElement(RapBox, null), /*#__PURE__*/React.createElement(RapCTA, null), /*#__PURE__*/React.createElement(RapFooter, null));
}
window.DirectionRapSheet = DirectionRapSheet;