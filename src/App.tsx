import Header from "@/components/Header";
import NotesList from "@/components/NotesList";
import NoteCard from "@/components/NotesList/NoteCard";

const dummyNotes = [
  {
    title: "hello there",
    content: "dummy note",
    updatedAt: new Date(),
  },
  {
    title: "hello there",
    content: "dummy note",
    updatedAt: new Date(),
  },
  {
    title: "hello there",
    content: "dummy note",
    updatedAt: new Date(),
  },
];
function App() {
  return (
    <div className="w-full h-full">
      <Header />
      <main>
        <div className="container">
          <NotesList notes={dummyNotes} />
        </div>
      </main>
    </div>
  );
}

export default App;
