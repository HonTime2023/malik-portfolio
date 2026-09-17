"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Polyline, CircleMarker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { randomPoints, clusterPoints, nearestNeighbourTour, fetchRoadRoute, type Point } from "./tspEngine";

const AGENT_COLORS = ["#f1c40f", "#7fb99a", "#e07a5f", "#81b1d5", "#c77dff", "#f4a259"];
const NUM_STOPS = 42;
const NUM_AGENTS = 6;

type AgentRoute = { stops: Point[]; road: Point[] | null; color: string };

export function TSPMap() {
  const [routes, setRoutes] = useState<AgentRoute[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [cycle, setCycle] = useState(0);

  async function generate() {
    setLoading(true);
    const points = randomPoints(NUM_STOPS);
    const clusters = clusterPoints(points, NUM_AGENTS);
    const tours = clusters.map((c) => nearestNeighbourTour(c));

    const roads = await Promise.all(tours.map((t) => fetchRoadRoute(t)));

    setRoutes(
      tours.map((stops, i) => ({
        stops,
        road: roads[i],
        color: AGENT_COLORS[i % AGENT_COLORS.length],
      }))
    );
    setLoading(false);
  }

  useEffect(() => {
    generate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cycle]);

  const totalStops = routes?.reduce((s, r) => s + r.stops.length, 0) ?? 0;

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs text-brand-muted">
          {loading ? "Solving routes…" : `${routes?.length ?? 0} agents · ${totalStops} stops · real road-snapped routes via OSRM`}
        </p>
        <button
          onClick={() => setCycle((c) => c + 1)}
          disabled={loading}
          className="rounded-full border border-brand-accent px-4 py-1.5 text-xs font-bold text-brand-accent transition-colors hover:bg-brand-accent hover:text-brand-bg disabled:opacity-40"
        >
          {loading ? "Solving…" : "Regenerate Routes"}
        </button>
      </div>

      <div className="h-[480px] overflow-hidden rounded-2xl border border-brand-border">
        <MapContainer
          center={[6.52, 3.38]}
          zoom={11}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%", background: "#04160e" }}
        >
          {/* Free OSM standard tiles, CSS-inverted into a dark theme (no API key needed) */}
          <TileLayer
            className="map-tiles-dark"
            attribution='&copy; OpenStreetMap contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {routes?.map((route, i) => (
            <RouteLayer key={`${cycle}-${i}`} route={route} agentIndex={i} />
          ))}
        </MapContainer>
      </div>
    </div>
  );
}

function RouteLayer({ route, agentIndex }: { route: AgentRoute; agentIndex: number }) {
  const path = route.road ?? route.stops;
  return (
    <>
      <Polyline
        positions={path.map((p) => [p.lat, p.lng])}
        pathOptions={{ color: route.color, weight: 3, opacity: 0.85 }}
      />
      {route.stops.map((p, i) => (
        <CircleMarker
          key={i}
          center={[p.lat, p.lng]}
          radius={i === 0 ? 6 : 4}
          pathOptions={{
            color: route.color,
            fillColor: i === 0 ? route.color : "#04160e",
            fillOpacity: 1,
            weight: 2,
          }}
        >
          <Tooltip direction="top">
            Agent {agentIndex + 1} · Stop {i + 1}
          </Tooltip>
        </CircleMarker>
      ))}
    </>
  );
}
