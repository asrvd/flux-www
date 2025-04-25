import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "../components/grid";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center p-4 md:p-6 relative overflow-y-hidden">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl md:text-8xl font-serif italic">Flux</h1>
        <p className="text-sm md:text-base lg:text-lg font-sans">
          / mcp server on steroids built for AO and Arweave /
        </p>
      </div>
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-10%] h-[200%] skew-y-12 overflow-hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        )}
      />
    </main>
  );
}
