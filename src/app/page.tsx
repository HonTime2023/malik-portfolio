import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Metrics } from "@/components/sections/Metrics";
import { Capabilities } from "@/components/sections/Capabilities";
import { Algorithms } from "@/components/sections/Algorithms";
import { RouteOptimization } from "@/components/sections/RouteOptimization";
import { Projects } from "@/components/sections/Projects";
import { Research } from "@/components/sections/Research";
import { Experience } from "@/components/sections/Experience";
import { Hobbies } from "@/components/sections/Hobbies";
import { Recommendations } from "@/components/sections/Recommendations";
import { AskAI } from "@/components/sections/AskAI";
import { Connect } from "@/components/sections/Connect";
import { FloatingAI } from "@/components/ui/FloatingAI";
import { ChatProvider } from "@/context/ChatContext";

export default function Home() {
  return (
    <ChatProvider>
      <div className="relative">
        <div className="pointer-events-none fixed inset-0 bg-grid-pattern bg-[size:3rem_3rem] opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_60%,transparent_100%)]" />

        <div className="relative">
          <Navbar />
          <main className="mx-auto max-w-6xl space-y-28 px-6 pb-28">
            <Hero />
            <Metrics />
            <Capabilities />
            <Algorithms />
            <RouteOptimization />
            <Projects />
            <Research />
            <Experience />
            <Hobbies />
            <Recommendations />
            <AskAI />
            <Connect />
          </main>
          <Footer />
        </div>

        <FloatingAI />
      </div>
    </ChatProvider>
  );
}
