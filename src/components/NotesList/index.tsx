import { MainContentProps } from "@/components/MainContent";
import NoteCard from "@/components/NotesList/NoteCard";
import { Note } from "@/types";

type NotesListProps = {
  notes: Note[];
} & MainContentProps;

export default function NotesList({
  notes,
  handleSetNextTick,
}: NotesListProps) {
  return (
    <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {notes.map((n) => (
        <NoteCard key={n.id} {...n} handleSetNextTick={handleSetNextTick} />
      ))}
    </section>
  );
}
