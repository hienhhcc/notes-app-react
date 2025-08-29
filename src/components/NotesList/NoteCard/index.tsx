import { Button } from "@/components/ui/button";
import { Note } from "@/types";
import { EditIcon, TrashIcon } from "lucide-react";

type NoteCardProps = Pick<Note, "title" | "content" | "updatedAt">;

export default function NoteCard({ title, content, updatedAt }: NoteCardProps) {
  return (
    <article className="group rounded-3xl border border-zinc-200/70 bg-white/70  p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-center gap-3">
        <h2 className="text-base font-semibold text-zinc-900 line-clamp-2">
          {title}
        </h2>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0 inline-flex gap-1">
          <Button variant="secondary" size="sm" aria-label="Edit">
            <EditIcon /> Edit
          </Button>
          <Button variant="destructive" size="sm" aria-label="Delete">
            <TrashIcon /> Delete
          </Button>
        </div>
      </div>
      <p className="mt-3 text-sm text-zinc-700 line-clamp-4 whitespace-pre-wrap">
        {content || "(No content)"}
      </p>
      <div className="mt-4 text-xs text-zinc-500 ">
        Updated {new Date(updatedAt).toLocaleString()}
      </div>
    </article>
  );
}
