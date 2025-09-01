import EmptyNotesState from "@/components/EmptyNoteState";
import NotesList from "@/components/NotesList";
import { Note } from "@/types";
import { use } from "react";

async function getNotes(): Promise<{ success: boolean; notes: Note[] }> {
  const response = await fetch("http://localhost:3001/notes");

  if (!response.ok) {
    throw new Error("Network error");
  }

  return response.json();
}

let current: Promise<{ success: boolean; notes: Note[] }> | null = null;

export function getNotesPromise() {
  if (!current) current = getNotes();

  return current;
}

export function invalidateNotes() {
  current = null;
}

export type MainContentProps = {
  handleSetNextTick: () => void;
};

export default function MainContent({ handleSetNextTick }: MainContentProps) {
  const response = use(getNotesPromise());

  if (response.notes.length === 0) {
    return <EmptyNotesState handleSetNextTick={handleSetNextTick} />;
  }

  return (
    <NotesList notes={response.notes} handleSetNextTick={handleSetNextTick} />
  );
}
