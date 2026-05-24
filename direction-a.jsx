// direction-a.jsx — "THE RAP SHEET"
// 1930s wanted-poster pulp · kraft paper · ink + evidence red + mustard

const rapStyles = {
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
const paperBg = `
  radial-gradient(at 18% 22%, rgba(140,74,42,0.10), transparent 38%),
  radial-gradient(at 82% 78%, rgba(26,22,18,0.08), transparent 42%),
  radial-gradient(at 50% 50%, rgba(200,144,32,0.06), transparent 60%),
  #e8dcc4
`;

// ============================ NAV ============================
function RapNav() {
  return (
    <div style={{
      background: rapStyles.ink,
      color: rapStyles.paper,
      borderBottom: `3px double ${rapStyles.mustard}`,
      fontFamily: rapStyles.fontBody,
      position: 'relative',
      zIndex: 5
    }}>
      <div style={{
        maxWidth: 1140, margin: '0 auto', padding: '14px 32px',
        display: 'flex', alignItems: 'center', gap: 22
      }}>
        <div style={{
          width: 38, height: 38, borderRadius: '50%',
          background: rapStyles.mustard, color: rapStyles.ink,
          display: 'grid', placeItems: 'center',
          fontFamily: rapStyles.fontDisplay, fontSize: 14,
          border: `1.5px solid ${rapStyles.paper}`
        }}>EL</div>
        <div style={{ fontFamily: rapStyles.fontDisplay, fontSize: 15, letterSpacing: 0.5 }}>
          EMBER&nbsp;LEAF&nbsp;GAMES
        </div>
        <div style={{ flex: 1 }} />
        <nav style={{ display: 'flex', gap: 22, fontSize: 12.5, letterSpacing: 1.2, textTransform: 'uppercase' }}>
          {NAV_LINKS.map((l) =>
          <a key={l.label} href={l.href} style={{
            color: l.active ? rapStyles.mustard : rapStyles.paper,
            textDecoration: 'none',
            borderBottom: l.active ? `2px solid ${rapStyles.mustard}` : '2px solid transparent',
            paddingBottom: 2
          }}>{l.label}</a>
          )}
          <span style={{ opacity: 0.5 }}>·</span>
          <span style={{ opacity: 0.7 }}>Cart (0)</span>
        </nav>
      </div>
    </div>);

}

// =========================== HERO ===========================
function RapHero() {
  return (
    <section style={{
      background: paperBg,
      borderBottom: `2px solid ${rapStyles.ink}`,
      padding: '64px 32px 72px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Corner stamps */}
      <div style={{
        position: 'absolute', top: 28, right: 40,
        transform: 'rotate(8deg)',
        border: `3px solid ${rapStyles.red}`, color: rapStyles.red,
        padding: '6px 14px', fontFamily: rapStyles.fontDisplay,
        fontSize: 14, letterSpacing: 2, opacity: 0.85
      }}>CONFIDENTIAL</div>
      <div style={{
        position: 'absolute', top: 96, right: 56,
        transform: 'rotate(-4deg)',
        fontFamily: rapStyles.fontType,
        fontSize: 11, color: rapStyles.ink, opacity: 0.6
      }}>Filed: 06 / 12 / 1932</div>

      <div style={{ maxWidth: 1140, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 56, alignItems: 'center' }}>
        {/* Left */}
        <div>
          <div style={{
            display: 'inline-block',
            background: rapStyles.ink, color: rapStyles.mustard,
            padding: '6px 12px', fontFamily: rapStyles.fontType,
            fontSize: 11, letterSpacing: 3, marginBottom: 22
          }}>★ &nbsp;NYPD — CENTRAL PARK PRECINCT&nbsp; ★</div>

          <div style={{
            fontFamily: rapStyles.fontType, fontSize: 13,
            color: rapStyles.redDark, letterSpacing: 4,
            marginBottom: 6
          }}>— WANTED —</div>

          <h1 style={{
            fontFamily: rapStyles.fontDisplay,
            fontSize: 96, lineHeight: 0.92,
            color: rapStyles.ink, margin: '0 0 18px',
            letterSpacing: -1,
            textShadow: `2px 2px 0 ${rapStyles.red}33`
          }}>
            CRITTER<br />
            <span style={{ color: rapStyles.red }}>CRIMES</span>
          </h1>

          <div style={{
            fontFamily: rapStyles.fontType, fontSize: 18,
            color: rapStyles.ink, lineHeight: 1.4,
            borderTop: `1.5px solid ${rapStyles.ink}`,
            borderBottom: `1.5px solid ${rapStyles.ink}`,
            padding: '14px 0', marginBottom: 24, maxWidth: 480
          }}>
            A board game of <em>cute</em> &amp; <em>cunning</em>.<br />
            2–5 players. 1930s Central Park. Zero scruples.
          </div>

          <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
            <a href="#kickstarter" style={{
              display: 'inline-block',
              background: rapStyles.red, color: rapStyles.paper,
              fontFamily: rapStyles.fontDisplay, fontSize: 16,
              padding: '16px 28px', textDecoration: 'none',
              letterSpacing: 1.5, textTransform: 'uppercase',
              boxShadow: `4px 4px 0 ${rapStyles.ink}`,
              border: `2px solid ${rapStyles.ink}`
            }}>Sign up for updates →</a>
            <a href="#how" style={{
              fontFamily: rapStyles.fontType, fontSize: 14,
              color: rapStyles.ink, textDecoration: 'underline',
              textUnderlineOffset: 4
            }}>Read the rap sheet ↓</a>
          </div>

          <div style={{ display: 'flex', gap: 28, marginTop: 36 }}>
            {STATS.map((s) =>
            <div key={s.label}>
                <div style={{ fontFamily: rapStyles.fontDisplay, fontSize: 28, color: rapStyles.ink }}>{s.value}</div>
                <div style={{ fontFamily: rapStyles.fontType, fontSize: 11, color: rapStyles.rust, letterSpacing: 1.5, textTransform: 'uppercase' }}>{s.label}</div>
              </div>
            )}
          </div>
        </div>

        {/* Right: Owl Capone as hero — the boss */}
        <div style={{ position: 'relative' }}>
          <div style={{
            background: '#e6dcc4',
            border: `3px solid ${rapStyles.ink}`,
            boxShadow: `12px 12px 0 ${rapStyles.ink}, 12px 12px 0 4px ${rapStyles.red}`,
            aspectRatio: '5 / 7',
            position: 'relative', overflow: 'hidden',
            transform: 'rotate(-1.2deg)'
          }}>
            <img src={CRITTERS[0].img} alt="Owl Capone" style={{
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: '50% 35%',
              display: 'block'
            }} />
            <div style={{
              position: 'absolute', top: -14, left: -14,
              background: rapStyles.mustard, color: rapStyles.ink,
              fontFamily: rapStyles.fontDisplay, fontSize: 11,
              padding: '6px 10px', letterSpacing: 1.5,
              border: `2px solid ${rapStyles.ink}`,
              transform: 'rotate(-6deg)'
            }}>EXHIBIT A</div>
            <div style={{
              position: 'absolute', bottom: 10, right: 10,
              background: 'rgba(26,22,18,0.88)', color: rapStyles.paper,
              fontFamily: rapStyles.fontType, fontSize: 10,
              padding: '4px 10px', letterSpacing: 2,
              border: `1px solid ${rapStyles.paper}66`
            }}>SUBJECT: O. CAPONE · RUNS THE 6TH BURROW</div>
          </div>
          <div style={{
            position: 'absolute', bottom: -28, right: 10,
            fontFamily: rapStyles.fontType, fontSize: 11,
            color: rapStyles.ink, opacity: 0.6,
            transform: 'rotate(-2deg)'
          }}>// evidence locker · do not remove</div>
        </div>
      </div>
    </section>);

}

// ============================ MAP ============================
function RapMap() {
  return (
    <section style={{
      background: rapStyles.ink,
      padding: '32px 0 36px',
      borderTop: `4px double ${rapStyles.mustard}`,
      borderBottom: `4px double ${rapStyles.mustard}`
    }}>
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 32px 22px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
          <div style={{ fontFamily: rapStyles.fontType, fontSize: 12, color: rapStyles.mustard, letterSpacing: 4 }}>// CONFISCATED EVIDENCE</div>
          <div style={{ flex: 1, borderTop: `1.5px dashed ${rapStyles.mustard}66` }} />
          <div style={{ fontFamily: rapStyles.fontType, fontSize: 11, color: rapStyles.paper, opacity: 0.7, letterSpacing: 2 }}>NYPD-K9 · MAP №01</div>
        </div>
        <h2 style={{
          fontFamily: rapStyles.fontDisplay, fontSize: 42, lineHeight: 1,
          color: rapStyles.paper, margin: '8px 0 0', letterSpacing: -0.5
        }}>The Park. The Whole Park.</h2>
        <p style={{
          fontFamily: rapStyles.fontBody, fontSize: 15, lineHeight: 1.5,
          color: '#d8c8ac', margin: '6px 0 0', maxWidth: 720
        }}>Every job goes down somewhere on this beauty — a hand-illustrated 1930s Central Park, end to end.</p>
      </div>
      <div style={{ width: '100%', overflow: 'hidden' }}>
        <img
          src="assets/central-park-map.png"
          alt="Central Park game board — a hand-illustrated panoramic map of 1930s Central Park, from West Side to East Side"
          style={{ width: '100%', height: 'auto', display: 'block' }} />
        
      </div>
    </section>);

}

// =========================== PITCH ===========================
function RapPitch() {
  return (
    <section style={{
      background: rapStyles.ink, color: rapStyles.paper,
      padding: '68px 32px',
      position: 'relative'
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: stripeBg('rgba(232,220,196,0.03)', 'transparent', 90),
        pointerEvents: 'none'
      }} />
      <div style={{ maxWidth: 980, margin: '0 auto', position: 'relative' }}>
        <div style={{
          fontFamily: rapStyles.fontType, fontSize: 12,
          color: rapStyles.mustard, letterSpacing: 4,
          marginBottom: 18
        }}>// THE OFFICIAL STATEMENT</div>
        <p style={{
          fontFamily: rapStyles.fontDisplay,
          fontSize: 34, lineHeight: 1.25, margin: 0,
          textWrap: 'pretty', color: rapStyles.paper, fontWeight: 400
        }}>
          The Park is yours. <span style={{ color: rapStyles.mustard }}>Take it.</span>
        </p>
        <p style={{
          fontFamily: rapStyles.fontBody,
          fontSize: 17, lineHeight: 1.65,
          marginTop: 22, color: '#d8c8ac', maxWidth: 760
        }}>{PITCH}</p>
        <p style={{
          fontFamily: rapStyles.fontType, fontSize: 13,
          color: rapStyles.mustard, marginTop: 18, letterSpacing: 1
        }}>Signed, O. Capone — though he denies everything.</p>
      </div>
    </section>);

}

// ========================= CRITTERS =========================
function MugShot({ critter, idx }) {
  const food = critter.food && FOOD_BY_ID[critter.food];
  const res = critter.resource && RES_BY_ID[critter.resource];
  return (
    <div style={{
      background: rapStyles.paper,
      border: `2px solid ${rapStyles.ink}`,
      boxShadow: `6px 6px 0 ${rapStyles.ink}`,
      transform: `rotate(${idx % 2 === 0 ? -0.6 : 0.8}deg)`,
      display: 'flex', flexDirection: 'column'
    }}>
      {/* Portrait area — full character art */}
      <div style={{
        background: '#e6dcc4',
        aspectRatio: '5 / 7',
        position: 'relative',
        borderBottom: `2px solid ${rapStyles.ink}`,
        overflow: 'hidden'
      }}>
        <img src={critter.img} alt={critter.name} style={{
          width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: '50% 40%',
          display: 'block'
        }} />
        {/* Case number plate */}
        <div style={{
          position: 'absolute', bottom: 10, left: 10,
          background: rapStyles.ink, color: rapStyles.paper,
          fontFamily: rapStyles.fontType, fontSize: 11,
          padding: '5px 10px', letterSpacing: 2,
          border: `1px solid ${rapStyles.paper}`
        }}>{critter.case}</div>
        {/* Wanted stamp */}
        <div style={{
          position: 'absolute', bottom: 10, right: 10,
          border: `2px solid ${rapStyles.red}`, color: rapStyles.red,
          fontFamily: rapStyles.fontDisplay, fontSize: 11,
          padding: '4px 8px', letterSpacing: 2,
          background: 'rgba(232,220,196,0.85)',
          transform: 'rotate(6deg)'
        }}>WANTED</div>
      </div>

      {/* Card body */}
      <div style={{ padding: '18px 20px 20px' }}>
        <div style={{ fontFamily: rapStyles.fontBody, fontSize: 13, color: rapStyles.rust, fontStyle: 'italic', marginBottom: 14 }}>{critter.species}</div>

        <div style={{
          background: rapStyles.paperDark,
          border: `1px solid ${rapStyles.ink}33`,
          padding: '10px 12px', marginBottom: 14
        }}>
          <div style={{ fontFamily: rapStyles.fontType, fontSize: 10, color: rapStyles.ink, letterSpacing: 2, marginBottom: 2 }}>M.O. — {critter.ability.toUpperCase()}</div>
          <div style={{ fontFamily: rapStyles.fontBody, fontSize: 13, color: rapStyles.ink, lineHeight: 1.5 }}>{critter.abilityText}</div>
        </div>

        {/* Preferences strip */}
        {(food || res) &&
        <div style={{
          display: 'flex', gap: 14,
          padding: '10px 0 12px',
          borderBottom: `1px dashed ${rapStyles.ink}55`,
          marginBottom: 12
        }}>
            {food &&
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flex: 1, minWidth: 0 }}>
                <img src={food.icon} alt={food.name} style={{ width: 36, height: 36, flexShrink: 0 }} />
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontFamily: rapStyles.fontType, fontSize: 9, color: rapStyles.rust, letterSpacing: 1.5 }}>PREFERS</div>
                  <div style={{ fontFamily: rapStyles.fontDisplay, fontSize: 13, color: rapStyles.ink, lineHeight: 1.1 }}>{food.name}</div>
                </div>
              </div>
          }
            {res &&
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flex: 1, minWidth: 0 }}>
                <img src={res.icon} alt={res.name} style={{ width: 36, height: 36, flexShrink: 0 }} />
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontFamily: rapStyles.fontType, fontSize: 9, color: rapStyles.rust, letterSpacing: 1.5 }}>BUILDS WITH</div>
                  <div style={{ fontFamily: rapStyles.fontDisplay, fontSize: 13, color: rapStyles.ink, lineHeight: 1.1 }}>{res.name}</div>
                </div>
              </div>
          }
          </div>
        }

        <div style={{
          fontFamily: rapStyles.fontType, fontSize: 11,
          color: rapStyles.ink, opacity: 0.85, lineHeight: 1.4
        }}>
          <strong style={{ color: rapStyles.redDark }}>RAP:</strong> {critter.rap}
        </div>
      </div>
    </div>);

}

function RapCritters() {
  return (
    <section style={{ background: paperBg, padding: '80px 32px 90px', borderBottom: `2px solid ${rapStyles.ink}` }}>
      <div style={{ maxWidth: 1140, margin: '0 auto' }}>
        <SectionHeader
          eyebrow="// PRECINCT FILES · MOST WANTED"
          title="Meet the Suspects."
          sub="Five critters. Five rap sheets. One park, and not enough room for all of them." />
        
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28
        }}>
          {CRITTERS.slice(0, 3).map((c, i) => <MugShot key={c.case} critter={c} idx={i} />)}
        </div>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 28,
          marginTop: 32, padding: '0 14%'
        }}>
          {CRITTERS.slice(3).map((c, i) => <MugShot key={c.case} critter={c} idx={i + 1} />)}
        </div>
      </div>
    </section>);

}

// ======================== MEEPLES ========================
function RapMeeples() {
  return (
    <section style={{
      background: rapStyles.ink,
      color: rapStyles.paper,
      padding: '78px 32px 88px',
      borderTop: `4px double ${rapStyles.mustard}`,
      borderBottom: `4px double ${rapStyles.mustard}`
    }}>
      <div style={{ maxWidth: 1140, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.35fr', gap: 40, alignItems: 'center' }}>
        <div>
          <div style={{ fontFamily: rapStyles.fontType, fontSize: 12, color: rapStyles.mustard, letterSpacing: 4, marginBottom: 10 }}>// LINEUP · ON THE RECORD</div>
          <h2 style={{ fontFamily: rapStyles.fontDisplay, fontSize: 52, lineHeight: 0.98, color: rapStyles.paper, margin: '0 0 14px', letterSpacing: -0.5 }}>The Usual Suspects.</h2>
          <p style={{ fontFamily: rapStyles.fontBody, fontSize: 17, lineHeight: 1.55, color: '#d8c8ac', margin: '0 0 22px', maxWidth: 480 }}>
            Every critter — and the Bark Ranger himself — is hand-screened on solid hardwood. <strong style={{ color: rapStyles.mustard }}>Six chunky meeples</strong> with two-color silkscreen art, sized to stand tall on the board.
          </p>
          <div style={{
            display: 'inline-flex', flexDirection: 'column', gap: 6,
            padding: '14px 18px',
            background: 'rgba(232,220,196,0.06)',
            border: `1.5px dashed ${rapStyles.mustard}`
          }}>
            <div style={{ fontFamily: rapStyles.fontType, fontSize: 11, color: rapStyles.mustard, letterSpacing: 2.5 }}>EVIDENCE TAG №07</div>
            <div style={{ fontFamily: rapStyles.fontDisplay, fontSize: 18, color: rapStyles.paper, lineHeight: 1.1 }}>6 wooden meeples · 2-color screenprint</div>
            <div style={{ fontFamily: rapStyles.fontBody, fontSize: 13, color: '#d8c8ac' }}>Maple stock · 55mm tall · stands unaided</div>
          </div>
        </div>
        <div style={{
          position: 'relative',
          border: `3px solid ${rapStyles.mustard}`,
          boxShadow: `8px 8px 0 ${rapStyles.red}`,
          background: '#0e0a06'
        }}>
          <img src="assets/meeples-group.jpg" alt="The six Critter Crimes wooden meeples lined up in Central Park" style={{
            width: '100%', height: 'auto', display: 'block',
            filter: 'contrast(1.03) saturate(1.05)'
          }} />
          <div style={{
            position: 'absolute', top: -14, left: 18,
            background: rapStyles.red, color: rapStyles.paper,
            fontFamily: rapStyles.fontType, fontSize: 11,
            padding: '4px 10px', letterSpacing: 2.5,
            border: `1.5px solid ${rapStyles.ink}`
          }}>SURVEILLANCE · MAY 1932</div>
          <div style={{
            position: 'absolute', bottom: 10, right: 12,
            fontFamily: rapStyles.fontType, fontSize: 10,
            color: rapStyles.paper, opacity: 0.75,
            background: 'rgba(26,22,18,0.7)',
            padding: '3px 8px', letterSpacing: 1.5
          }}>EXHIBIT A · NYPD-K9</div>
        </div>
      </div>
    </section>);

}

// ======================== FOUR CRIMES ========================
function RapFourCrimes() {
  return (
    <section style={{ background: rapStyles.ink, color: rapStyles.paper, padding: '78px 32px 88px', borderTop: `4px double ${rapStyles.mustard}` }}>
      <div style={{ maxWidth: 1140, margin: '0 auto' }}>
        <div style={{ marginBottom: 44, maxWidth: 720 }}>
          <div style={{ fontFamily: rapStyles.fontType, fontSize: 12, color: rapStyles.mustard, letterSpacing: 4, marginBottom: 10 }}>// PICK YOUR POISON</div>
          <h2 style={{ fontFamily: rapStyles.fontDisplay, fontSize: 52, lineHeight: 0.98, color: rapStyles.paper, margin: '0 0 14px', letterSpacing: -0.5 }}>The Four Crimes.</h2>
          <p style={{ fontFamily: rapStyles.fontBody, fontSize: 17, lineHeight: 1.55, color: '#d8c8ac', margin: 0, maxWidth: 600 }}>Every critter has skills they're better at than others. Gain Capos to train in a certain skill to make every decision more meaningful.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 22 }}>
          {ACTIONS.map((a, i) =>
          <div key={a.id} style={{
            background: rapStyles.paper, color: rapStyles.ink,
            border: `2px solid ${rapStyles.mustard}`,
            padding: '20px 18px 22px',
            position: 'relative',
            boxShadow: `5px 5px 0 ${rapStyles.mustard}`,
            display: 'flex', flexDirection: 'column'
          }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <img src={a.cap} alt={a.name} style={{ width: 52, height: 52, filter: `drop-shadow(2px 2px 0 ${rapStyles.ink}55)`, flexShrink: 0 }} />
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontFamily: rapStyles.fontType, fontSize: 10, color: rapStyles.rust, letterSpacing: 2.5, marginBottom: 2 }}>CRIME №0{i + 1}</div>
                  <div style={{ fontFamily: rapStyles.fontDisplay, fontSize: 22, color: rapStyles.ink, lineHeight: 1 }}>{a.name}</div>
                </div>
              </div>
              {/* Card art — the hero */}
              <div style={{
              marginBottom: 14, position: 'relative'
            }}>
                <img src={a.card} alt={`${a.cardName} card`} style={{
                width: '100%', height: 'auto', display: 'block',
                filter: `drop-shadow(4px 5px 0 ${rapStyles.ink}) drop-shadow(0 10px 18px ${rapStyles.ink}55)`
              }} />
              </div>
              <div style={{ fontFamily: rapStyles.fontDisplay, fontSize: 15, color: rapStyles.redDark, lineHeight: 1.1, marginBottom: 8 }}>{a.cardName}</div>
              <div style={{ fontFamily: rapStyles.fontType, fontSize: 11.5, color: rapStyles.redDark, fontStyle: 'italic', marginBottom: 8, letterSpacing: 0.5 }}>“{a.tagline}”</div>
              <p style={{ fontFamily: rapStyles.fontBody, fontSize: 13, lineHeight: 1.5, margin: 0, color: rapStyles.ink }}>{a.desc}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}

// ======================== FORAGE ========================
function RapForage() {
  return (
    <section style={{ background: paperBg, padding: '80px 32px 90px', borderBottom: `2px solid ${rapStyles.ink}` }}>
      <div style={{ maxWidth: 1140, margin: '0 auto' }}>
        <SectionHeader
          eyebrow="// CENTRAL PARK · PRODUCE & CONTRABAND"
          title="Forage the Park."
          sub="Five foods to fuel your dice. Five resources to build your burrow. The Park gives — if you can take it without getting pinched." />
        
        <div className="cc-forage-stack" style={{ maxWidth: 720 }}>
        <div style={{
            background: rapStyles.paper, border: `2px solid ${rapStyles.ink}`,
            padding: '18px 22px 16px', marginBottom: 18, boxShadow: `5px 5px 0 ${rapStyles.ink}`, textAlign: "center"
          }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
            <div style={{ fontFamily: rapStyles.fontDisplay, fontSize: 18, color: rapStyles.ink, letterSpacing: 1 }}>FOOD DICE</div>
            <div style={{ flex: 1, borderTop: `1.5px dashed ${rapStyles.ink}88` }} />
            <div style={{ fontFamily: rapStyles.fontType, fontSize: 10, color: rapStyles.rust, letterSpacing: 2 }}>5 VARIETIES</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 6 }}>
            {FOODS.map((f) =>
              <div key={f.id} style={{ textAlign: 'center' }}>
                <img src={f.icon} alt={f.name} style={{ width: '100%', maxWidth: 72, height: 'auto', display: 'block', margin: '0 auto 4px' }} />
                <div style={{ fontFamily: rapStyles.fontType, fontSize: 11, color: rapStyles.ink, letterSpacing: 1.5, textTransform: 'uppercase' }}>{f.name}</div>
              </div>
              )}
          </div>
        </div>
        <div style={{
            background: rapStyles.paper, border: `2px solid ${rapStyles.ink}`,
            padding: '18px 22px 16px', boxShadow: `5px 5px 0 ${rapStyles.ink}`
          }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
            <div style={{ fontFamily: rapStyles.fontDisplay, fontSize: 18, color: rapStyles.ink, letterSpacing: 1 }}>BURROW RESOURCES</div>
            <div style={{ flex: 1, borderTop: `1.5px dashed ${rapStyles.ink}88` }} />
            <div style={{ fontFamily: rapStyles.fontType, fontSize: 10, color: rapStyles.rust, letterSpacing: 2 }}>5 TYPES</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 6 }}>
            {RESOURCES.map((r) =>
              <div key={r.id} style={{ textAlign: 'center' }}>
                <img src={r.icon} alt={r.name} style={{ width: '100%', maxWidth: 72, height: 'auto', display: 'block', margin: '0 auto 4px' }} />
                <div style={{ fontFamily: rapStyles.fontType, fontSize: 11, color: rapStyles.ink, letterSpacing: 1.5, textTransform: 'uppercase' }}>{r.name}</div>
              </div>
              )}
          </div>
        </div>
        </div>
      </div>
    </section>);

}

// ======================= SECTION HEADER =======================
function SectionHeader({ eyebrow, title, sub }) {
  return (
    <div style={{ marginBottom: 48, maxWidth: 720 }}>
      <div style={{
        fontFamily: rapStyles.fontType, fontSize: 12,
        color: rapStyles.red, letterSpacing: 4,
        marginBottom: 10
      }}>{eyebrow}</div>
      <h2 style={{
        fontFamily: rapStyles.fontDisplay,
        fontSize: 52, lineHeight: 0.98,
        color: rapStyles.ink, margin: '0 0 14px',
        letterSpacing: -0.5
      }}>{title}</h2>
      {sub && <p style={{
        fontFamily: rapStyles.fontBody, fontSize: 17,
        lineHeight: 1.55, color: rapStyles.ink, opacity: 0.78,
        margin: 0, textWrap: 'pretty', maxWidth: 580
      }}>{sub}</p>}
    </div>);

}

// ========================= HOW TO PLAY =========================
function RapHowToPlay() {
  return (
    <section id="how" style={{ background: rapStyles.ink, color: rapStyles.paper, padding: '80px 32px 96px' }}>
      <div style={{ maxWidth: 1140, margin: '0 auto' }}>
        <div style={{ marginBottom: 48, maxWidth: 720 }}>
          <div style={{ fontFamily: rapStyles.fontType, fontSize: 12, color: rapStyles.mustard, letterSpacing: 4, marginBottom: 10 }}>// CASEWORK · DAY & NIGHT</div>
          <h2 style={{ fontFamily: rapStyles.fontDisplay, fontSize: 52, lineHeight: 0.98, color: rapStyles.paper, margin: '0 0 14px', letterSpacing: -0.5 }}>How the Caper Goes Down.</h2>
          <p style={{ fontFamily: rapStyles.fontBody, fontSize: 17, lineHeight: 1.55, color: '#d8c8ac', margin: 0, maxWidth: 620 }}>Each round splits in two. By <strong style={{ color: rapStyles.mustard }}>Day</strong>, you explore and harvest. By <strong style={{ color: rapStyles.mustard }}>Night</strong>, you pull recruits in and launder dice for points.</p>
        </div>

        {PHASES.map((phase) =>
        <div key={phase.id} style={{ marginBottom: 32 }}>
            {/* Phase header — sun/moon banner */}
            <div style={{
            display: 'flex', alignItems: 'center', gap: 22,
            background: phase.id === 'day' ? rapStyles.mustard : '#2a2520',
            color: phase.id === 'day' ? rapStyles.ink : rapStyles.mustard,
            border: `2px solid ${rapStyles.mustard}`,
            padding: '18px 26px',
            boxShadow: `4px 4px 0 ${rapStyles.red}`
          }}>
              <img src={phase.icon} alt={phase.name} style={{
              width: 72, height: 72,
              filter: phase.id === 'night' ? 'drop-shadow(0 0 8px rgba(255,255,255,0.3))' : 'none',
              flexShrink: 0
            }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: rapStyles.fontType, fontSize: 11, letterSpacing: 4, opacity: 0.75 }}>{phase.id === 'day' ? '☀ DAYTIME' : '☾ NIGHTTIME'}</div>
                <div style={{ fontFamily: rapStyles.fontDisplay, fontSize: 38, lineHeight: 1, margin: '4px 0 4px' }}>{phase.name} Phase</div>
                <div style={{ fontFamily: rapStyles.fontBody, fontSize: 14, lineHeight: 1.45, maxWidth: 720, opacity: 0.88 }}>{phase.intro}</div>
              </div>
              <div style={{
              fontFamily: rapStyles.fontType, fontSize: 13,
              fontStyle: 'italic', opacity: 0.7, flexShrink: 0,
              transform: 'rotate(-2deg)'
            }}>“{phase.pun}”</div>
            </div>

            {/* Two action cards for this phase */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18, marginTop: 16 }}>
              {ACTIONS_BY_PHASE[phase.id].map((a) =>
            <div key={a.id} style={{
              background: rapStyles.paper, color: rapStyles.ink,
              border: `2px solid ${rapStyles.mustard}`,
              padding: '22px 24px',
              display: 'grid', gridTemplateColumns: '88px 1fr', gap: 20, alignItems: 'center'
            }}>
                  <img src={a.cap} alt={a.name} style={{ width: 88, height: 88, filter: `drop-shadow(2px 2px 0 ${rapStyles.ink}55)` }} />
                  <div>
                    <div style={{ fontFamily: rapStyles.fontDisplay, fontSize: 24, color: rapStyles.ink, lineHeight: 1, marginBottom: 4 }}>{a.name}</div>
                    <div style={{ fontFamily: rapStyles.fontType, fontSize: 12, color: rapStyles.redDark, fontStyle: 'italic', marginBottom: 10 }}>“{a.tagline}”</div>
                    <p style={{ fontFamily: rapStyles.fontBody, fontSize: 13.5, lineHeight: 1.5, margin: 0, color: rapStyles.ink }}>{a.desc}</p>
                  </div>
                </div>
            )}
            </div>
          </div>
        )}

        <div style={{
          marginTop: 36, display: 'grid',
          gridTemplateColumns: '180px 1fr', gap: 24,
          background: rapStyles.redDark, color: rapStyles.paper,
          border: `2px dashed ${rapStyles.mustard}`,
          alignItems: 'stretch'
        }}>
          <div style={{
            background: '#e6dcc4',
            borderRight: `2px solid ${rapStyles.mustard}`,
            position: 'relative', overflow: 'hidden',
            minHeight: 220
          }}>
            <img src={BARK_RANGER.img} alt="Bark Ranger" style={{
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: '50% 30%',
              display: 'block'
            }} />
            <div style={{
              position: 'absolute', bottom: 8, left: 8,
              background: rapStyles.ink, color: rapStyles.mustard,
              fontFamily: rapStyles.fontType, fontSize: 9,
              padding: '3px 8px', letterSpacing: 2
            }}>K-9 DIVISION</div>
          </div>
          <div style={{ padding: '22px 26px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{
              fontFamily: rapStyles.fontDisplay, fontSize: 16,
              background: rapStyles.paper, color: rapStyles.redDark,
              padding: '6px 12px', letterSpacing: 2, alignSelf: 'flex-start',
              marginBottom: 12
            }}>⚠ BEWARE THE BARK RANGER</div>
            <div style={{ fontFamily: rapStyles.fontDisplay, fontSize: 24, marginBottom: 8 }}>The Law has a Wet Nose.</div>
            <p style={{ fontFamily: rapStyles.fontBody, fontSize: 14.5, lineHeight: 1.55, margin: 0, color: rapStyles.paper }}>{BARK_RANGER.blurb}</p>
          </div>
        </div>
      </div>
    </section>);

}

// ========================== BOX ==========================
function RapBox() {
  return (
    <section style={{ background: paperBg, padding: '80px 32px 96px' }}>
      <div style={{ maxWidth: 1140, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 56, alignItems: 'center' }}>
        {/* Box render placeholder */}
        <div style={{ position: 'relative', transform: 'rotate(-1.4deg)' }}>
          <div style={{
            background: stripeBg('#3a3128', '#2a221c', 30),
            border: `3px solid ${rapStyles.ink}`,
            aspectRatio: '1 / 1',
            boxShadow: `10px 10px 0 ${rapStyles.mustard}, 10px 10px 0 4px ${rapStyles.ink}`,
            display: 'grid', placeItems: 'center', position: 'relative'
          }}>
            <div style={{
              background: rapStyles.paper, padding: '14px 22px',
              border: `2px dashed ${rapStyles.ink}`,
              fontFamily: rapStyles.fontType, fontSize: 14, color: rapStyles.ink,
              textAlign: 'center', lineHeight: 1.7
            }}>
              [ BOX RENDER · TOP-DOWN ]<br />
              <span style={{ opacity: 0.65, fontSize: 11 }}>1200 × 1200 · all components fanned</span>
            </div>
            <div style={{
              position: 'absolute', top: 14, right: -28,
              background: rapStyles.red, color: rapStyles.paper,
              fontFamily: rapStyles.fontDisplay, fontSize: 12,
              padding: '8px 16px', letterSpacing: 2,
              border: `2px solid ${rapStyles.ink}`,
              transform: 'rotate(8deg)'
            }}>SEIZED</div>
          </div>
        </div>

        {/* Manifest */}
        <div>
          <SectionHeader
            eyebrow="// EVIDENCE LOCKER · MANIFEST"
            title="What's in the Stash."
            sub="Everything the Precinct confiscated — and the publisher repackaged as components. Each box is the result of a successful raid." />
          
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontFamily: rapStyles.fontBody }}>
            {BOX_CONTENTS.map((b, i) =>
            <li key={i} style={{
              display: 'grid',
              gridTemplateColumns: '54px 1fr auto',
              gap: 16, alignItems: 'baseline',
              padding: '14px 0',
              borderBottom: `1px dashed ${rapStyles.ink}44`
            }}>
                <div style={{
                fontFamily: rapStyles.fontDisplay, fontSize: 24,
                color: rapStyles.red
              }}>×{b.qty}</div>
                <div style={{ fontSize: 16, color: rapStyles.ink, lineHeight: 1.3 }}>{b.item}</div>
                {b.tag && <div style={{
                fontFamily: rapStyles.fontType, fontSize: 10,
                color: rapStyles.rust, letterSpacing: 1.5,
                textTransform: 'uppercase'
              }}>{b.tag}</div>}
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>);

}

// ============================ CTA ============================
function RapCTA() {
  return (
    <section id="kickstarter" style={{
      background: rapStyles.red, color: rapStyles.paper,
      padding: '88px 32px 96px', position: 'relative',
      borderTop: `4px double ${rapStyles.mustard}`,
      borderBottom: `4px double ${rapStyles.mustard}`
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: stripeBg('rgba(232,220,196,0.04)', 'transparent', 135),
        pointerEvents: 'none'
      }} />
      <div style={{ maxWidth: 880, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
        <div style={{
          fontFamily: rapStyles.fontType, fontSize: 12,
          color: rapStyles.mustard, letterSpacing: 5, marginBottom: 16
        }}>★  LAUNCHING ON KICKSTARTER  ★</div>
        <h2 style={{
          fontFamily: rapStyles.fontDisplay, fontSize: 72,
          margin: '0 0 18px', lineHeight: 0.95, letterSpacing: -0.5
        }}>Join the Syndicate.</h2>
        <p style={{
          fontFamily: rapStyles.fontType, fontSize: 18,
          margin: '0 auto 32px', maxWidth: 560, lineHeight: 1.55
        }}>Get on the list. We'll holler the moment the Kickstarter drops — with first dibs on the deluxe edition, exclusive critter promos, and the warm feeling of <em>aiding and abetting</em>.</p>

        <EmailSignup source="critter-crimes-A" theme={rapSignupTheme} />

        <div style={{
          marginTop: 40, fontFamily: rapStyles.fontType, fontSize: 12,
          color: rapStyles.paper, opacity: 0.75, letterSpacing: 2
        }}>NO CRITTERS WERE PROSECUTED IN THE MAKING OF THIS GAME.</div>
      </div>
    </section>);

}

// =========================== FOOTER ===========================
function RapFooter() {
  return (
    <footer style={{
      background: rapStyles.ink, color: rapStyles.paper,
      padding: '40px 32px 28px',
      fontFamily: rapStyles.fontBody
    }}>
      <div style={{
        maxWidth: 1140, margin: '0 auto',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: 18
      }}>
        <div style={{ fontFamily: rapStyles.fontDisplay, fontSize: 18, letterSpacing: 1 }}>
          EMBER LEAF GAMES LLC
        </div>
        <div style={{ display: 'flex', gap: 22, fontFamily: rapStyles.fontType, fontSize: 12, letterSpacing: 1.5 }}>
          <a href="#" style={{ color: rapStyles.mustard, textDecoration: 'none' }}>INSTAGRAM</a>
          <a href="#" style={{ color: rapStyles.mustard, textDecoration: 'none' }}>FACEBOOK</a>
          <a href="#" style={{ color: rapStyles.mustard, textDecoration: 'none' }}>BGG</a>
          <a href="#" style={{ color: rapStyles.mustard, textDecoration: 'none' }}>CONTACT</a>
        </div>
        <div style={{ fontFamily: rapStyles.fontType, fontSize: 11, opacity: 0.65 }}>
          © 1932–MMXXVI · Hand-stamped in Brooklyn.
        </div>
      </div>
    </footer>);

}

// =========================== SIGNUP THEME ===========================
const rapSignupTheme = {
  formWrap: { maxWidth: 540, margin: '0 auto' },
  fieldRow: {
    display: 'flex', gap: 0, alignItems: 'stretch',
    border: `3px solid ${rapStyles.ink}`,
    background: rapStyles.paper,
    boxShadow: `6px 6px 0 ${rapStyles.ink}`
  },
  input: {
    flex: 1, minWidth: 0,
    border: 'none', outline: 'none', background: 'transparent',
    padding: '16px 18px',
    fontFamily: rapStyles.fontType, fontSize: 16, color: rapStyles.ink
  },
  button: {
    border: 'none', cursor: 'pointer',
    background: rapStyles.ink, color: rapStyles.mustard,
    fontFamily: rapStyles.fontDisplay, fontSize: 14,
    letterSpacing: 1.5, textTransform: 'uppercase',
    padding: '16px 22px', borderLeft: `3px solid ${rapStyles.ink}`,
    whiteSpace: 'nowrap'
  },
  buttonLabel: 'Sign up →',
  submittingLabel: 'Sending…',
  placeholder: 'your.email@hideout.gov',
  error: {
    marginTop: 12, fontFamily: rapStyles.fontType, fontSize: 13,
    color: rapStyles.paper, background: rapStyles.redDark,
    padding: '6px 12px', display: 'inline-block', letterSpacing: 1
  },
  disclaimer: false,
  successWrap: {
    maxWidth: 540, margin: '0 auto',
    background: rapStyles.paper, color: rapStyles.ink,
    border: `3px solid ${rapStyles.ink}`,
    boxShadow: `6px 6px 0 ${rapStyles.mustard}`,
    padding: '24px 28px'
  },
  successTitle: {
    fontFamily: rapStyles.fontDisplay, fontSize: 24,
    color: rapStyles.red, marginBottom: 8, letterSpacing: 0.5
  },
  successBody: {
    fontFamily: rapStyles.fontType, fontSize: 14, lineHeight: 1.55,
    color: rapStyles.ink
  },
  successTitleText: 'YOU\'RE ON THE LIST.',
  successBodyText: "Filed under “Accomplices.” We'll holler before the Kickstarter drops. Don't tell the Bark Ranger."
};

// =========================== ROOT ===========================
function DirectionRapSheet() {
  return (
    <div style={{ background: rapStyles.paper, fontFamily: rapStyles.fontBody, color: rapStyles.ink }}>
      <RapHero />
      <RapMap />
      <RapPitch />
      <RapCritters />
      <RapMeeples />
      <RapFourCrimes />
      <RapForage />
      <RapHowToPlay />
      <RapBox />
      <RapCTA />
      <RapFooter />
    </div>);

}

window.DirectionRapSheet = DirectionRapSheet;