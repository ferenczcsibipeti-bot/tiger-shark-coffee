const words = ['Espresso', 'Flat white', 'Tosti', 'Pastel de nata', 'Scheveningen', 'Surf', 'Specialty coffee']

export function Marquee() {
  const row = [...words, ...words]
  return (
    <div className="overflow-hidden border-b-2 border-foreground bg-foreground py-3 text-background" aria-hidden="true">
      <div className="flex w-max animate-[marquee_30s_linear_infinite] gap-8 motion-reduce:animate-none">
        {row.map((word, i) => (
          <span key={i} className="flex items-center gap-8 font-display text-2xl uppercase tracking-wider">
            {word}
            <span className="size-2 rotate-45 bg-background" />
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </div>
  )
}
