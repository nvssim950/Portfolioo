"use client";

/**
 * Animated n8n-style workflow visualization.
 * Pure SVG, no images. Used as the project thumbnail for the automation card.
 */

export type WorkflowNode = {
  id: string;
  x: number;
  y: number;
  label: string;
  sub: string;
};

export type WorkflowEdge = [string, string];

const DEFAULT_NODES: WorkflowNode[] = [
  { id: "trigger", x: 40,  y: 110, label: "Webhook",   sub: "Trigger" },
  { id: "ai",      x: 220, y: 60,  label: "OpenAI",    sub: "Score lead" },
  { id: "filter",  x: 220, y: 170, label: "Filter",    sub: "If qualified" },
  { id: "slack",   x: 410, y: 60,  label: "Slack",     sub: "Notify SDR" },
  { id: "crm",     x: 410, y: 170, label: "HubSpot",   sub: "Create deal" },
];

const DEFAULT_EDGES: WorkflowEdge[] = [
  ["trigger", "ai"],
  ["trigger", "filter"],
  ["ai", "slack"],
  ["filter", "crm"],
];

function pathFor(a: { x: number; y: number }, b: { x: number; y: number }) {
  const ax = a.x + 100;
  const bx = b.x;
  const ay = a.y + 28;
  const by = b.y + 28;
  const cx = (ax + bx) / 2;
  return `M ${ax},${ay} C ${cx},${ay} ${cx},${by} ${bx},${by}`;
}

export function WorkflowViz({
  nodes = DEFAULT_NODES,
  edges = DEFAULT_EDGES,
}: {
  nodes?: WorkflowNode[];
  edges?: WorkflowEdge[];
} = {}) {
  const map = Object.fromEntries(nodes.map((n) => [n.id, n]));
  return (
    <div className="relative h-full w-full">
      <svg
        viewBox="0 0 540 250"
        className="h-full w-full"
        role="img"
        aria-label="n8n workflow diagram"
      >
        <defs>
          <linearGradient id="edge" x1="0" x2="1">
            <stop offset="0%" stopColor="rgba(250,250,250,0.05)" />
            <stop offset="50%" stopColor="rgba(250,250,250,0.5)" />
            <stop offset="100%" stopColor="rgba(250,250,250,0.05)" />
          </linearGradient>
        </defs>

        {edges.map(([from, to], i) => {
          const a = map[from];
          const b = map[to];
          return (
            <g key={i}>
              <path d={pathFor(a, b)} stroke="rgba(255,255,255,0.08)" strokeWidth={1.5} fill="none" />
              <path
                d={pathFor(a, b)}
                stroke="url(#edge)"
                strokeWidth={1.5}
                fill="none"
                className="flow-line"
                style={{ animationDelay: `${i * 0.25}s` }}
              />
            </g>
          );
        })}

        {nodes.map((n) => (
          <g key={n.id} transform={`translate(${n.x}, ${n.y})`}>
            <rect
              width="100"
              height="56"
              rx="10"
              fill="rgba(20,20,20,0.95)"
              stroke="rgba(255,255,255,0.1)"
            />
            <circle cx="14" cy="20" r="5" fill="rgba(250,250,250,0.85)" />
            <text x="28" y="24" fill="#fafafa" fontSize="11" fontFamily="ui-sans-serif" fontWeight={500}>
              {n.label}
            </text>
            <text x="14" y="42" fill="rgba(250,250,250,0.45)" fontSize="9" fontFamily="ui-monospace">
              {n.sub}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
