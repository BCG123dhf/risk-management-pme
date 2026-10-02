export function KPIGrid({ items }: { items: { label: string; value: string; change: string }[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">{item.label}</p>
          <div className="mt-3 flex items-end justify-between">
            <span className="text-3xl font-bold text-slate-900">{item.value}</span>
            <span className="text-sm font-medium text-brand-700">{item.change}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
