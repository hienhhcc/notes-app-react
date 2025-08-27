import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

export default function Header() {
  return (
    <header className="px-4 py-4 border-b">
      <div className="container mx-auto flex items-center justify-between ">
        <div className="flex items-center gap-4">
          <span className="inline-flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white shadow-md shadow-indigo-500/30">
            📝
          </span>
          <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-900">
            Notes
          </h1>
        </div>

        <Button className="cursor-pointer">
          <PlusIcon />
          New note
        </Button>
      </div>
    </header>
  );
}
