import { SectionHeading } from "@/components/ui/SectionHeading";
import { TSPMapClient } from "@/components/ui/tsp/TSPMapClient";

export function RouteOptimization() {
  return (
    <section id="route-optimization" className="space-y-8">
      <SectionHeading
        eyebrow="From the Multi-Agent VRP Project"
        title="Real routes, solved live, on real roads."
        description="A working demo of the routing problem behind the Multi-Agent Vehicle Routing project: stops are split across agents, each agent's tour is solved with a nearest-neighbour heuristic, and the roads are real — snapped via OpenStreetMap's routing engine, not straight lines."
      />
      <TSPMapClient />
    </section>
  );
}
