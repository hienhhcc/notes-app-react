import { API_URL } from "@/environments";
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

  const onSubmit = async (values: NoteFormType) => {
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
        alert("add note success");
      }
    } catch (err) {
      console.error("Fetch failed", err);
      return null;
    }
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
  }, [handleSubmit]);

  return { control, methods, onSubmit };
}
