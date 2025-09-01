import NoteContentTextarea from "@/components/AddEditNoteButtonDialog/NoteContentTextarea";
import NoteTitleFormField from "@/components/AddEditNoteButtonDialog/NoteTitleInput";
import SaveNoteButton from "@/components/AddEditNoteButtonDialog/SaveNoteButton";
import { MainContentProps } from "@/components/MainContent";
import { Button } from "@/components/ui/button";
import { EditIcon } from "lucide-react";
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
import { Loader2Icon, PlusIcon } from "lucide-react";
import { ComponentProps, useEffect, useState } from "react";

type AddEditNoteButtonDialogProps = ComponentProps<"button"> &
  MainContentProps & {
    edit?: boolean;
    id?: string;
    title?: string;
    content?: string;
  };

export function AddEditNoteButtonDialog({
  edit = false,
  id,
  title,
  content,
  handleSetNextTick,
  ...props
}: AddEditNoteButtonDialogProps) {
  const [open, setOpen] = useState(false);

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const { isSubmitting, control, methods, onSubmit } = useNoteForm({
    defaultNote: edit ? { id, title, content } : null,
    edit,
    handleCloseDialog,
    handleSetNextTick,
  });

  useEffect(() => {
    if (!open) return; // only when dialog opens
    methods.reset(
      edit
        ? { id, title: title ?? "", content: content ?? "" }
        : { title: "", content: "" }
    );
  }, [content, edit, id, methods, open, title]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {edit ? (
          <Button variant="secondary" size="sm" aria-label="Edit">
            <EditIcon /> Edit
          </Button>
        ) : (
          <Button {...props} disabled={isSubmitting}>
            {isSubmitting ? (
              <Loader2Icon className="animate-spin" />
            ) : (
              <PlusIcon />
            )}
            {props?.children ? props.children : "New note"}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md p-0">
        <Form {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <DialogHeader className="border-b p-4">
              <DialogTitle>{edit ? "Edit note" : "New note"}</DialogTitle>
            </DialogHeader>

            <div className="p-4 flex flex-col gap-4">
              <NoteTitleFormField control={control} />

              <NoteContentTextarea control={control} />
            </div>

            <DialogFooter className="flex justify-between items-center gap-4 border-t p-4">
              <div className="text-sm font-light">
                Tip: ⌘S to save • Esc to close
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
