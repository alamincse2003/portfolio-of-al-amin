export default function Tag({ children, muted = false }: { children: string; muted?: boolean }) {
  return (
    <li
      className={`rounded-md border px-2 py-0.5 font-mono text-xs ${
        muted ? "border-dashed border-line text-faint" : "border-line bg-subtle text-muted"
      }`}
    >
      {children}
    </li>
  );
}

export function TagList({ items, muted = false, label }: { items: string[]; muted?: boolean; label?: string }) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label={label}>
      {items.map((item) => (
        <Tag key={item} muted={muted}>
          {item}
        </Tag>
      ))}
    </ul>
  );
}
