"use client";

const LAYERS = [3, 5, 5, 2];
const WIDTH = 360;
const HEIGHT = 224;

function layerX(layerIdx: number) {
  const gap = WIDTH / (LAYERS.length + 1);
  return gap * (layerIdx + 1);
}

function nodeY(count: number, nodeIdx: number) {
  const gap = HEIGHT / (count + 1);
  return gap * (nodeIdx + 1);
}

export function NeuralNetAnimation() {
  const edges: { x1: number; y1: number; x2: number; y2: number; delay: number }[] = [];
  let delayCounter = 0;

  for (let l = 0; l < LAYERS.length - 1; l++) {
    for (let i = 0; i < LAYERS[l]; i++) {
      for (let j = 0; j < LAYERS[l + 1]; j++) {
        edges.push({
          x1: layerX(l),
          y1: nodeY(LAYERS[l], i),
          x2: layerX(l + 1),
          y2: nodeY(LAYERS[l + 1], j),
          delay: (delayCounter++ % 12) * 0.15,
        });
      }
    }
  }

  return (
    <div className="flex h-56 items-center justify-center rounded-xl bg-brand-bg-soft p-4">
      <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="h-full w-full">
        {edges.map((e, i) => (
          <line
            key={i}
            x1={e.x1}
            y1={e.y1}
            x2={e.x2}
            y2={e.y2}
            stroke="var(--color-brand-border)"
            strokeWidth={1}
          />
        ))}
        {edges.map((e, i) => (
          <circle key={`pulse-${i}`} cx={0} cy={0} r={2.5} fill="var(--color-brand-accent)">
            <animateMotion
              dur="2.4s"
              begin={`${e.delay}s`}
              repeatCount="indefinite"
              path={`M${e.x1},${e.y1} L${e.x2},${e.y2}`}
            />
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              keyTimes="0;0.1;0.85;1"
              dur="2.4s"
              begin={`${e.delay}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
        {LAYERS.map((count, l) =>
          Array.from({ length: count }, (_, i) => (
            <circle
              key={`n-${l}-${i}`}
              cx={layerX(l)}
              cy={nodeY(count, i)}
              r={6}
              fill="var(--color-brand-bg)"
              stroke="var(--color-brand-accent)"
              strokeWidth={1.5}
            />
          ))
        )}
      </svg>
    </div>
  );
}
