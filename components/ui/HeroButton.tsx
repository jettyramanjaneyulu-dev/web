type HeroButtonProps = {
  text: string;
  onClick?: () => void;
};

export default function HeroButton({ text, onClick }: HeroButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
        px-8 py-3 rounded-full
        bg-transparent
        text-white
        border border-white
        hover:bg-white hover:text-black
        transition
      "
    >
      {text}
    </button>
  );
}