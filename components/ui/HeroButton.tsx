export default function HeroButton({
  text,
  onClick,
}: {
  text: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="
        px-8 py-3 rounded-full
        bg-transparent
        text-white
        border border-white/50
        hover:bg-[#C93A7C]
        hover:border-[#C93A7C]
        transition-all duration-300
        uppercase tracking-widest text-sm
      "
    >
      {text}
    </button>
  );
}