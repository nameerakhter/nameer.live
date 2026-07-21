const PANEL_META = [
  { label: 'SCOPE', value: 'GOVT · FINTECH · AI' },
  { label: 'STACK', value: 'UI → API → DATA' },
  { label: 'SCALE', value: '1CR+ USERS' },
] as const

type SlabGeometry = {
  id: 'l0' | 'l1' | 'l2'
  cy: number
  tag: string
  name: string
  checkpoint: string
}

const SLABS: readonly SlabGeometry[] = [
  { id: 'l0', cy: 82, tag: 'L0', name: 'PORTALS', checkpoint: 'RENDER' },
  { id: 'l1', cy: 174, tag: 'L1', name: 'APIS', checkpoint: 'ROUTE' },
  { id: 'l2', cy: 266, tag: 'L2', name: 'LEDGER', checkpoint: 'RECORD' },
] as const

/** Isometric slab: 220×110 rhombus top face + 12px extruded sides. */
function slabPaths(cy: number) {
  return {
    top: `M130 ${cy} L240 ${cy - 55} L350 ${cy} L240 ${cy + 55} Z`,
    left: `M130 ${cy} L240 ${cy + 55} L240 ${cy + 67} L130 ${cy + 12} Z`,
    right: `M240 ${cy + 55} L350 ${cy} L350 ${cy + 12} L240 ${cy + 67} Z`,
    tileWest: `M164 ${cy} L186 ${cy - 11} L208 ${cy} L186 ${cy + 11} Z`,
    tileEast: `M272 ${cy} L294 ${cy - 11} L316 ${cy} L294 ${cy + 11} Z`,
  }
}

export default function HeroVisual() {
  return (
    <figure
      className="pf-hero-panel"
      aria-label="Isometric schematic: a user interaction flows through portal, API, and ledger layers — from render through route and record to live production"
    >
      <div className="pf-hero-panel-meta">
        {PANEL_META.map((item) => (
          <div key={item.label} className="pf-hero-panel-meta-item">
            <span className="pf-hero-panel-meta-label pf-mono">{item.label}</span>
            <span className="pf-hero-panel-meta-value pf-mono">{item.value}</span>
          </div>
        ))}
      </div>

      <div className="pf-hero-panel-canvas" data-hero-svg-slot>
        <svg
          className="pf-hero-panel-svg pf-hero-iso"
          viewBox="0 0 480 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          {/* Drafting marks */}
          <g className="pf-hero-iso-marks">
            <path d="M58 132 H70 M64 126 V138" />
            <path d="M424 64 H436 M430 58 V70" />
          </g>

          {/* Dimension line, right side */}
          <g className="pf-hero-iso-dim">
            <path className="pf-hero-iso-dim-ext" d="M248 27 H392 M248 321 H392" />
            <path className="pf-hero-iso-dim-line" d="M396 27 V321 M392 27 H400 M392 321 H400" />
            <text
              className="pf-hero-iso-dim-label"
              x="410"
              y="174"
              transform="rotate(90 410 174)"
              textAnchor="middle"
            >
              1CR+ USERS · PRODUCTION
            </text>
          </g>

          {/* Floating module cube */}
          <g className="pf-hero-iso-cube">
            <path d="M80 36 L92 30 L104 36 L92 42 Z" className="pf-hero-iso-cube-top" />
            <path d="M80 36 L92 42 L92 51 L80 45 Z" className="pf-hero-iso-cube-left" />
            <path d="M92 42 L104 36 L104 45 L92 51 Z" className="pf-hero-iso-cube-right" />
          </g>

          {/* Slabs, bottom-up in DOM so upper layers paint on top */}
          {[...SLABS].reverse().map((slab) => {
            const p = slabPaths(slab.cy)
            return (
              <g key={slab.id} className={`pf-hero-iso-slab pf-hero-iso-slab--${slab.id}`}>
                <path className="pf-hero-iso-face-left" d={p.left} />
                <path className="pf-hero-iso-face-right" d={p.right} />
                <path className="pf-hero-iso-face-top" d={p.top} />
                <path className="pf-hero-iso-tile" d={p.tileWest} />
                <path
                  className={`pf-hero-iso-tile${slab.id === 'l1' ? ' pf-hero-iso-tile--live' : ''}`}
                  d={p.tileEast}
                />
              </g>
            )
          })}

          {/* Layer tags with leader lines */}
          {SLABS.map((slab) => (
            <g key={slab.id} className={`pf-hero-iso-tag pf-hero-iso-tag--${slab.id}`}>
              <text className="pf-hero-iso-tag-id" x="22" y={slab.cy - 2}>
                {slab.tag}
              </text>
              <text className="pf-hero-iso-tag-name" x="22" y={slab.cy + 10}>
                {slab.name}
              </text>
              <path className="pf-hero-iso-leader" d={`M84 ${slab.cy} H124`} />
            </g>
          ))}

          {/* User flow piercing the stack */}
          <path className="pf-hero-iso-path" d="M240 16 V344" />

          {/* Origin */}
          <g className="pf-hero-iso-checkpoint pf-hero-iso-checkpoint--origin">
            <circle cx="240" cy="16" r="2.5" className="pf-hero-iso-origin-dot" />
            <text className="pf-hero-iso-cp-label" x="250" y="19">
              USER
            </text>
          </g>

          {/* Checkpoints at each layer crossing */}
          {SLABS.map((slab, index) => (
            <g
              key={slab.id}
              className="pf-hero-iso-checkpoint"
              style={{ animationDelay: `${1.05 + index * 0.15}s` }}
            >
              <circle cx="240" cy={slab.cy} r="4" className="pf-hero-iso-cp-dot" />
              <text
                className="pf-hero-iso-cp-label"
                x="240"
                y={slab.cy - 14}
                textAnchor="middle"
              >
                {slab.checkpoint}
              </text>
            </g>
          ))}

          {/* Terminal checkpoint */}
          <g className="pf-hero-iso-checkpoint pf-hero-iso-checkpoint--live">
            <circle cx="240" cy="344" r="4" className="pf-hero-iso-cp-dot" />
            <text className="pf-hero-iso-cp-label" x="250" y="347">
              LIVE
            </text>
          </g>

          {/* Travelling flow packet */}
          <circle className="pf-hero-iso-packet" r="3" />
        </svg>
      </div>

      <figcaption className="pf-hero-panel-caption pf-mono">
        Govt · fintech · AI — shipped in production
      </figcaption>
    </figure>
  )
}
