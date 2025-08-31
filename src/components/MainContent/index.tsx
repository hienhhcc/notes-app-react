import EmptyNotesState from "@/components/EmptyNoteState";
import NotesList from "@/components/NotesList";
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

export default function MainContent() {
  const response = use(notesPromise);

  if (response.notes.length === 0) {
    return <EmptyNotesState />;
  }

  return <NotesList notes={response.notes} />;
}
