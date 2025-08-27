type NoteProps = {
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
};

export default function Note({
  title,
  content,
  createdAt,
  updatedAt,
}: NoteProps) {
  return (
    <article>
      <div></div>
    </article>
  );
}
