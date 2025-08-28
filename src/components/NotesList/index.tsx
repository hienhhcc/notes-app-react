import NoteCard from "@/components/NotesList/NoteCard";
import { Note } from "@/types";

type NotesListProps = {
  notes: Pick<Note, "title" | "content" | "updatedAt">[];
};

export default function NotesList({ notes }: NotesListProps) {
  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-3">
      {notes.map((n) => (
        <NoteCard key={JSON.stringify(n)} {...n} />
      ))}
    </section>
  );
}
