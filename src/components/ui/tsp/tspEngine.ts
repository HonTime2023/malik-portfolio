export type Point = { lat: number; lng: number };

// Roughly Lagos mainland/island — Ikeja to Lekki, a real, walkable-scale area.
const BOUNDS = { latMin: 6.43, latMax: 6.62, lngMin: 3.28, lngMax: 3.48 };

export function randomPoints(n: number): Point[] {
  return Array.from({ length: n }, () => ({
    lat: BOUNDS.latMin + Math.random() * (BOUNDS.latMax - BOUNDS.latMin),
    lng: BOUNDS.lngMin + Math.random() * (BOUNDS.lngMax - BOUNDS.lngMin),
  }));
}

function dist(a: Point, b: Point) {
  return Math.hypot(a.lat - b.lat, a.lng - b.lng);
}

// Lightweight k-means to split stops across agents — mirrors the real
// multi-agent VRP's "balance workload across agents" objective.
export function clusterPoints(points: Point[], k: number): Point[][] {
  let centroids = points.slice(0, k).map((p) => ({ ...p }));
  let assignments = new Array(points.length).fill(0);

  for (let iter = 0; iter < 8; iter++) {
    assignments = points.map((p) => {
      let best = 0;
      let bestDist = Infinity;
      centroids.forEach((c, i) => {
        const d = dist(p, c);
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
      });
      return best;
    });

    centroids = centroids.map((_, i) => {
      const members = points.filter((_, pi) => assignments[pi] === i);
      if (members.length === 0) return centroids[i];
      return {
        lat: members.reduce((s, p) => s + p.lat, 0) / members.length,
        lng: members.reduce((s, p) => s + p.lng, 0) / members.length,
      };
    });
  }

  const clusters: Point[][] = Array.from({ length: k }, () => []);
  points.forEach((p, i) => clusters[assignments[i]].push(p));
  return clusters.filter((c) => c.length > 0);
}

// Real nearest-neighbour heuristic — same technique as the actual VRP project.
export function nearestNeighbourTour(points: Point[]): Point[] {
  if (points.length === 0) return [];
  const remaining = [...points];
  const tour = [remaining.shift()!];
  while (remaining.length) {
    const last = tour[tour.length - 1];
    let bestIdx = 0;
    let bestDist = Infinity;
    remaining.forEach((p, i) => {
      const d = dist(last, p);
      if (d < bestDist) {
        bestDist = d;
        bestIdx = i;
      }
    });
    tour.push(remaining.splice(bestIdx, 1)[0]);
  }
  return tour;
}

export async function fetchRoadRoute(points: Point[]): Promise<Point[] | null> {
  if (points.length < 2) return points;
  const coords = points.map((p) => `${p.lng},${p.lat}`).join(";");
  try {
    const res = await fetch(
      `https://router.project-osrm.org/route/v1/driving/${coords}?overview=full&geometries=geojson`
    );
    if (!res.ok) return null;
    const data = await res.json();
    const coordinates: [number, number][] | undefined = data?.routes?.[0]?.geometry?.coordinates;
    if (!coordinates) return null;
    return coordinates.map(([lng, lat]) => ({ lat, lng }));
  } catch {
    return null;
  }
}
