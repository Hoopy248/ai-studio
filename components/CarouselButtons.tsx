"use client";

export default function CarouselButtons() {
  const smoothScroll = (distance: number) => {
    const container = document.getElementById("campaigns");

    if (!container) return;

    const start = container.scrollLeft;
    const target = start + distance;
    const duration = 1000;

    let startTime: number | null = null;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;

      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      const ease =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      container.scrollLeft =
        start + (target - start) * ease;

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <div className="flex justify-end gap-3 mb-6">
      <button
        onClick={() => smoothScroll(-400)}
        className="w-12 h-12 rounded-full border border-white/10 bg-zinc-950 hover:bg-zinc-900 transition-all"
      >
        ‹
      </button>

      <button
        onClick={() => smoothScroll(400)}
        className="w-12 h-12 rounded-full border border-white/10 bg-zinc-950 hover:bg-zinc-900 transition-all"
      >
        ›
      </button>
    </div>
  );
}