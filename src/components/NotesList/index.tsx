import NoteCard from "@/components/NotesList/NoteCard";
import { Note } from "@/types";
import { use } from "react";

async function getNotes(): Promise<{ success: boolean; notes: Note[] }> {
  return fetch("http://localhost:3001/notes", { cache: "no-store" }).then(
    (r) => {
      if (!r.ok) {
        throw new Error("Network error");
      }

      return r.json();
    }
  );
}

export const notesPromise = getNotes();

export default function NotesList() {
  const response = use(notesPromise);

  return (
    <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {response.notes.map((n) => (
        <NoteCard key={n.id} {...n} />
      ))}
    </section>
  );
}
