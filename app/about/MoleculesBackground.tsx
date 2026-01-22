export default function MoleculesBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {[...Array(25)].map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-pink-500/40
 blur-md animate-float"
          style={{
            width: `${Math.random() * 80 + 30}px`,
            height: `${Math.random() * 80 + 30}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 25 + 15}s`,
          }}
        />
      ))}
    </div>
  );
}
