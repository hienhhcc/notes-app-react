import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { NoteFormType } from "@/schemas/note-schema";
import { Control } from "react-hook-form";
type NoteTitleFormFieldProps = {
  control: Control<NoteFormType, any, NoteFormType>;
};

export default function NoteTitleFormField({
  control,
}: NoteTitleFormFieldProps) {
  return (
    <FormField
      control={control}
      name="title"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Title</FormLabel>
          <FormControl>
            <Input placeholder="e.g., Your title" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
