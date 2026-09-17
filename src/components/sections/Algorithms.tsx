"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SortVisualizer } from "@/components/ui/algorithms/SortVisualizer";
import { NeuralNetAnimation } from "@/components/ui/algorithms/NeuralNetAnimation";
import { TSPAnimation } from "@/components/ui/algorithms/TSPAnimation";

const items = [
  {
    title: "Sorting Algorithms",
    desc: "Bubble sort running live — watch it shuffle, compare and settle.",
    render: () => <SortVisualizer />,
  },
  {
    title: "Neural Networks",
    desc: "A forward pass, visualised as signal pulses moving layer to layer.",
    render: () => <NeuralNetAnimation />,
  },
  {
    title: "Optimisation (TSP / VRP)",
    desc: "A real nearest-neighbour tour, redrawn on a fresh set of points every few seconds.",
    render: () => <TSPAnimation />,
  },
];

export function Algorithms() {
  return (
    <section id="algorithms" className="space-y-10">
      <SectionHeading
        eyebrow="How the Models Actually Work"
        title="The algorithms behind the projects, animated."
        description="A growing gallery — graph embeddings, time series, reinforcement learning and RAG are coming next."
      />

      <div className="grid gap-5 md:grid-cols-3">
        {items.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="space-y-3 rounded-2xl border border-brand-border bg-brand-surface/20 p-5"
          >
            {item.render()}
            <div>
              <h3 className="font-heading text-sm font-bold text-brand-text">{item.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-brand-muted">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
