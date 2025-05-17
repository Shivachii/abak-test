type ObjectiveProps = {
  id: string;
  title: string;
  content: string;
  list?: { id: number; content: string }[];
};

export default function ObjectiveSection({
  id,
  title,
  content,
  list,
}: ObjectiveProps) {
  return (
    <section id={id.replace(/\s/g, "-")} className="scroll-mt-24">
      <h2 className="text-2xl font-bold text-primary mb-2">{title}</h2>
      <p className="text-gray-700 leading-relaxed mb-8">{content}</p>
      {list && list.length > 0 && (
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          {list.map((item) => (
            <li key={item.id}>{item.content}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
