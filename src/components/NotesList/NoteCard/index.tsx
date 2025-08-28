import { Button } from "@/components/ui/button";
import { Note } from "@/types";
import { EditIcon, TrashIcon } from "lucide-react";

type NoteCardProps = Pick<Note, "title" | "content" | "updatedAt">;

export default function NoteCard({ title, content, updatedAt }: NoteCardProps) {
  return (
    <article className="group rounded-3xl">
      <div className="flex justify-between items-center">
        <h2>{title}</h2>
        {/* <div className="opacity:0 group-hover:opacity-100 transition-opacity shrink-0 gap-1">
          <Button variant="secondary" size="sm" className="size-8">
            <EditIcon /> Edit
          </Button>
          <Button variant="destructive" size="sm" className="size-8">
            <TrashIcon /> Delete
          </Button>
        </div> */}
      </div>
    </article>
  );
}
