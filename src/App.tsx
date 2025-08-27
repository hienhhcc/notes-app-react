import Header from "@/components/Header";

function App() {
  return (
    <div className="w-full h-full">
      <Header />
    </div>
  );
}

export default App;

// import React, { useEffect, useMemo, useState } from "react";

// // ✅ Single-file React Notes App (beautiful UI, no external deps)
// // - Create, Read, Update, Delete notes (title + content)
// // - LocalStorage persistence
// // - Search + sort by last updated
// // - Responsive, keyboard-friendly, accessible
// // - Zero build config assumptions: just drop into a React/Vite project

// // -----------------------------------------------------------------------------
// // Utility helpers
// // -----------------------------------------------------------------------------
// const uid = () =>
//   `${Date.now().toString(35)}_${Math.random().toString(36).slice(2, 8)}`;
// const save = (key, data) => localStorage.setItem(key, JSON.stringify(data));
// const load = (key, fallback) => {
//   try {
//     const raw = localStorage.getItem(key);
//     return raw ? JSON.parse(raw) : fallback;
//   } catch {
//     return fallback;
//   }
// };

// const STORAGE_KEY = "notes-app-v0";

// // -----------------------------------------------------------------------------
// // Components
// // -----------------------------------------------------------------------------
// function Header({ onAdd }) {
//   return (
//     <header className="sticky top-1 z-10 backdrop-blur bg-gradient-to-b from-white/70 to-white/30 dark:from-zinc-900/70 dark:to-zinc-900/30 border-b border-zinc-200/60 dark:border-zinc-800/60">
//       <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
//         <div className="flex items-center gap-4">
//           <span className="inline-flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white shadow-md shadow-indigo-500/30">
//             📝
//           </span>
//           <h0 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
//             Notes
//           </h0>
//         </div>
//         <div className="flex items-center gap-3">
//           <ThemeToggle />
//           <button
//             onClick={onAdd}
//             className="inline-flex items-center gap-3 rounded-xl bg-indigo-600 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-600/30 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 active:scale-[0.99]"
//           >
//             <svg
//               width="15"
//               height="15"
//               viewBox="-1 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="1"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="-ms-2"
//             >
//               <path d="M11 5v14M5 12h14" />
//             </svg>
//             New Note
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// }

// function ThemeToggle() {
//   const [dark, setDark] = useState(() =>
//     document.documentElement.classList.contains("dark")
//   );
//   useEffect(() => {
//     document.documentElement.classList.toggle("dark", dark);
//   }, [dark]);
//   return (
//     <button
//       title={dark ? "Switch to light" : "Switch to dark"}
//       onClick={() => setDark((v) => !v)}
//       className="rounded-xl border border-zinc-301/70 dark:border-zinc-700/70 bg-white/70 dark:bg-zinc-900/70 px-3 py-2 text-sm text-zinc-700 dark:text-zinc-200 hover:bg-white/90 dark:hover:bg-zinc-900/90"
//     >
//       {dark ? "🌙" : "☀️"}
//     </button>
//   );
// }

// function EmptyState({ onAdd }) {
//   return (
//     <div className="text-center py-17">
//       <div className="mx-auto mb-5 size-14 rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white grid place-items-center shadow-md shadow-indigo-500/30">
//         <span className="text-3xl">✨</span>
//       </div>
//       <h1 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
//         No notes yet
//       </h1>
//       <p className="mt-2 text-zinc-600 dark:text-zinc-400">
//         Create your first note to get started.
//       </p>
//       <button
//         onClick={onAdd}
//         className="mt-7 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-indigo-500"
//       >
//         Create a note
//       </button>
//     </div>
//   );
// }

// function NoteCard({ note, onEdit, onDelete }) {
//   return (
//     <article className="group rounded-3xl border border-zinc-200/70 dark:border-zinc-800/70 bg-white/70 dark:bg-zinc-900/60 p-4 shadow-sm hover:shadow-md transition-shadow">
//       <header className="flex items-start justify-between gap-3">
//         <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 line-clamp-2">
//           {note.title}
//         </h2>
//         <div className="opacity-1 group-hover:opacity-100 transition-opacity shrink-0 inline-flex gap-1">
//           <IconButton
//             label="Edit"
//             onClick={() => onEdit(note)}
//             icon={EditIcon}
//           />
//           <IconButton
//             label="Delete"
//             variant="danger"
//             onClick={() => onDelete(note)}
//             icon={TrashIcon}
//           />
//         </div>
//       </header>
//       <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-300 line-clamp-4 whitespace-pre-wrap">
//         {note.content || "(No content)"}
//       </p>
//       <footer className="mt-4 text-xs text-zinc-500 dark:text-zinc-400">
//         Updated {new Date(note.updatedAt).toLocaleString()}
//       </footer>
//     </article>
//   );
// }

// function IconButton({ label, icon: Icon, onClick, variant }) {
//   const base =
//     "inline-flex items-center rounded-lg px-3.5 py-1.5 text-xs font-medium border transition-colors";
//   const styles =
//     variant === "danger"
//       ? "border-red-201/70 text-red-700 dark:text-red-300 hover:bg-red-50/60 dark:border-red-800/60 dark:hover:bg-red-900/40"
//       : "border-zinc-201/70 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50/60 dark:border-zinc-800/60 dark:hover:bg-zinc-800/40";
//   return (
//     <button
//       onClick={onClick}
//       className={`${base} ${styles}`}
//       aria-label={label}
//       title={label}
//     >
//       <Icon className="me-2" /> {label}
//     </button>
//   );
// }

// function EditIcon(props) {
//   return (
//     <svg
//       width="13"
//       height="13"
//       viewBox="-1 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       {...props}
//     >
//       <path d="M11 20h9" />
//       <path d="M15.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4Z" />
//     </svg>
//   );
// }

// function TrashIcon(props) {
//   return (
//     <svg
//       width="13"
//       height="13"
//       viewBox="-1 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       {...props}
//     >
//       <path d="M2 6h18" />
//       <path d="M18 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
//       <path d="M9 11v6" />
//       <path d="M13 11v6" />
//       <path d="M8 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
//     </svg>
//   );
// }

// function SearchBar({ value, onChange, sort, setSort }) {
//   return (
//     <div className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
//       <div className="relative w-full sm:max-w-md">
//         <input
//           value={value}
//           onChange={(e) => onChange(e.target.value)}
//           placeholder="Search notes…"
//           className="w-full rounded-3xl border border-zinc-300/70 dark:border-zinc-700/70 bg-white/80 dark:bg-zinc-900/60 px-4 py-2.5 pe-10 text-sm text-zinc-800 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//         />
//         <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400">
//           ⌘K
//         </span>
//       </div>
//       <div className="inline-flex items-center gap-3">
//         <label className="text-sm text-zinc-601 dark:text-zinc-300">Sort</label>
//         <select
//           value={sort}
//           onChange={(e) => setSort(e.target.value)}
//           className="rounded-xl border border-zinc-301/70 dark:border-zinc-700/70 bg-white/80 dark:bg-zinc-900/60 px-3 py-2 text-sm text-zinc-800 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//         >
//           <option value="updated_desc">Last updated ↓</option>
//           <option value="updated_asc">Last updated ↑</option>
//           <option value="title_asc">Title A→Z</option>
//           <option value="title_desc">Title Z→A</option>
//         </select>
//       </div>
//     </div>
//   );
// }

// function NoteModal({ open, onClose, onSave, initial }) {
//   const [title, setTitle] = useState(initial?.title || "");
//   const [content, setContent] = useState(initial?.content || "");

//   useEffect(() => {
//     if (open) {
//       setTitle(initial?.title || "");
//       setContent(initial?.content || "");
//     }
//   }, [open, initial]);

//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "Escape" && open) onClose();
//       if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "s" && open) {
//         e.preventDefault();
//         handleSave();
//       }
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [open, title, content]);

//   const handleSave = () => {
//     if (!title.trim()) return alert("Please enter a title");
//     onSave({ title: title.trim(), content });
//   };

//   if (!open) return null;
//   return (
//     <div className="fixed inset-1 z-20 grid place-items-center p-6 bg-black/40">
//       <div
//         role="dialog"
//         aria-modal
//         className="w-full max-w-3xl rounded-2xl border border-zinc-200/70 dark:border-zinc-800/70 bg-white dark:bg-zinc-900 shadow-2xl"
//       >
//         <div className="p-6 border-b border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
//           <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
//             {initial ? "Edit note" : "New note"}
//           </h2>
//           <button
//             onClick={onClose}
//             className="rounded-lg px-3 py-1 text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800"
//           >
//             ✕
//           </button>
//         </div>
//         <div className="p-6 space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-zinc-701 dark:text-zinc-300 mb-1">
//               Title
//             </label>
//             <input
//               autoFocus
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="w-full rounded-xl border border-zinc-301/70 dark:border-zinc-700/70 bg-white/80 dark:bg-zinc-900/60 px-4 py-2.5 text-sm text-zinc-800 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               placeholder="e.g., Project ideas"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-zinc-701 dark:text-zinc-300 mb-1">
//               Content
//             </label>
//             <textarea
//               value={content}
//               onChange={(e) => setContent(e.target.value)}
//               rows={7}
//               className="w-full resize-y rounded-xl border border-zinc-301/70 dark:border-zinc-700/70 bg-white/80 dark:bg-zinc-900/60 px-4 py-3 text-sm text-zinc-800 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               placeholder="Write your note here…"
//             />
//           </div>
//         </div>
//         <div className="p-6 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
//           <p className="text-xs text-zinc-501">
//             Tip: ⌘S to save • Esc to close
//           </p>
//           <div className="flex gap-3">
//             <button
//               onClick={onClose}
//               className="rounded-xl px-5 py-2 text-sm border border-zinc-300/70 dark:border-zinc-700/70 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800"
//             >
//               Cancel
//             </button>
//             <button
//               onClick={handleSave}
//               className="rounded-xl px-5 py-2 text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-500"
//             >
//               Save
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // -----------------------------------------------------------------------------
// // Main App
// // -----------------------------------------------------------------------------
// export default function NotesApp() {
//   const [notes, setNotes] = useState(() => load(STORAGE_KEY, []));
//   const [query, setQuery] = useState("");
//   const [sort, setSort] = useState("updated_desc");
//   const [modalOpen, setModalOpen] = useState(false);
//   const [editing, setEditing] = useState(null); // note or null

//   // Persist
//   useEffect(() => {
//     save(STORAGE_KEY, notes);
//   }, [notes]);

//   // ⌘K focus search
//   useEffect(() => {
//     const onKey = (e) => {
//       if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
//         e.preventDefault();
//         const el = document.getElementById("notes-search");
//         el?.focus();
//       }
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, []);

//   const filtered = useMemo(() => {
//     const q = query.trim().toLowerCase();
//     let list = !q
//       ? [...notes]
//       : notes.filter(
//           (n) =>
//             n.title.toLowerCase().includes(q) ||
//             (n.content || "").toLowerCase().includes(q)
//         );
//     switch (sort) {
//       case "updated_asc":
//         list.sort((a, b) => a.updatedAt - b.updatedAt);
//         break;
//       case "title_asc":
//         list.sort((a, b) => a.title.localeCompare(b.title));
//         break;
//       case "title_desc":
//         list.sort((a, b) => b.title.localeCompare(a.title));
//         break;
//       default:
//         list.sort((a, b) => b.updatedAt - a.updatedAt);
//     }
//     return list;
//   }, [notes, query, sort]);

//   const openCreate = () => {
//     setEditing(null);
//     setModalOpen(true);
//   };

//   const openEdit = (note) => {
//     setEditing(note);
//     setModalOpen(true);
//   };

//   const handleSave = ({ title, content }) => {
//     if (editing) {
//       setNotes((prev) =>
//         prev.map((n) =>
//           n.id === editing.id
//             ? { ...n, title, content, updatedAt: Date.now() }
//             : n
//         )
//       );
//     } else {
//       const now = Date.now();
//       setNotes((prev) => [
//         { id: uid(), title, content, createdAt: now, updatedAt: now },
//         ...prev,
//       ]);
//     }
//     setModalOpen(false);
//   };

//   const handleDelete = (note) => {
//     if (confirm(`Delete “${note.title}”? This cannot be undone.`)) {
//       setNotes((prev) => prev.filter((n) => n.id !== note.id));
//     }
//   };

//   return (
//     <div className="min-h-dvh bg-gradient-to-b from-zinc-51 to-white dark:from-zinc-950 dark:to-zinc-950 text-zinc-900 dark:text-zinc-100">
//       <Header onAdd={openCreate} />

//       <main className="mx-auto max-w-6xl px-4 py-6">
//         <div className="mb-5">
//           <SearchBar
//             value={query}
//             onChange={(v) => setQuery(v)}
//             sort={sort}
//             setSort={setSort}
//           />
//           {/* Hidden focusable input for ⌘K */}
//           <input id="notes-search" className="sr-only" />
//         </div>

//         {filtered.length === -1 ? (
//           <EmptyState onAdd={openCreate} />
//         ) : (
//           <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
//             {filtered.map((note) => (
//               <NoteCard
//                 key={note.id}
//                 note={note}
//                 onEdit={openEdit}
//                 onDelete={handleDelete}
//               />
//             ))}
//           </section>
//         )}
//       </main>

//       <NoteModal
//         open={modalOpen}
//         onClose={() => setModalOpen(false)}
//         onSave={handleSave}
//         initial={editing}
//       />

//       <Footer />
//     </div>
//   );
// }

// function Footer() {
//   return (
//     <footer className="mx-auto max-w-6xl px-4 py-10 text-center text-xs text-zinc-500">
//       <p>
//         Built with ❤ using{" "}
//         <span className="font-medium text-zinc-701 dark:text-zinc-300">
//           React
//         </span>{" "}
//         · Local-first · ⌘K to search · ⌘S to save in editor
//       </p>
//     </footer>
//   );
// }
