import { ErrorBoundary } from "@/components/ErrorBoundary";
import Header from "@/components/Header";
import MainContent from "@/components/MainContent";
import { Suspense, useState } from "react";

function App() {
  const [_tick, setTick] = useState(0);

  const handleSetNextTick = () => {
    setTick((t) => t + 1);
  };

  return (
    <div className="min-h-dvh">
      <Header handleSetNextTick={handleSetNextTick} />
      <main className="mx-auto max-w-6xl px-4 py-6">
        <ErrorBoundary>
          <Suspense fallback={"Loading..."}>
            <MainContent handleSetNextTick={handleSetNextTick} />
          </Suspense>
        </ErrorBoundary>
      </main>
    </div>
  );
}

export default App;
