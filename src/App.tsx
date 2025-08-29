import Header from "@/components/Header";
import NotesList from "@/components/NotesList";
import { useMemo } from "react";

function App() {
  const dummyNotes = useMemo(() => {
    return [
      {
        id: "1",
        title: "hello there",
        content: "dummy note",
        updatedAt: new Date(),
      },
      {
        id: "2",
        title: "hello there",
        content: "dummy note",
        updatedAt: new Date(),
      },
      {
        id: "3",
        title: "hello there",
        content: "dummy note",
        updatedAt: new Date(),
      },
    ];
  }, []);

  return (
    <div className="min-h-dvh">
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-6">
        <NotesList notes={dummyNotes} />
      </main>
    </div>
  );
}

export default App;
