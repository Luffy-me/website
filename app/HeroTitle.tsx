const TEXT = "Reliable AI systems, studied through economics.";

export function HeroTitle() {
  let n = 0;
  return (
    <h1 className="hero-title" aria-label={TEXT}>
      {TEXT.split(" ").map((word, w) => (
        <span key={w}>
          <span className="hero-word" aria-hidden="true">
            {Array.from(word).map((c, i) => {
              const r = ((n++ * 7919) % 97) / 97;
              return <span className="ch" key={i} style={{ "--r": r.toFixed(3) } as React.CSSProperties}>{c}</span>;
            })}
          </span>{" "}
        </span>
      ))}
    </h1>
  );
}
