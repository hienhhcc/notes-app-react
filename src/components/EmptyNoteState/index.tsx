import { AddNoteButtonDialog } from "@/components/AddNoteButtonDialog";
import { MainContentProps } from "@/components/MainContent";

export default function EmptyNotesState({
  handleSetNextTick,
}: MainContentProps) {
  return (
    <div className="text-center py-17">
      <h1 className="text-lg font-semibold text-zinc-900">No notes yet</h1>
      <p className="mt-2 mb-4 text-zinc-600">
        Create your first note to get started.
      </p>
      <AddNoteButtonDialog handleSetNextTick={handleSetNextTick}>
        Add a note
      </AddNoteButtonDialog>
    </div>
  );
}
