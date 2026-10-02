export function RiskChart() {
  const months = ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin"];
  const values = [10, 12, 11, 17, 19, 22];

  return (
    <div className="flex h-full items-end gap-3">
      {months.map((month, index) => (
        <div key={month} className="flex flex-1 flex-col items-center gap-2">
          <div
            className="w-full rounded-t-xl bg-brand-500"
            style={{ height: `${values[index] * 12}px` }}
          />
          <span className="text-xs text-slate-500">{month}</span>
        </div>
      ))}
    </div>
  );
}
