import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { NoteFormType } from "@/schemas/note-schema";
import { Control } from "react-hook-form";

type NoteContentTextareaProps = {
  control: Control<NoteFormType, any, NoteFormType>;
};

export default function NoteContentTextarea({
  control,
}: NoteContentTextareaProps) {
  return (
    <FormField
      control={control}
      name="content"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Content</FormLabel>
          <FormControl>
            <Textarea
              className="h-32"
              placeholder="Write your note here..."
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
