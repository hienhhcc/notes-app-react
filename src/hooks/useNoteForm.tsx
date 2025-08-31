import { invalidateNotes, MainContentProps } from "@/components/MainContent";
import { API_URL } from "@/environments";
import { NoteFormType, noteSchema } from "@/schemas/note-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";

type UseNoteFormProps = MainContentProps & { handleCloseDialog: () => void };

export default function useNoteForm({
  handleSetNextTick,
  handleCloseDialog,
}: UseNoteFormProps) {
  const methods = useForm<NoteFormType>({
    defaultValues: {
      title: "",
      content: "",
    },
    resolver: zodResolver(noteSchema),
  });

  const { control, formState, handleSubmit } = methods;
  const { isSubmitting } = formState;

  const onSubmit = useCallback(
    async (values: NoteFormType) => {
      try {
        const response = await fetch(`${API_URL}/notes`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...values,
          }),
        });

        if (!response.ok) {
          throw new Error("Some thing wrong when adding note!");
        }

        const json = await response.json();

        if (json.success) {
          invalidateNotes();
          handleSetNextTick();
          handleCloseDialog();
        }
      } catch (err) {
        console.error("Fetch failed", err);
        return null;
      }
    },
    [handleCloseDialog, handleSetNextTick]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "s") {
        e.preventDefault();
        handleSubmit(onSubmit)();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleSubmit, onSubmit]);

  return { control, methods, isSubmitting, onSubmit };
}
