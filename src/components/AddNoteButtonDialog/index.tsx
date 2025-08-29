import NoteContentTextarea from "@/components/AddNoteButtonDialog/NoteContentTextarea";
import NoteTitleFormField from "@/components/AddNoteButtonDialog/NoteTitleInput";
import SaveNoteButton from "@/components/AddNoteButtonDialog/SaveNoteButton";
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
import { Form } from "@/components/ui/form";
import useNoteForm from "@/hooks/useNoteForm";
import { PlusIcon } from "lucide-react";
import { useEffect, useState } from "react";

export function AddNoteButtonDialog() {
  const { control, methods, onSubmit } = useNoteForm();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      methods.reset();
    }
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <PlusIcon />
          New note
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md p-0">
        <Form {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <DialogHeader className="border-b p-4">
              <DialogTitle>New note</DialogTitle>
            </DialogHeader>

            <div className="p-4 flex flex-col gap-4">
              <NoteTitleFormField control={control} />

              <NoteContentTextarea control={control} />
            </div>

            <DialogFooter className="flex justify-between items-center gap-4 border-t p-4">
              <div className="text-sm font-light">
                Tip: ⌘S to save • Esc to close{" "}
              </div>
              <div className="flex items-center gap-2">
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Cancel
                  </Button>
                </DialogClose>
                <SaveNoteButton />
              </div>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
