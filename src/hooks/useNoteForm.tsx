import { NoteFormType, noteSchema } from "@/schemas/note-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function useNoteForm() {
  const methods = useForm<NoteFormType>({
    defaultValues: {
      title: "",
      content: "",
    },
    resolver: zodResolver(noteSchema),
  });

  const { control, handleSubmit } = methods;

  const onSubmit = (values: NoteFormType) => {
    console.log(values);
  };

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
  }, []);

  return { control, methods, onSubmit };
}
