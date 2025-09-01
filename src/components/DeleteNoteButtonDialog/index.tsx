import SaveNoteButton from "@/components/AddEditNoteButtonDialog/SaveNoteButton";
import { invalidateNotes, MainContentProps } from "@/components/MainContent";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { API_URL } from "@/environments";
import { Loader2Icon, TrashIcon } from "lucide-react";
import { useState } from "react";

type DeleteNoteButtonDialogProps = {
  id: string;
} & MainContentProps;

export default function DeleteNoteButtonDialog({
  id,
  handleSetNextTick,
}: DeleteNoteButtonDialogProps) {
  const [open, setOpen] = useState(false);
  const [isDeletingNote, setIsDeletingNote] = useState(false);

  const handleDeleteNote = async () => {
    setIsDeletingNote(true);
    try {
      const response = await fetch(`${API_URL}/notes/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Something went wrong when deleting note!");
      }

      const json = await response.json();

      if (json.success) {
        invalidateNotes();
        handleSetNextTick();
        setOpen(false);
      }
    } catch (err) {
      console.error(err);
      return null;
    } finally {
      setIsDeletingNote(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="destructive" size="sm" aria-label="Delete">
          <TrashIcon /> Delete
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md p-0">
        <DialogHeader className="border-b p-4">
          <DialogTitle>Are you sure you want to delete this note?</DialogTitle>
        </DialogHeader>

        <DialogFooter className="flex justify-between items-center gap-4 p-4 pt-0">
          <div className="text-sm font-light">Tip: Esc to close</div>
          <div className="flex items-center gap-2">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Cancel
              </Button>
            </DialogClose>
            <Button
              variant="destructive"
              onClick={handleDeleteNote}
              disabled={isDeletingNote}
            >
              {isDeletingNote && <Loader2Icon className="animate-spin" />}
              Delete
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
