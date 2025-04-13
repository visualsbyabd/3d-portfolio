import { useRef, MouseEvent } from "react";

interface CardData {
  title: string | null;
}

interface GlowCardProps {
  card: CardData;
  index: number;
  children: React.ReactNode;
}

const GlowCard: React.FC<GlowCardProps> = ({ card, index, children }) => {
  // refs for all the cards
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // when mouse moves over a card, rotate the glow effect
  const handleMouseMove =
    (index: number) => (e: MouseEvent<HTMLDivElement>) => {
      const card = cardRefs.current[index];
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - rect.width / 2;
      const mouseY = e.clientY - rect.top - rect.height / 2;

      let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
      angle = (angle + 360) % 360;

      card.style.setProperty("--start", `${angle + 60}`);
    };

  return (
    <div
      ref={(el) => {
        cardRefs.current[index] = el;
      }}
      onMouseMove={handleMouseMove(index)}
      className="card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column"
    >
      <div className="glow"></div>
      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }, (_, i) => (
          <img key={i} src="/images/star.png" alt="star" className="size-5" />
        ))}
      </div>
      <div className="mb-5">
        <p className="text-white-50 text-lg">{card.title ?? ""}</p>
      </div>
      {children}
    </div>
  );
};

export default GlowCard;
