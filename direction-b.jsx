// direction-b.jsx — "BURROW BOULEVARD"
// Cozy noir editorial · cream + terracotta + forest + brass gold
// Same content, friendlier storybook treatment

const burrowStyles = {
  cream: '#f5ede0',
  creamDark: '#ebe0cc',
  ink: '#1f1d1a',
  inkSoft: '#3a342c',
  terra: '#c8553d',
  terraDark: '#9a3e2a',
  forest: '#345b3b',
  forestDeep: '#243f29',
  brass: '#c89030',
  cocoa: '#5a3a26',

  fontDisplay: '"Bricolage Grotesque", "DM Serif Display", Georgia, serif',
  fontBody: '"Work Sans", -apple-system, BlinkMacSystemFont, sans-serif',
  fontHand: '"Caveat", "Patrick Hand", cursive',
};

// ============================ NAV ============================
function BurrowNav() {
  return (
    <div style={{
      background: burrowStyles.cream,
      color: burrowStyles.ink,
      borderBottom: `1px solid ${burrowStyles.ink}22`,
      fontFamily: burrowStyles.fontBody,
      position: 'relative',
      zIndex: 5,
    }}>
      <div style={{
        maxWidth: 1180, margin: '0 auto', padding: '20px 32px',
        display: 'flex', alignItems: 'center', gap: 24,
      }}>
        <div style={{
          width: 40, height: 40, borderRadius: '50%',
          background: burrowStyles.forest, color: burrowStyles.cream,
          display: 'grid', placeItems: 'center',
          fontFamily: burrowStyles.fontDisplay, fontSize: 16, fontWeight: 700,
        }}>EL</div>
        <div style={{ fontFamily: burrowStyles.fontDisplay, fontSize: 17, fontWeight: 600, color: burrowStyles.ink }}>
          Ember Leaf Games
        </div>
        <div style={{ flex: 1 }} />
        <nav style={{ display: 'flex', gap: 26, fontSize: 14, fontWeight: 500 }}>
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href} style={{
              color: l.active ? burrowStyles.terra : burrowStyles.inkSoft,
              textDecoration: 'none',
              fontWeight: l.active ? 600 : 500,
            }}>{l.label}</a>
          ))}
          <span style={{ opacity: 0.4 }}>·</span>
          <a href="#" style={{ color: burrowStyles.inkSoft, textDecoration: 'none' }}>Cart (0)</a>
        </nav>
      </div>
    </div>
  );
}

// =========================== HERO ===========================
function BurrowHero() {
  return (
    <section style={{
      background: burrowStyles.cream,
      padding: '64px 32px 80px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Soft radial wash */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `radial-gradient(ellipse at 78% 30%, ${burrowStyles.brass}22, transparent 50%), radial-gradient(ellipse at 18% 80%, ${burrowStyles.forest}11, transparent 55%)`,
        pointerEvents: 'none',
      }} />
      <div style={{ maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 60, alignItems: 'center', position: 'relative' }}>
        {/* Left */}
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: burrowStyles.forest, color: burrowStyles.cream,
            padding: '6px 14px', borderRadius: 999,
            fontFamily: burrowStyles.fontBody, fontSize: 12,
            fontWeight: 600, letterSpacing: 1.8, textTransform: 'uppercase',
            marginBottom: 28,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: burrowStyles.brass }} />
            Launching on Kickstarter · Fall 2026
          </div>

          <h1 style={{
            fontFamily: burrowStyles.fontDisplay,
            fontSize: 92, lineHeight: 0.94,
            color: burrowStyles.ink, margin: '0 0 6px',
            letterSpacing: -2.5, fontWeight: 700,
          }}>
            Critter<br />
            <span style={{
              color: burrowStyles.terra,
              fontStyle: 'italic',
              fontFamily: burrowStyles.fontDisplay,
            }}>Crimes.</span>
          </h1>

          <div style={{
            fontFamily: burrowStyles.fontHand,
            fontSize: 32, color: burrowStyles.cocoa,
            margin: '12px 0 26px',
            transform: 'rotate(-1.5deg)',
            display: 'inline-block',
          }}>
            — welcome to the 6th burrow.
          </div>

          <p style={{
            fontFamily: burrowStyles.fontBody, fontSize: 19,
            lineHeight: 1.55, color: burrowStyles.inkSoft,
            maxWidth: 500, margin: '0 0 32px',
            textWrap: 'pretty',
          }}>
            An <strong>asymmetric board game of cute &amp; cunning</strong> for 2–5 players. Build a critter syndicate, pull off daring jobs in 1930s Central Park, and try not to get caught with your paws full.
          </p>

          <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', marginBottom: 36 }}>
            <a href="#kickstarter" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: burrowStyles.terra, color: burrowStyles.cream,
              fontFamily: burrowStyles.fontBody, fontSize: 16, fontWeight: 600,
              padding: '15px 26px', textDecoration: 'none', borderRadius: 6,
              boxShadow: `0 4px 0 ${burrowStyles.terraDark}`,
            }}>Sign up for updates <span>→</span></a>
            <a href="#how" style={{
              fontFamily: burrowStyles.fontBody, fontSize: 15, fontWeight: 500,
              color: burrowStyles.ink, textDecoration: 'none',
              padding: '15px 18px',
              borderBottom: `2px solid ${burrowStyles.ink}33`,
            }}>How it works ↓</a>
          </div>

          {/* Stats strip */}
          <div style={{ display: 'flex', gap: 32, paddingTop: 24, borderTop: `1px solid ${burrowStyles.ink}22` }}>
            {STATS.map((s, i) => (
              <div key={s.label} style={{
                paddingRight: i < STATS.length - 1 ? 32 : 0,
                borderRight: i < STATS.length - 1 ? `1px solid ${burrowStyles.ink}22` : 'none',
              }}>
                <div style={{ fontFamily: burrowStyles.fontDisplay, fontSize: 28, color: burrowStyles.ink, fontWeight: 600 }}>{s.value}</div>
                <div style={{ fontFamily: burrowStyles.fontBody, fontSize: 12, color: burrowStyles.cocoa, fontWeight: 500, letterSpacing: 0.5, textTransform: 'uppercase' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Owl Capone hero */}
        <div style={{ position: 'relative' }}>
          <div style={{
            background: '#ece2cb',
            borderRadius: 18,
            aspectRatio: '5 / 7',
            border: `1px solid ${burrowStyles.ink}22`,
            boxShadow: `0 30px 60px -20px ${burrowStyles.ink}40`,
            overflow: 'hidden', position: 'relative',
          }}>
            <img src={CRITTERS[0].img} alt="Owl Capone, the Don" style={{
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: '50% 35%',
              display: 'block',
            }} />
          </div>
          {/* Floating accent badges */}
          <div style={{
            position: 'absolute', top: -16, right: -10,
            background: burrowStyles.brass, color: burrowStyles.ink,
            fontFamily: burrowStyles.fontDisplay, fontWeight: 700,
            fontSize: 14, padding: '10px 14px', borderRadius: 999,
            transform: 'rotate(6deg)',
            boxShadow: `0 6px 18px ${burrowStyles.ink}33`,
          }}>★ Meet the Don ★</div>
          <div style={{
            position: 'absolute', bottom: 20, left: -20,
            background: burrowStyles.forest, color: burrowStyles.cream,
            fontFamily: burrowStyles.fontHand, fontSize: 22,
            padding: '8px 18px', borderRadius: 999,
            transform: 'rotate(-3deg)',
            boxShadow: `0 6px 18px ${burrowStyles.ink}33`,
          }}>roll · steal · stash</div>
        </div>
      </div>
    </section>
  );
}

// ============================ MAP ============================
function BurrowMap() {
  return (
    <section style={{
      background: burrowStyles.cream,
      padding: '54px 0 64px',
    }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 32px 24px' }}>
        <div style={{
          fontFamily: burrowStyles.fontBody, fontSize: 12,
          color: burrowStyles.terra, letterSpacing: 3,
          fontWeight: 700, textTransform: 'uppercase', marginBottom: 10,
        }}>The Game Board</div>
        <h2 style={{
          fontFamily: burrowStyles.fontDisplay, fontSize: 44, fontWeight: 700,
          color: burrowStyles.ink, lineHeight: 1, margin: 0, letterSpacing: -1,
        }}>Welcome to <em style={{ color: burrowStyles.terra, fontStyle: 'italic' }}>the neighborhood.</em></h2>
        <p style={{
          fontFamily: burrowStyles.fontBody, fontSize: 16, lineHeight: 1.55,
          color: burrowStyles.inkSoft, margin: '10px 0 0', maxWidth: 720,
        }}>An end-to-end illustrated map of 1930s Central Park — every job, every burrow, every tennis court drawn by hand. This is your playground.</p>
      </div>
      <div style={{ width: '100%', overflow: 'hidden' }}>
        <img
          src="assets/central-park-map.png"
          alt="Central Park game board — a hand-illustrated panoramic map of 1930s Central Park, from West Side to East Side"
          style={{
            width: '100%', height: 'auto', display: 'block',
            boxShadow: `0 24px 60px -28px ${burrowStyles.ink}aa`,
          }}
        />
      </div>
    </section>
  );
}

// =========================== PITCH ===========================
function BurrowPitch() {
  return (
    <section style={{
      background: burrowStyles.forestDeep, color: burrowStyles.cream,
      padding: '80px 32px',
    }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: '0.7fr 1.3fr', gap: 60, alignItems: 'start' }}>
        <div>
          <div style={{
            fontFamily: burrowStyles.fontBody, fontSize: 12,
            color: burrowStyles.brass, letterSpacing: 3,
            textTransform: 'uppercase', fontWeight: 600,
            marginBottom: 14,
          }}>The Pitch</div>
          <div style={{
            fontFamily: burrowStyles.fontHand, fontSize: 38,
            color: burrowStyles.brass, lineHeight: 1.05,
          }}>cute on the<br/>outside,<br/>cunning on<br/>the inside.</div>
        </div>
        <div>
          <p style={{
            fontFamily: burrowStyles.fontDisplay,
            fontSize: 28, lineHeight: 1.35, fontWeight: 500,
            margin: '0 0 22px', color: burrowStyles.cream, textWrap: 'pretty',
          }}>
            The Park is theirs. <em style={{ color: burrowStyles.brass }}>Take it.</em>
          </p>
          <p style={{
            fontFamily: burrowStyles.fontBody, fontSize: 17,
            lineHeight: 1.7, color: '#e6dcc8', margin: 0,
            textWrap: 'pretty',
          }}>{PITCH}</p>
        </div>
      </div>
    </section>
  );
}

// ========================= CRITTERS =========================
function CritterCard({ critter, idx }) {
  const food = critter.food && FOOD_BY_ID[critter.food];
  const res  = critter.resource && RES_BY_ID[critter.resource];
  return (
    <div style={{
      background: burrowStyles.cream,
      borderRadius: 16,
      border: `1.5px solid ${burrowStyles.ink}22`,
      overflow: 'hidden',
      display: 'flex', flexDirection: 'column',
      boxShadow: `0 14px 30px -16px ${burrowStyles.ink}40`,
    }}>
      {/* Portrait — full character art with its own name typography */}
      <div style={{
        background: '#ece2cb',
        aspectRatio: '5 / 7',
        position: 'relative',
        borderBottom: `1.5px solid ${burrowStyles.ink}22`,
        overflow: 'hidden',
      }}>
        <img src={critter.img} alt={critter.name} style={{
          width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: '50% 40%',
          display: 'block',
        }} />
        <div style={{
          position: 'absolute', top: 14, right: 14,
          background: burrowStyles.cream, color: burrowStyles.ink,
          fontFamily: burrowStyles.fontBody, fontSize: 11,
          fontWeight: 600, letterSpacing: 1.5,
          padding: '4px 10px', borderRadius: 999,
          border: `1px solid ${burrowStyles.ink}22`,
        }}>{critter.case}</div>
      </div>

      {/* Body */}
      <div style={{ padding: '20px 22px 22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{
          fontFamily: burrowStyles.fontBody, fontSize: 13,
          color: critter.accent || burrowStyles.terra, fontWeight: 600,
          marginBottom: 12,
        }}>{critter.species}</div>

        <div style={{
          background: `${burrowStyles.brass}1f`,
          padding: '10px 14px', borderRadius: 10,
          marginBottom: 14, borderLeft: `3px solid ${burrowStyles.brass}`,
        }}>
          <div style={{ fontFamily: burrowStyles.fontBody, fontSize: 11, fontWeight: 700, color: burrowStyles.cocoa, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 4 }}>Ability · {critter.ability}</div>
          <div style={{ fontFamily: burrowStyles.fontBody, fontSize: 13.5, color: burrowStyles.inkSoft, lineHeight: 1.55 }}>{critter.abilityText}</div>
        </div>

        {/* Preferences */}
        {(food || res) && (
          <div style={{
            display: 'flex', gap: 10, marginBottom: 14,
          }}>
            {food && (
              <div style={{
                flex: 1, display: 'flex', alignItems: 'center', gap: 8,
                background: burrowStyles.cream,
                border: `1px solid ${burrowStyles.ink}22`,
                padding: '6px 10px', borderRadius: 8, minWidth: 0,
              }}>
                <img src={food.icon} alt={food.name} style={{ width: 30, height: 30, flexShrink: 0 }} />
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontFamily: burrowStyles.fontBody, fontSize: 9.5, fontWeight: 700, color: burrowStyles.cocoa, letterSpacing: 1.2, textTransform: 'uppercase' }}>Loves</div>
                  <div style={{ fontFamily: burrowStyles.fontDisplay, fontSize: 14, color: burrowStyles.ink, fontWeight: 600, lineHeight: 1 }}>{food.name}</div>
                </div>
              </div>
            )}
            {res && (
              <div style={{
                flex: 1, display: 'flex', alignItems: 'center', gap: 8,
                background: burrowStyles.cream,
                border: `1px solid ${burrowStyles.ink}22`,
                padding: '6px 10px', borderRadius: 8, minWidth: 0,
              }}>
                <img src={res.icon} alt={res.name} style={{ width: 30, height: 30, flexShrink: 0 }} />
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontFamily: burrowStyles.fontBody, fontSize: 9.5, fontWeight: 700, color: burrowStyles.cocoa, letterSpacing: 1.2, textTransform: 'uppercase' }}>Builds</div>
                  <div style={{ fontFamily: burrowStyles.fontDisplay, fontSize: 14, color: burrowStyles.ink, fontWeight: 600, lineHeight: 1 }}>{res.name}</div>
                </div>
              </div>
            )}
          </div>
        )}

        <div style={{
          marginTop: 'auto', paddingTop: 12,
          borderTop: `1px dashed ${burrowStyles.ink}33`,
          fontFamily: burrowStyles.fontHand, fontSize: 17,
          color: burrowStyles.cocoa, lineHeight: 1.3,
        }}>
          <em style={{ color: burrowStyles.terraDark, fontStyle: 'normal' }}>rap sheet:</em> {critter.rap}
        </div>
      </div>
    </div>
  );
}

function BurrowCritters() {
  return (
    <section style={{ background: burrowStyles.cream, padding: '90px 32px 100px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <BurrowSectionHeader
          eyebrow="The Suspects"
          title={<>Meet the <em style={{ color: burrowStyles.terra, fontStyle: 'italic' }}>furr-tive few.</em></>}
          sub="Five asymmetric critters with unique abilities, conflicting goals, and worse manners. Pick your scoundrel."
        />
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24,
        }}>
          {CRITTERS.slice(0, 3).map((c, i) => <CritterCard key={c.case} critter={c} idx={i} />)}
        </div>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24,
          marginTop: 24, padding: '0 17%',
        }}>
          {CRITTERS.slice(3).map((c, i) => <CritterCard key={c.case} critter={c} idx={i + 3} />)}
        </div>
      </div>
    </section>
  );
}

// ======================== MEEPLES ========================
function BurrowMeeples() {
  return (
    <section style={{ background: burrowStyles.creamDark, padding: '90px 32px 100px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.35fr 1fr', gap: 56, alignItems: 'center' }}>
        <div style={{
          position: 'relative',
          borderRadius: 22,
          overflow: 'hidden',
          boxShadow: `0 30px 60px -28px ${burrowStyles.ink}66, 0 8px 22px -10px ${burrowStyles.ink}33`,
          border: `1.5px solid ${burrowStyles.ink}1a`,
        }}>
          <img src="assets/meeples-group.jpg" alt="The six Critter Crimes wooden meeples gathered in Central Park" style={{
            width: '100%', height: 'auto', display: 'block',
          }} />
          <div style={{
            position: 'absolute', bottom: 18, left: 18,
            background: burrowStyles.cream, color: burrowStyles.ink,
            fontFamily: burrowStyles.fontBody, fontSize: 11, fontWeight: 700,
            padding: '6px 12px', borderRadius: 999,
            letterSpacing: 1.5, textTransform: 'uppercase',
            boxShadow: `0 4px 12px ${burrowStyles.ink}33`,
          }}>The Whole Gang · 6 Meeples</div>
        </div>
        <div>
          <BurrowSectionHeader
            eyebrow="The Lineup"
            title={<>Tiny wooden <em style={{ color: burrowStyles.terra, fontStyle: 'italic' }}>tough guys.</em></>}
            sub="Every critter — and the Bark Ranger himself — comes as a chunky hardwood meeple, hand-screened with two-color art. Six little wooden mob-bosses that stand tall on the board (and look real cute by the cribbage set)."
          />
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14,
          }}>
            {[
              { label: 'Critters', value: '5', sub: 'one per player' },
              { label: 'Antagonist', value: '1', sub: 'the Bark Ranger' },
              { label: 'Material', value: 'Maple', sub: 'solid hardwood' },
              { label: 'Print', value: '2-color', sub: 'silkscreened by hand' },
            ].map((d) => (
              <div key={d.label} style={{
                background: burrowStyles.cream,
                borderRadius: 14,
                padding: '14px 16px',
                border: `1.5px solid ${burrowStyles.ink}1a`,
              }}>
                <div style={{
                  fontFamily: burrowStyles.fontBody, fontSize: 11, fontWeight: 700,
                  color: burrowStyles.cocoa, letterSpacing: 1.4,
                  textTransform: 'uppercase', marginBottom: 4,
                }}>{d.label}</div>
                <div style={{
                  fontFamily: burrowStyles.fontDisplay, fontSize: 22, fontWeight: 700,
                  color: burrowStyles.ink, letterSpacing: -0.5, lineHeight: 1, marginBottom: 4,
                }}>{d.value}</div>
                <div style={{
                  fontFamily: burrowStyles.fontBody, fontSize: 12.5,
                  color: burrowStyles.inkSoft,
                }}>{d.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ======================== FOUR CRIMES ========================
function BurrowFourCrimes() {
  return (
    <section style={{
      background: burrowStyles.forestDeep, color: burrowStyles.cream,
      padding: '90px 32px 100px',
    }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <BurrowSectionHeader
          eyebrow="The Mechanics"
          title={<>Four crimes. <em style={{ color: burrowStyles.brass, fontStyle: 'italic' }}>Endless trouble.</em></>}
          sub="Spend a bottlecap each turn to take one of four actions. Stack them right and the Park is yours; stack them wrong and you'll be sharing a cell with a beetle."
          dark
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
          {ACTIONS.map((a, i) => (
            <div key={a.id} style={{
              background: burrowStyles.cream, color: burrowStyles.ink,
              borderRadius: 16, padding: '22px 20px 24px',
              position: 'relative', overflow: 'hidden',
              display: 'flex', flexDirection: 'column',
            }}>
              <div style={{ position: 'absolute', top: -28, right: -28, opacity: 0.18 }}>
                <img src={a.cap} alt="" style={{ width: 130, height: 130 }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14, position: 'relative' }}>
                <img src={a.cap} alt={a.name} style={{ width: 48, height: 48, filter: `drop-shadow(0 4px 10px ${burrowStyles.ink}33)`, flexShrink: 0 }} />
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontFamily: burrowStyles.fontBody, fontSize: 10, fontWeight: 700, color: a.accent, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 2 }}>Action 0{i+1}</div>
                  <h3 style={{ fontFamily: burrowStyles.fontDisplay, fontSize: 24, fontWeight: 700, color: burrowStyles.ink, margin: 0, letterSpacing: -0.5, lineHeight: 1 }}>{a.name}</h3>
                </div>
              </div>
              {/* Card art — the hero */}
              <div style={{
                borderRadius: 10, overflow: 'hidden',
                background: burrowStyles.creamDark,
                boxShadow: `0 8px 24px ${burrowStyles.ink}33, 0 2px 6px ${burrowStyles.ink}22`,
                marginBottom: 14, position: 'relative',
                border: `1px solid ${burrowStyles.ink}1a`,
              }}>
                <img src={a.card} alt={`${a.cardName} card`} style={{
                  width: '100%', height: 'auto', display: 'block',
                }} />
              </div>
              <div style={{
                fontFamily: burrowStyles.fontDisplay, fontSize: 17, fontWeight: 700,
                color: burrowStyles.ink, lineHeight: 1.1, marginBottom: 8,
              }}>{a.cardName}</div>
              <div style={{ fontFamily: burrowStyles.fontHand, fontSize: 19, color: burrowStyles.cocoa, marginBottom: 8 }}>“{a.tagline}”</div>
              <p style={{ fontFamily: burrowStyles.fontBody, fontSize: 13, lineHeight: 1.55, color: burrowStyles.inkSoft, margin: 0, position: 'relative' }}>{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ======================== FORAGE ========================
function BurrowForage() {
  return (
    <section style={{ background: burrowStyles.creamDark, padding: '90px 32px 100px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <BurrowSectionHeader
          eyebrow="Central Park's Bounty"
          title={<>Forage by day. <em style={{ color: burrowStyles.terra, fontStyle: 'italic' }}>Stash by night.</em></>}
          sub="Five foods power your dice. Five resources build your burrow. Each critter favors a different cuisine — and a different way to feather the nest."
        />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <div style={{
            background: burrowStyles.cream, borderRadius: 16,
            padding: '28px 28px 24px',
            border: `1.5px solid ${burrowStyles.ink}1a`,
          }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 18 }}>
              <div style={{ fontFamily: burrowStyles.fontDisplay, fontSize: 22, fontWeight: 700, color: burrowStyles.ink, letterSpacing: -0.5 }}>Food</div>
              <div style={{ flex: 1, borderTop: `1px dashed ${burrowStyles.ink}44`, position: 'relative', top: -4 }} />
              <div style={{ fontFamily: burrowStyles.fontBody, fontSize: 11, color: burrowStyles.cocoa, fontWeight: 600, letterSpacing: 1.2, textTransform: 'uppercase' }}>fuels dice</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 10 }}>
              {FOODS.map(f => (
                <div key={f.id} style={{ textAlign: 'center' }}>
                  <img src={f.icon} alt={f.name} style={{ width: '100%', maxWidth: 84, height: 'auto', display: 'block', margin: '0 auto 6px' }} />
                  <div style={{ fontFamily: burrowStyles.fontBody, fontSize: 12, color: burrowStyles.ink, fontWeight: 600 }}>{f.name}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{
            background: burrowStyles.cream, borderRadius: 16,
            padding: '28px 28px 24px',
            border: `1.5px solid ${burrowStyles.ink}1a`,
          }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 18 }}>
              <div style={{ fontFamily: burrowStyles.fontDisplay, fontSize: 22, fontWeight: 700, color: burrowStyles.ink, letterSpacing: -0.5 }}>Resources</div>
              <div style={{ flex: 1, borderTop: `1px dashed ${burrowStyles.ink}44`, position: 'relative', top: -4 }} />
              <div style={{ fontFamily: burrowStyles.fontBody, fontSize: 11, color: burrowStyles.cocoa, fontWeight: 600, letterSpacing: 1.2, textTransform: 'uppercase' }}>builds burrow</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 10 }}>
              {RESOURCES.map(r => (
                <div key={r.id} style={{ textAlign: 'center' }}>
                  <img src={r.icon} alt={r.name} style={{ width: '100%', maxWidth: 84, height: 'auto', display: 'block', margin: '0 auto 6px' }} />
                  <div style={{ fontFamily: burrowStyles.fontBody, fontSize: 12, color: burrowStyles.ink, fontWeight: 600 }}>{r.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===================== SECTION HEADER =====================
function BurrowSectionHeader({ eyebrow, title, sub, dark }) {
  return (
    <div style={{ marginBottom: 56, maxWidth: 760 }}>
      <div style={{
        fontFamily: burrowStyles.fontBody, fontSize: 12,
        color: dark ? burrowStyles.brass : burrowStyles.terra,
        letterSpacing: 3, fontWeight: 600,
        textTransform: 'uppercase', marginBottom: 14,
      }}>{eyebrow}</div>
      <h2 style={{
        fontFamily: burrowStyles.fontDisplay,
        fontSize: 56, lineHeight: 1.0, fontWeight: 700,
        color: dark ? burrowStyles.cream : burrowStyles.ink,
        margin: '0 0 16px', letterSpacing: -1.5,
        textWrap: 'pretty',
      }}>{title}</h2>
      {sub && <p style={{
        fontFamily: burrowStyles.fontBody, fontSize: 18,
        lineHeight: 1.55, color: dark ? '#dccfb6' : burrowStyles.inkSoft,
        margin: 0, maxWidth: 600, textWrap: 'pretty',
      }}>{sub}</p>}
    </div>
  );
}

// ======================= HOW TO PLAY =======================
function BurrowHowToPlay() {
  return (
    <section id="how" style={{
      background: burrowStyles.creamDark,
      padding: '90px 32px 100px',
      position: 'relative',
    }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <BurrowSectionHeader
          eyebrow="How to Play"
          title={<>By day, you <em style={{ color: burrowStyles.terra, fontStyle: 'italic' }}>scheme.</em> By night, you <em style={{ color: burrowStyles.terra, fontStyle: 'italic' }}>strike.</em></>}
          sub="Each round splits between Day and Night. Daytime is for exploring and harvesting. Nighttime is for recruits, laundering dice into points, and praying the Ranger's on his break."
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {PHASES.map((phase) => (
            <div key={phase.id} style={{
              borderRadius: 20, overflow: 'hidden',
              border: `1.5px solid ${burrowStyles.ink}22`,
              background: phase.id === 'day' ? burrowStyles.cream : burrowStyles.ink,
              color: phase.id === 'day' ? burrowStyles.ink : burrowStyles.cream,
            }}>
              {/* Phase banner */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: 22,
                padding: '24px 32px',
                background: phase.id === 'day' ? `${burrowStyles.brass}1f` : 'transparent',
                borderBottom: `1.5px solid ${phase.id === 'day' ? burrowStyles.ink + '22' : burrowStyles.cream + '22'}`,
              }}>
                <img src={phase.icon} alt={phase.name} style={{
                  width: 80, height: 80, flexShrink: 0,
                  filter: phase.id === 'night' ? 'drop-shadow(0 0 14px rgba(216,156,68,0.5))' : 'none',
                }} />
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontFamily: burrowStyles.fontBody, fontSize: 11, fontWeight: 700,
                    color: phase.id === 'day' ? burrowStyles.cocoa : burrowStyles.brass,
                    letterSpacing: 3, textTransform: 'uppercase', marginBottom: 4,
                  }}>{phase.id === 'day' ? '☀ Daytime Phase' : '☾ Nighttime Phase'}</div>
                  <div style={{ fontFamily: burrowStyles.fontDisplay, fontSize: 38, fontWeight: 700, lineHeight: 1, letterSpacing: -1, marginBottom: 6 }}>{phase.name}</div>
                  <div style={{ fontFamily: burrowStyles.fontBody, fontSize: 15, lineHeight: 1.5, maxWidth: 720, opacity: 0.9 }}>{phase.intro}</div>
                </div>
                <div style={{
                  fontFamily: burrowStyles.fontHand, fontSize: 26,
                  color: phase.id === 'day' ? burrowStyles.terra : burrowStyles.brass,
                  transform: 'rotate(-3deg)', flexShrink: 0,
                }}>“{phase.pun}”</div>
              </div>

              {/* Actions for this phase */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1, background: phase.id === 'day' ? burrowStyles.ink + '11' : burrowStyles.cream + '11' }}>
                {ACTIONS_BY_PHASE[phase.id].map((a) => (
                  <div key={a.id} style={{
                    background: phase.id === 'day' ? burrowStyles.cream : burrowStyles.ink,
                    padding: '24px 28px',
                    display: 'grid', gridTemplateColumns: '80px 1fr', gap: 18, alignItems: 'center',
                  }}>
                    <img src={a.cap} alt={a.name} style={{ width: 80, height: 80, filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.25))' }} />
                    <div>
                      <h3 style={{
                        fontFamily: burrowStyles.fontDisplay, fontSize: 24, fontWeight: 700,
                        margin: '0 0 4px', letterSpacing: -0.5, lineHeight: 1,
                        color: phase.id === 'day' ? burrowStyles.ink : burrowStyles.cream,
                      }}>{a.name}</h3>
                      <div style={{
                        fontFamily: burrowStyles.fontHand, fontSize: 20,
                        color: phase.id === 'day' ? burrowStyles.cocoa : burrowStyles.brass,
                        marginBottom: 6,
                      }}>“{a.tagline}”</div>
                      <p style={{
                        fontFamily: burrowStyles.fontBody, fontSize: 13.5, lineHeight: 1.55,
                        margin: 0,
                        color: phase.id === 'day' ? burrowStyles.inkSoft : '#d4c9b3',
                      }}>{a.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bark Ranger callout */}
        <div style={{
          marginTop: 36,
          background: burrowStyles.ink, color: burrowStyles.cream,
          borderRadius: 16, overflow: 'hidden',
          display: 'grid', gridTemplateColumns: '220px 1fr',
          alignItems: 'stretch',
        }}>
          <div style={{ background: '#ece2cb', position: 'relative', overflow: 'hidden', minHeight: 220 }}>
            <img src={BARK_RANGER.img} alt="Bark Ranger" style={{
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: '50% 30%',
              display: 'block',
            }} />
            <div style={{
              position: 'absolute', bottom: 12, left: 12,
              background: burrowStyles.brass, color: burrowStyles.ink,
              fontFamily: burrowStyles.fontBody, fontSize: 10,
              fontWeight: 700, letterSpacing: 1.5,
              padding: '4px 10px', borderRadius: 4,
            }}>K-9 DIVISION</div>
          </div>
          <div style={{ padding: '28px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8 }}>
            <div style={{
              fontFamily: burrowStyles.fontBody, fontSize: 11,
              color: burrowStyles.brass, letterSpacing: 3,
              fontWeight: 700, textTransform: 'uppercase',
            }}>The Antagonist</div>
            <div style={{ fontFamily: burrowStyles.fontDisplay, fontSize: 28, fontWeight: 700, letterSpacing: -0.5 }}>Beware the Bark Ranger.</div>
            <div style={{ fontFamily: burrowStyles.fontBody, fontSize: 15, color: '#d4c9b3', lineHeight: 1.55, marginTop: 4 }}>{BARK_RANGER.blurb}</div>
            <div style={{
              fontFamily: burrowStyles.fontHand, fontSize: 22,
              color: burrowStyles.brass, marginTop: 6,
              transform: 'rotate(-2deg)', display: 'inline-block', alignSelf: 'flex-start',
            }}>“good boy.” — nobody</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ========================== BOX ==========================
function BurrowBox() {
  return (
    <section style={{ background: burrowStyles.cream, padding: '90px 32px 100px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
        <div>
          <BurrowSectionHeader
            eyebrow="What's in the Box"
            title={<>Everything but the <em style={{ color: burrowStyles.terra, fontStyle: 'italic' }}>alibi.</em></>}
            sub="A heavy box packed with custom dice, asymmetric boards, and enough cardboard to bury the evidence."
          />
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontFamily: burrowStyles.fontBody }}>
            {BOX_CONTENTS.map((b, i) => (
              <li key={i} style={{
                display: 'grid',
                gridTemplateColumns: '64px 1fr auto',
                gap: 16, alignItems: 'center',
                padding: '16px 0',
                borderBottom: i < BOX_CONTENTS.length - 1 ? `1px solid ${burrowStyles.ink}1a` : 'none',
              }}>
                <div style={{
                  fontFamily: burrowStyles.fontDisplay, fontSize: 26,
                  color: burrowStyles.terra, fontWeight: 700, letterSpacing: -0.5,
                }}>×{b.qty}</div>
                <div style={{ fontSize: 16, color: burrowStyles.ink, lineHeight: 1.35 }}>{b.item}</div>
                {b.tag && <div style={{
                  fontFamily: burrowStyles.fontBody, fontSize: 11,
                  color: burrowStyles.cocoa, fontWeight: 600,
                  letterSpacing: 0.8, textTransform: 'uppercase',
                  background: `${burrowStyles.brass}22`,
                  padding: '4px 9px', borderRadius: 4,
                }}>{b.tag}</div>}
              </li>
            ))}
          </ul>
        </div>

        {/* Image grid placeholder */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: 'repeat(3, 160px)', gap: 14 }}>
          <div style={{
            gridColumn: '1 / -1', gridRow: 'span 2',
            background: stripeBg(burrowStyles.forest, burrowStyles.forestDeep, 42),
            borderRadius: 14, border: `1.5px solid ${burrowStyles.ink}22`,
            display: 'grid', placeItems: 'center', position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ background: burrowStyles.cream, padding: '12px 18px', borderRadius: 6, fontFamily: 'ui-monospace, monospace', fontSize: 12, color: burrowStyles.ink }}>[ BOARD · TOP-DOWN ]</div>
          </div>
          {[
            { label: 'DICE · 35ct', bg: stripeBg(burrowStyles.terra, burrowStyles.terraDark, 30) },
            { label: 'CARDS · 90+', bg: stripeBg(burrowStyles.brass, '#a87420', 30) },
          ].map((cell) => (
            <div key={cell.label} style={{
              background: cell.bg,
              borderRadius: 14, border: `1.5px solid ${burrowStyles.ink}22`,
              display: 'grid', placeItems: 'center',
            }}>
              <div style={{ background: burrowStyles.cream, padding: '8px 14px', borderRadius: 5, fontFamily: 'ui-monospace, monospace', fontSize: 11, color: burrowStyles.ink }}>{cell.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================ CTA ============================
function BurrowCTA() {
  return (
    <section id="kickstarter" style={{
      background: burrowStyles.terra, color: burrowStyles.cream,
      padding: '96px 32px 104px', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: stripeBg('rgba(245,237,224,0.05)', 'transparent', 135),
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '20%', right: -40,
        fontFamily: burrowStyles.fontHand, fontSize: 220,
        color: burrowStyles.terraDark, opacity: 0.4,
        transform: 'rotate(-8deg)', lineHeight: 1, userSelect: 'none',
      }}>$</div>

      <div style={{ maxWidth: 880, margin: '0 auto', position: 'relative' }}>
        <div style={{
          fontFamily: burrowStyles.fontBody, fontSize: 12,
          color: burrowStyles.brass, letterSpacing: 4,
          fontWeight: 700, textTransform: 'uppercase', marginBottom: 18,
        }}>Coming to Kickstarter</div>
        <h2 style={{
          fontFamily: burrowStyles.fontDisplay, fontSize: 80,
          lineHeight: 0.96, fontWeight: 700, letterSpacing: -2,
          margin: '0 0 22px', maxWidth: 740,
        }}>Join the syndicate.<br /><em style={{ fontStyle: 'italic', color: burrowStyles.cream, opacity: 0.85 }}>The first round's on us.</em></h2>
        <p style={{
          fontFamily: burrowStyles.fontBody, fontSize: 19,
          lineHeight: 1.55, color: '#f7e9d5',
          maxWidth: 580, margin: '0 0 32px', textWrap: 'pretty',
        }}>Get on the list. We'll holler the moment the Kickstarter drops — with early-bird pricing, a deluxe edition, exclusive critter promos, and the warm fuzzy feeling that comes from aiding &amp; abetting.</p>

        <EmailSignup source="critter-crimes-B" theme={burrowSignupTheme} />

        <div style={{
          marginTop: 48, paddingTop: 28,
          borderTop: `1px solid ${burrowStyles.cream}33`,
          display: 'flex', gap: 36, flexWrap: 'wrap',
          fontFamily: burrowStyles.fontBody, fontSize: 14, color: '#f7e9d5',
        }}>
          <div><strong style={{ color: burrowStyles.brass }}>★</strong> Early-bird $49</div>
          <div><strong style={{ color: burrowStyles.brass }}>★</strong> Deluxe metal coins</div>
          <div><strong style={{ color: burrowStyles.brass }}>★</strong> Stretch goal critters</div>
          <div><strong style={{ color: burrowStyles.brass }}>★</strong> Worldwide shipping</div>
        </div>
      </div>
    </section>
  );
}

// =========================== FOOTER ===========================
function BurrowFooter() {
  return (
    <footer style={{
      background: burrowStyles.ink, color: '#d4c9b3',
      padding: '52px 32px 32px',
      fontFamily: burrowStyles.fontBody,
    }}>
      <div style={{
        maxWidth: 1180, margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 40,
      }}>
        <div>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14,
          }}>
            <div style={{
              width: 32, height: 32, borderRadius: '50%',
              background: burrowStyles.forest, color: burrowStyles.cream,
              display: 'grid', placeItems: 'center',
              fontFamily: burrowStyles.fontDisplay, fontWeight: 700, fontSize: 14,
            }}>EL</div>
            <div style={{ fontFamily: burrowStyles.fontDisplay, fontWeight: 700, color: burrowStyles.cream, fontSize: 17 }}>Ember Leaf Games</div>
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.6, margin: 0, maxWidth: 320 }}>
            Indie board games handcrafted in Brooklyn. Designers of <em>Fame &amp; Fortune</em> and <em>Critter Crimes</em>.
          </p>
        </div>
        <div>
          <div style={{ fontFamily: burrowStyles.fontDisplay, fontWeight: 700, color: burrowStyles.cream, fontSize: 14, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 14 }}>Explore</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14 }}>
            <a href="#" style={{ color: '#d4c9b3', textDecoration: 'none' }}>Critter Crimes</a>
            <a href="#" style={{ color: '#d4c9b3', textDecoration: 'none' }}>Fame &amp; Fortune</a>
            <a href="#" style={{ color: '#d4c9b3', textDecoration: 'none' }}>The Leaflets Blog</a>
            <a href="#" style={{ color: '#d4c9b3', textDecoration: 'none' }}>Playtesting</a>
          </div>
        </div>
        <div>
          <div style={{ fontFamily: burrowStyles.fontDisplay, fontWeight: 700, color: burrowStyles.cream, fontSize: 14, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 14 }}>Follow</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14 }}>
            <a href="#" style={{ color: '#d4c9b3', textDecoration: 'none' }}>Instagram</a>
            <a href="#" style={{ color: '#d4c9b3', textDecoration: 'none' }}>Facebook Group</a>
            <a href="#" style={{ color: '#d4c9b3', textDecoration: 'none' }}>BoardGameGeek</a>
            <a href="#" style={{ color: '#d4c9b3', textDecoration: 'none' }}>emberleafgames@gmail.com</a>
          </div>
        </div>
      </div>
      <div style={{
        maxWidth: 1180, margin: '48px auto 0', paddingTop: 24,
        borderTop: `1px solid ${burrowStyles.cream}1a`,
        display: 'flex', justifyContent: 'space-between',
        fontSize: 12, color: '#9a8e76', flexWrap: 'wrap', gap: 14,
      }}>
        <div>© 2026 Ember Leaf Games LLC · Brooklyn, NY</div>
        <div style={{ fontFamily: burrowStyles.fontHand, fontSize: 18, color: burrowStyles.brass }}>made with paws &amp; patience.</div>
      </div>
    </footer>
  );
}

// =========================== SIGNUP THEME ===========================
const burrowSignupTheme = {
  formWrap: { maxWidth: 560 },
  fieldRow: {
    display: 'flex', gap: 0, alignItems: 'stretch',
    background: burrowStyles.cream,
    borderRadius: 10,
    overflow: 'hidden',
    boxShadow: `0 12px 30px -10px ${burrowStyles.ink}66`,
  },
  input: {
    flex: 1, minWidth: 0,
    border: 'none', outline: 'none', background: 'transparent',
    padding: '17px 20px',
    fontFamily: burrowStyles.fontBody, fontSize: 16, color: burrowStyles.ink,
  },
  button: {
    border: 'none', cursor: 'pointer',
    background: burrowStyles.ink, color: burrowStyles.brass,
    fontFamily: burrowStyles.fontBody, fontSize: 15, fontWeight: 600,
    padding: '17px 24px', whiteSpace: 'nowrap',
  },
  buttonLabel: 'Sign up →',
  submittingLabel: 'Sending…',
  placeholder: 'your.email@hideout.gov',
  error: {
    marginTop: 10, fontFamily: burrowStyles.fontBody, fontSize: 13,
    color: burrowStyles.brass, fontWeight: 600,
  },
  successWrap: {
    maxWidth: 560,
    background: burrowStyles.cream, color: burrowStyles.ink,
    borderRadius: 14, padding: '24px 28px',
    boxShadow: `0 14px 36px -12px ${burrowStyles.ink}80`,
  },
  successTitle: {
    fontFamily: burrowStyles.fontDisplay, fontSize: 28, fontWeight: 700,
    color: burrowStyles.terra, marginBottom: 6, letterSpacing: -0.5,
  },
  successBody: {
    fontFamily: burrowStyles.fontBody, fontSize: 15, lineHeight: 1.55,
    color: burrowStyles.inkSoft,
  },
  successTitleText: "You're on the list.",
  successBodyText: "Filed under ‘accomplices.’ We'll holler before the Kickstarter drops — and we won't tell the Bark Ranger you signed up.",
};

// =========================== ROOT ===========================
function DirectionBurrowBlvd() {
  return (
    <div style={{ background: burrowStyles.cream, fontFamily: burrowStyles.fontBody, color: burrowStyles.ink }}>
      <BurrowHero />
      <BurrowMap />
      <BurrowPitch />
      <BurrowCritters />
      <BurrowMeeples />
      <BurrowFourCrimes />
      <BurrowForage />
      <BurrowHowToPlay />
      <BurrowBox />
      <BurrowCTA />
      <BurrowFooter />
    </div>
  );
}

window.DirectionBurrowBlvd = DirectionBurrowBlvd;
