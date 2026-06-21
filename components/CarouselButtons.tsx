"use client";

export default function CarouselButtons() {
  const scrollLeft = () => {
    document.getElementById("campaigns")?.scrollBy({
      left: -400,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    document.getElementById("campaigns")?.scrollBy({
      left: 400,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex justify-end gap-3 mb-6">
      <button
        onClick={scrollLeft}
        className="w-12 h-12 rounded-full border border-white/10 bg-zinc-950 hover:bg-zinc-900 transition-all"
      >
        ‹
      </button>

      <button
        onClick={scrollRight}
        className="w-12 h-12 rounded-full border border-white/10 bg-zinc-950 hover:bg-zinc-900 transition-all"
      >
        ›
      </button>
    </div>
  );
}