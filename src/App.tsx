import { ErrorBoundary } from "@/components/ErrorBoundary";
import Header from "@/components/Header";
import MainContent from "@/components/MainContent";
import NotesList from "@/components/NotesList";
import { Suspense } from "react";

function App() {
  return (
    <div className="min-h-dvh">
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-6">
        <ErrorBoundary>
          <Suspense fallback={"Loading..."}>
            <MainContent />
            {/* <NotesList /> */}
          </Suspense>
        </ErrorBoundary>
      </main>
    </div>
  );
}

export default App;
